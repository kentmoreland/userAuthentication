const express = require('express');
const routeController = require('../controllers/routeController');

const router = express.Router();

router.get('/', routeController.getHomeView);


module.exports = router;
