import { Router } from 'express';

import authorize from '../middleware/auth.middleware.js';
import { getUser, getUsers } from '../controller/user.controller.js';

const userRouter = Router();

userRouter.get('/', getUsers);
userRouter.get('/:id', authorize, getUser);
userRouter.post('/', (req, res) => res.send({ titile: 'CREATE new users'}));
userRouter.put('/:id', (req, res) => res.send({ titile: 'UPDATE user'}));
userRouter.delete('/:id', (req, res) => res.send({ titile: 'DELETE user'}));

export default userRouter;