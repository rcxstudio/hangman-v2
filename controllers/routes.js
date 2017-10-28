const express = require('express');

const router = express.Router();

const User = require('./models/User.js');
const Theme = require('./models/Theme.js');

// Create all our routes and set up logic within those routes where required.
router.get('/', (req, res) => {
  console.log('hello')
});

// Export routes for server.js to use.
module.exports = router;
// export default router;
