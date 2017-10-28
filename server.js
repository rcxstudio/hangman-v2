const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongoose = require("mongoose");
const logger = require("morgan");

//TODO: add mongo models
// import User from './models/User.js'

// Sets mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(logger("dev")); // what is this?
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.use(methodOverride('_method'));

app.use(express.static('public'));
mongoose.connect("mongodb://localhost/hangman");
// mongoose.connect("mongodb://heroku_n9jhvtvp:2ljmj0t4f8kvq1h8uvfli79tnc@ds151431.mlab.com:51431/heroku_n9jhvtvp");
const db = mongoose.connection;

db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});


// Routes import
const router = require('./controllers/routes.js');

app.use('/', router);

app.listen(PORT, function() {
  console.log("App running on port 3000!");
});
