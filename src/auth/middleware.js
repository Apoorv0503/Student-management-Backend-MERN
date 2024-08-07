const passport = require('passport');
const jwtStrategy = require('./jwtStrategy');

passport.use(jwtStrategy);

exports.authenticate = passport.authenticate('jwt', { session: false });
