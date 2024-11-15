require('dotenv').config();  // Load environment variables from .env file

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const portfinder = require('portfinder');  // To find an available port

// Load MongoDB connection string from the environment
const mongo_url = process.env.MONGO_CONN;

// Connect to MongoDB
mongoose.connect(mongo_url)
    .then(() => {
        console.log('MongoDB connected successfully!');
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err);
    });

// Middleware
app.use(cors());
app.use(express.json());  // For parsing JSON request bodies

// Example Route
app.get('/', (req, res) => {
    res.send('Hello from backend!');
});

// Dynamically choose an available port using portfinder
portfinder.getPortPromise()
    .then((port) => {
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    })
    .catch((err) => {
        console.error('Error finding an available port:', err);
    });
