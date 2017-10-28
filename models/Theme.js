const mongoose = require("mongoose");

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
module.export = Theme;
