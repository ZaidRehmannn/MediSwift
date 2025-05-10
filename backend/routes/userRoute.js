import express from 'express';
import { loginUser, registerUser, userInfo } from '../controllers/userController.js';
import authMiddleware from '../middleware/auth.js';

const userRouter = express.Router();

userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.get('/info', authMiddleware , userInfo);

export default userRouter;