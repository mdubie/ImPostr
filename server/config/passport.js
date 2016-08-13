const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../users/user.model');
const TwitterStrategy = require('passport-twitter').Strategy;
const Settings = require('../settings/setting.model');
const config = require('./config');
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
const { LINKEDIN_KEY, LINKEDIN_SECRET } = require('../../__cutestuff');

passport.use(new JwtStrategy(
  {
    secretOrKey: config.secret,
    jwtFromRequest: ExtractJwt.fromAuthHeader()
  }, (jwtPayload, done) => {
    User.findOne({ where: { userId: jwtPayload.userId }})
    .then(user => {
      if (user) {
        done(null, user);
      } else {
        done(null, false);
      }
    })
    .catch(done);
  }
));

passport.use(new LinkedInStrategy({
  clientID: LINKEDIN_KEY,
  clientSecret: LINKEDIN_SECRET,
  callbackURL: `http://localhost:3000/auth/linkedin/callback`,
  scope: ['r_emailaddress', 'r_basicprofile', 'w_share'],
}, (...args) => {
  process.nextTick((accessToken, refreshToken, profile, done) => {
  });
}
));

passport.use(new TwitterStrategy(
  {
    consumerKey: config.twitterConsumerKey,
    consumerSecret: config.twitterConsumerSecret,
    callbackURL: 'http://127.0.0.1:3000/auth/twitter/callback',
  }, (token, tokenSecret, profile, done) => {
    const userTwitterInfo = {
      token,
      tokenSecret,
      profile,
    };
    done(null, userTwitterInfo);
  }
));
