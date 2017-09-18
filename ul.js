const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router/routes')

require('dotenv').config({path: './variables.env'});

const ul = express();

ul.set('port', process.env.PORT);
ul.set('view engine', 'ejs');

ul.use(bodyParser.json());
ul.use(bodyParser.urlencoded({extended: true}));

ul.use('/', router);

module.exports = ul;


