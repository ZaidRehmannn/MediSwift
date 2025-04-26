import express from 'express';
import { loginUser, registerUser, userInfo } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.get('/info', userInfo);

export default userRouter;