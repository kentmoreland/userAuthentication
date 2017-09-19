const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router/routes');
const path = require('path');

require('dotenv').config({ path: './variables.env' });

const ul = express();

ul.set('port', process.env.PORT);
ul.set('view engine', 'ejs');

ul.use(bodyParser.json());
ul.use(bodyParser.urlencoded({ extended: true }));

ul.use('/', router);
ul.use('/', express.static(path.join(__dirname, '/public')));

module.exports = ul;
