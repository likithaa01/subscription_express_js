import jwt from 'jsonwebtoken';
import { JWT_SECRET } from "../config/env.js";
import User from "../models/user.model.js"; // ✅ Add this

const authorize = async (req, res, next) => {
    try {
        let token;

        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
            token = req.headers.authorization.split(' ')[1];
        }

        if (!token) {
            return res.status(401).json({ message: 'Unauthorized: Token not found' });
        }

        const decoded = jwt.verify(token, JWT_SECRET); // ✅ Fixed

        const user = await User.findById(decoded.userId).select('-password');

        if (!user) {
            return res.status(401).json({ message: 'Unauthorized: User not found' });
        }

        req.user = user;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Unauthorized', error: error.message });
    }
};

export default authorize;
