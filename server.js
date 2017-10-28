// const express = require('express');
import express from 'express';
// const bodyParser = require('body-parser');
import bodyParser from 'body-parser';
// const methodOverride = require('method-override');
import methodOverride from 'method-override';
// const mongoose = require("mongoose");
import mongoose from 'mongoose';
// const logger = require("morgan");
import logger from 'morgan'; // is logger default export?

//TODO: add mongo models
// const User = require('..')

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
// const routes = require('./controllers/html-routes.js');
import routes from './controllers/html-routes.js';
// const routes = require('./controllers/api-routes.js');
app.use('/', routes);

app.listen(PORT, function() {
  console.log("App running on port 3000!");
});
