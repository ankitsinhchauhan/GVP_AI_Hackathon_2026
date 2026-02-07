const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connectDB = require('./config/database');
const studentRoutes = require('./routes/studentRoutes');

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.use('/api/students', studentRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'Server is running',
  });
});

// Default route
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'AI Smart Attendance & Performance Tracker API',
    version: '1.0.0',
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Visit http://localhost:${PORT}/api/health to check server status`);
});
