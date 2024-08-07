const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
const mongoose = require('mongoose');
const Teacher = mongoose.model('Teacher'); // Ensure Teacher model is registered
const config = require('../config');

module.exports = new JwtStrategy(
  {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.secretOrKey,
  },
  (jwtPayload, done) => {
    Teacher.findById(jwtPayload.id)
      .then((teacher) => {
        if (teacher) {
          return done(null, teacher);
        }
        return done(null, false);
      })
      .catch((err) => done(err, false));
  }
);
