import express from "express"

import cors from 'cors';

import router from './routes/api.js';

const app = express();

// ALL CODE WILL BE HERE 


///Middlewares 
app.use(express.json());
app.use(express.urlencoded({ extended : true }));
app.use(cors())





// Routes entry point 
app.use('/api/v1', router);
export default app;
