const mongoose = require('mongoose');

// MongoDB connection string from environment variable
const mongo_url = process.env.MONGO_CONN;

// Connecting to MongoDB
mongoose.connect(mongo_url)
    .then(() => {
        console.log('MongoDB connected successfully!');
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err);
    });
