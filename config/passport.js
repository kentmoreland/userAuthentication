const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');

module.exports = (passport) => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
  });

  passport.use('signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,
  },
  (req, email, password, done) => {
    process.nextTick(() => {
      User.findOne({ 'local.email': email }, (err, user) => {
        if (err) {
          return done(err);
        }

        if (user) {
          return done(null, false, req.flash('signupMessage', 'that email is already taken'));
        }
        const newUser = new User();
        newUser.local.email = email;
        newUser.local.password = newUser.generateHash(password);
        newUser.save((error) => {
          if (error) {
            throw err;
          }
          return done(null, newUser);
        });
      });
    });
  }));

  // LOGIN

  passport.use('login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,
  },
  (req, email, password, done) => {
    User.findOne({ 'local.email': email }, (err, user) => {
      if (err) {
        return done(err);
      }

      if (!user) {
        return done(null, false, req.flash('loginMessage', 'No user found.'));
      }

      if (!user.validPassword(password)) {
        return done(null, false, req.flash('loginMessage', 'Oops! wrong password'));
      }

      return done(null, user);
    });
  }));
};
