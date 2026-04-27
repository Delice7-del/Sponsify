const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

const app = express();

// Security Middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());
 
app.get("/", (req, res) => {
  res.send("🚀 Sponsify Backend is running successfully!");
});
// Database Connection & Server Start
const startServer = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is not defined in environment variables");
    }
    
    // Connection listeners
    mongoose.connection.on('connected', () => console.log('✅ Mongoose connected to MongoDB'));
    mongoose.connection.on('error', (err) => console.error('❌ Mongoose connection error:', err.message));
    mongoose.connection.on('disconnected', () => console.log('⚠️ Mongoose disconnected from MongoDB'));

    console.log(`🔌 Connecting to MongoDB: ${process.env.MONGO_URI}`);
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB connected successfully");

    // Routes
    const childRoutes = require('./routes/childRoutes');
    const userRoutes = require('./routes/userRoutes');

    app.use('/api/child', childRoutes);
    app.use('/api/auth', userRoutes);

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`🚀 Server is running at http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('❌ Database connection failed:', err.message);
    process.exit(1); // Exit process if connection fails
  }
};

startServer();