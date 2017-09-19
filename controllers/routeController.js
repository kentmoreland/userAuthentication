exports.getHomeView = (req, res) => {
  res.render('index');
};

exports.getSignupView = (req, res) => {
  res.render('signup', { message: req.flash('signupMessage') });
};

exports.getLoginView = (req, res) => {
  res.render('login', { message: req.flash('loginMessage') });
};

exports.getProfileView = (req, res) => {
  res.render('profile');
};
