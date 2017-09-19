const express = require('express');
const routeController = require('../controllers/routeController');

const router = express.Router();

router.get('/', routeController.getHomeView);
router.get('/signup', routeController.getSignupView);
router.get('/login', routeController.getLoginView);
router.get('/profile', routeController.getProfileView);


module.exports = router;
