const passport = require('passport')
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;

passport.use(new GoogleStrategy({
    clientID:     "1048333348955-ldi1t3mpvl0ivnocfi4jf567359mjm81.apps.googleusercontent.com",
    clientSecret: "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", 
    callbackURL: "http://localhost:500/google/home",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return done(err, user);
    // });
    return done(err, profile);
  }
));

passport.serializeUser(function(user, done) {
    done(null, user)
})
passport.deserializeUser(function(user, done) {
    done(null, user)
})