const express = require('express');
const router = express.Router();
const path = require('path');
const db = require('../server.js');

const User = require('../models/User.js');
const Theme = require('../models/Theme.js');

// NOTE: this file doesn't seem to be getting triggered!
// NOTE: THIS FILE MAY NOT BE NECESSARY!
// Create all our routes and set up logic within those routes where required.
router.get('/', (req, res) => {
  console.log('hello')
});

router.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Export routes for server.js to use.
module.exports = router;
// export default router;
