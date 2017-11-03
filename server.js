// NOTE: Complete ES6 syntax isn't supported on browsers yet. Need to use webpack and Babel to compile the syntax into ES5 syntax.
const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require('path');

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

app.use(express.static(path.join(__dirname, 'public')));

//TODO: add the heroku link below
//database logic
// if (process.env.MONGODB_URI || process.env.NODE_ENV === 'production') mongoose.connect(process.env.MONGODB_URI);
// else mongoose.connect("mongodb://localhost/testUserDB");
const promise = mongoose.connect('mongodb://localhost/hangman', {
  useMongoClient: true,
  /* other options */
});

const db = mongoose.connection;
module.export = db; // NOTE: is this needed for other file routes to work?

db.on("error", (error) => {
  console.log("Mongoose Error: ", error);
});

db.once("open", () => {
  console.log("Mongoose connection successful.");
});


// NOTE: Routes import. is this possible?
// const router = require('./controllers/routes.js');
// above line doesn't actually do anything except set the routes to a constant called "router".

// NOTE: BACKEND ROUTES HAPPEN HERE!
// "html-routes" are handled by react-router


// NOTE: THIS IS THE CATCHALL ROUTE AND MUST BE PLACED AT THE END OF THE ROUTES.
// Allows react-router to refresh page
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
//END OF ROUTES

app.listen(PORT, () => {
  console.log("App running on port 3000!");
});
