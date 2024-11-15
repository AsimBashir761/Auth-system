
const bcrypt = require('bcrypt');

const User = require('../Models/User');
const jwt = require('jsonwebtoken');

// Signup Handler
exports.signup = async (req, res) => {
  const { name, email, password } = req.body;

  // Validate request body
  if (!name || !email || !password) {
    return res.status(400).json({ success: false, message: 'Please provide all required fields' });
  }

  try {
    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ success: false, message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword
    });

    await newUser.save();

    // Generate a token (optional but recommended for authentication)
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Send success response
    return res.status(201).json({
      success: true,
      message: 'User signed up successfully!',
      jwtToken: token // If you want to send back a token after signup
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: 'Server error, please try again later' });
  }
};
