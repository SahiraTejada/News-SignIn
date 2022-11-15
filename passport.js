const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GithubStrategy = require("passport-github2").Strategy;

const passport = require("passport");
const GOOGLE_CLIENT_ID = "657945589069-hflrp9ng3d3i548mqpq869go8jhtpc1p.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET = "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"
const GITHUB_CLIENT_ID = "dc5558e0ad56d54017c8"
const GITHUB_CLIENT_SECRET = "26e4c97dfd9a29754716de26c8d9b392cd047c6a"


passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(new GithubStrategy({
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    callbackURL: "/auth/github/callback"
  },
  function (accessToken, refreshToken, profile, done) {
      done(null, profile);
  }
))

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});