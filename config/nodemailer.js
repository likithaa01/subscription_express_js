import nodemailer from 'nodemailer';
import { EMAIL_PASSWORD } from './env.js';

export const accountEmail = 'likithaa01p@gmail.com';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: accountEmail,      // FIXED
        pass: EMAIL_PASSWORD     // FIXED
    }
});

export default transporter;
