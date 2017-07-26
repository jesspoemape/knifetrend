const passport = require('passport');
const Auth0Strategy = require('passport-auth0');

const db = require('./db/models/index');

const strategy = new Auth0Strategy({
  domain: process.env.AUTH0_DOMAIN,
  clientID: process.env.AUTH0_CLIENT_ID,
  clientSecret: process.env.AUTH0_CLIENT_SECRET,
  callbackURL: process.env.AUTH0_CALLBACK_URL
},  (accessToken, refreshToken, extraParams, profile, done) => {

      const auth_id = profile.identities[0].user_id;
      const provider = profile.provider;
      const{ name, nickname, picture} = profile._json;

      db.User.find({
        where: { auth_id: auth_id }
      }).then(user => {
        if(!user) {
          db.User.create({
            name: name,
            username: nickname,
            avatar: picture,
            auth_id: auth_id,
            auth_provider: provider
          }).then(newUser => {})
        } else {
          user.update({
            name: name,
            username: nickname,
            avatar: picture,
            auth_provider: provider
          }).then(newUser => {})
        }
      })
      return done(null, profile);
    }
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

module.exports = passport.use(strategy);
