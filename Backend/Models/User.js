const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true, // Store email in lowercase for uniformity
    trim: true, // Remove extra spaces from email
  },
  password: {
    type: String,
    required: true,
  }
}, { timestamps: true }); // Automatically add createdAt and updatedAt timestamps

const UserModel = mongoose.model('User', UserSchema); // 'users' will be the collection name in the database

module.exports = UserModel;
