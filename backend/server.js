import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import medicineRouter from './routes/medicineRoute.js';
import userRouter from './routes/userRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';
import queryRouter from './routes/queryRoute.js';

// app config
const app = express();
const port = process.env.PORT || 4000;

// middleware
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5173', 'http://localhost:5174', 'https://medi-swift-frontend.vercel.app', 'https://medi-swift-admin.vercel.app'],
    methods: ['GET', 'POST'],
    credentials: true
}));

// db connection
connectDB();

// api endpoints
app.use('/api/medicine', medicineRouter);
app.use('/api/user', userRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);
app.use('/api/query', queryRouter);

app.get('/', (req, res) => {
    res.send('API Working')
})

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
})
