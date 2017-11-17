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

//NOTE: with webpack, bundle.js needs to be in the public folder...check docs
app.use(express.static(path.join(__dirname, 'public')));


const Theme = require('./models/Theme.js');
//TODO: add the heroku link below
//database logic
// if (process.env.MONGODB_URI || process.env.NODE_ENV === 'production') mongoose.connect(process.env.MONGODB_URI);
// else mongoose.connect("mongodb://localhost/hangman");
const promise = mongoose.connect('mongodb://localhost/hangman', {
  useMongoClient: true,
  /* other options */
});

const db = mongoose.connection;

db.on("error", (error) => {
  console.log("Mongoose Error: ", error);
});

db.once("open", () => {
  console.log("Mongoose connection successful.");
});

// NOTE: BACKEND ROUTES HAPPEN HERE!
// "html-routes" are handled by react-router

app.get('/api/videogames', (req, res) => {
  console.log('TRIGGER');
  console.log(req.body);
  Theme.findOne({ theme: 'Video Games'}, (err, foundWords) => {
    /* NOTE: foundWords is an object containing a lot of information. If you want to access just the contents you are "expecting", then you need to call on foundUser.data to access the specific content that is being sent back in res.send()*/
    if (err) throw err;
    else {
      console.log('helper!', foundWords.data);
      res.send(foundWords.data.themeBank);
    }
  })
});

// NOTE: THIS IS THE CATCHALL ROUTE AND MUST BE PLACED AT THE END OF THE ROUTES!
// NOTE: Allows react-router to refresh page also!
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
//END OF ROUTES

app.listen(PORT, () => {
  console.log("App running on port 3000!");
});
