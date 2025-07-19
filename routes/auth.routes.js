import { Router } from 'express';
import { title } from 'process';

import { signUp } from '../controller/auth.controller.js';
import { signIn, signOut } from '../controller/auth.controller.js';


const authRouter = Router();

//Path = /api/v1/auth/sign-up (POST)
authRouter.post('/sign-up', signUp);
authRouter.post('/sign-in', signIn);
authRouter.post('/sing-out', signOut);

export default authRouter;