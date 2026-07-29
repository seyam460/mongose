import express from "express";
import cors from "cors";
import ratelimit from "express-rate-limit";
import helmet from "helmet";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import { database, max_json_size, PORT, request_number, request_time, url_encode, web_cache } from "./app/config/config.js";
import router from './routes/api.js';

const app = express();

// app use default middleware 
app.use(cors())
app.use(express.json({ limit : max_json_size}));
app.use(express.urlencoded({ extended: url_encode}));
app.use(helmet());
app.use(cookieParser());

// app use limiter 
const limiter = ratelimit({ windows: request_time , max: request_number})
app.use(limiter);

// cache 
app.set('etag' , web_cache)

// database connect 
mongoose.connect(database , {autoIndex : true}).then(() => {
      console.log("Mongodb connected");
}).catch(() => {
    console.log("MongoDb Disconnected");
})


// Routes 
app.use("/api/v1" , router);

app.listen(PORT , () => {
    console.log("Server started on port")
})