const express = require('express');
const router = express.Router();
const { signup } = require('../Controllers/AuthController'); // Import the signup function from AuthController

// POST request to handle signup
router.post('/signup', signup);

module.exports = router;
