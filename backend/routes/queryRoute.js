import express from 'express';
import { sendQuery, fetchQueries } from '../controllers/queryController.js';

const queryRouter = express.Router();

queryRouter.post('/send', sendQuery);
queryRouter.get('/fetch', fetchQueries);

export default queryRouter;