const express = require('express');
const routeController = require('../controllers/routeController');

const router = express.Router();

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
}

router.get('/', routeController.getHomeView);
router.get('/signup', routeController.getSignupView);
router.post('/signup', routeController.newSignup);
router.get('/login', routeController.getLoginView);
router.get('/profile', isLoggedIn, routeController.getProfileView);


module.exports = router;
