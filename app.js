import express from 'express';
import cors from 'cors';
import { logger } from './src/config/logger.js';
import {errorMiddleware} from './src/middleware/error-middleware.js';
import { publicRouter } from './src/routes/api-public.js';


const app = express()
app.use(cors())
app.use(express.json())
app.use(publicRouter)


app.use(errorMiddleware)
app.listen(3000,()=> {
    logger.info("app run!")
})