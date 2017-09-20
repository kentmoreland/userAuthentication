const passport = require('passport');

exports.getHomeView = (req, res) => {
  res.render('index');
};

exports.getSignupView = (req, res) => {
  res.render('signup', { message: req.flash('signupMessage') });
};

exports.newSignup = passport.authenticate('signup', {
  successRedirect: '/profile',
  failureRedirect: '/signup',
  failureFlash: true,
});

exports.getLoginView = (req, res) => {
  res.render('login', { message: req.flash('loginMessage') });
};

exports.getProfileView = (req, res) => {
  res.render('profile', {
    user: req.user,
  });
};

exports.logout = (req, res) => {
  req.logout();
  res.redirect('/');
};
