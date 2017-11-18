const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const themeSchema = new Schema({
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

const Theme = mongoose.model('Theme', themeSchema);
module.exports = Theme;
