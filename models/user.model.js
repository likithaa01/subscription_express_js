//import { timeStamps } from "console";
import mongoose from "mongoose";
import { type } from "os";

const userSchema = new mongoose.Schema( {
    name: { 
        type: String,
        required: [true, 'User Name is required'],
        trim: true,
        maxLength: 50,
    },
    email: {
        type: String,
        required: [true, 'User Email is required'],
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 5,
        maxLength: 255,
        match: [/\S+@\S+\.\S+/, 'Please fill a vaild email address'],        
    },
    password: {
        type: String,
        required: [true, 'User password is required'],
        minLength: 6,
    }
}, {
    timeStamps: true
});

const User = mongoose.model('User', userSchema);

export default User;
