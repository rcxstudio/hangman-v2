const express = require('express');

const router = express.Router();

// Import the model (burger.js) to use its database functions.
// var burger = require("../models/burger.js");
// var db = require('../models');

// Create all our routes and set up logic within those routes where required.
router.get('/', (req, res) => {
  console.log('hello')
});

// Export routes for server.js to use.
module.exports = router;
// export default router;
