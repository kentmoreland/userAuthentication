const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router/routes');
const path = require('path');
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');
const sessionConfig = require('./config/sessionConfig');


require('dotenv').config({ path: './variables.env' });
require('./config/passport')(passport);

const ul = express();

ul.set('port', process.env.PORT);
ul.set('view engine', 'ejs');

ul.use(bodyParser.json());
ul.use(bodyParser.urlencoded({ extended: true }));

ul.use(session({ secret: sessionConfig.secret }));
ul.use(passport.initialize());
ul.use(passport.session());
ul.use(flash());

ul.use('/', router);
ul.use('/', express.static(path.join(__dirname, '/public')));

module.exports = ul;
