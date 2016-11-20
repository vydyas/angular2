var passport    = require('passport');
var passportJWT = require('passport-jwt');

var JwtStrategy = passportJWT.Strategy;
var ExtractJwt = passportJWT.ExtractJwt;

var User = require('../models/user');
var authConfig = require('../config/auth');

module.exports = function() {
    var opts = {
        jwtFromRequest: ExtractJwt.fromAuthHeader(),
        secretOrKey: authConfig.secret
    };
    passport.use(new JwtStrategy(opts, function(jwt_payload, done) {

        User.findOne({
            id: jwt_payload.id
        }, function(err, user) {
            if (err) {
                return done(err);
            }
            if (user) {
                done(null, user);
            } else {
                done(null, false);
            }
        });
    }));
};