// const mongoose = require("mongoose");
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  loggedIn: {
    type: Boolean,
    default: false,
    required: true
  },
  chosenTheme: {
    type: String,
    default: 'fantasy'
  },
  wins: {
    type: Number,
    default: 0
  },
  losses: {
    type: Number,
    default: 0
  }
});

const User = mongoose.model('User', UserSchema);
export default User; //check if syntax ok for ES6
