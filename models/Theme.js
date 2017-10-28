// const mongoose = require("mongoose");
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ThemeSchema = new Schema({
  category: [
    {
      type: String,
      unique: true
    }
  ]
});

const Theme = mongoose.model('Theme', ThemeSchema);
export default Theme;
