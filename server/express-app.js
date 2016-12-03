const path    = require('path');
const express = require('express');

const bodyParser     = require('body-parser');
const methodOverride = require('method-override');

const config = require('../config/app-config');
const auth   = require('./lib/auth');

const API_HOST = process.env.API_HOST || 'localhost';
const API_PORT = process.env.API_PORT || 3000;

const STATIC_PATH     = path.resolve(__dirname, '../dist');
const MAIN_INDEX_PATH = path.resolve(STATIC_PATH, 'index.html');

const app = express();

module.exports = {
  launchApp
};

auth.setSecret(config.jwt.secret);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(methodOverride());

app.use(express.static(STATIC_PATH));


require('./router')(app);
app.all('/*', (req, res) => res.sendFile(MAIN_INDEX_PATH));

function launchApp() {
  console.log(`Launching the express application...`);

  app.listen(API_PORT);

  console.log(`\tenvironment: ${app.get('env')}`);
  console.log(`\tThe server is running on ${API_HOST}:${API_PORT}`);
}

