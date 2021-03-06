const passport = require('passport'),
  JwtStrategy = require('passport-jwt').Strategy,
  ExtractJwt = require('passport-jwt').ExtractJwt,
  Writer = require('../../db/models/writerModel')

let jwtOptions = {
  jwtFromRequest: (req) => {
    return req?.cookies?.jwt || ExtractJwt.fromAuthHeaderWithScheme('jwt')(req);
  },
  secretOrKey: process.env.JWT_SECRET
};

passport.use(
  'jwt',
  new JwtStrategy(jwtOptions, async (jwtPayload, done) => {
    if (Date.now() > jwtPayload.expires) {
      return done(null, false, { message: 'jwt expired' });
    }
    let { iat, exp, ...writerData } = jwtPayload;
    writerData = await Writer.findById(writerData._id);
    return done(null, writerData);
  })
);

module.exports = passport;
