const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ThemeSchema = new Schema({
  theme: {
    type: String,
    unique: true
  },
  themeBank: [
    {
      type: String,
      unique: true
    }
  ]
});

const Theme = mongoose.model('Theme', ThemeSchema);
module.export = Theme;
