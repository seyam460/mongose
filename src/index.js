import app from './app.js';
import config from './config/config.js';
import mongoose from 'mongoose';

// config object থেকে value নেওয়া
const { port, mongoURI } = config;

// MongoDB connect
mongoose
  .connect(mongoURI)
  .then(() => {
    console.log('Connected to MongoDB');

    // Database connect হওয়ার পর server start
    app.listen(port, () => {
      console.log(`🚀 Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error('❌ MongoDB Connection Error:');
    console.error(err.message);
  });

// Check env variables
console.log('PORT:', port);
console.log('MONGO_URI:', mongoURI);