const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const db = require('./models');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.use(methodOverride('_method'));

app.use(express.static('public'));

// Routes import
const routes = require('./controllers/html-routes.js');
// const routes = require('./controllers/api-routes.js');
app.use('/', routes);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
  });
});
