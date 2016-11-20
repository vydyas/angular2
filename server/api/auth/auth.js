var User = require('../../models/user');
var jwt = require('jsonwebtoken');
var config = require('../../config/auth');

module.exports = function(req, res) {

    var username = req.body.username;
    var password = req.body.password;

    User.findOne({
        username: username
    }, function (err, user) {
        if (err) {
            throw err;
        }

        if (!user) {
            res.status(400).send({
                success: false,
                message: 'Authentication failed. User not found.'
            });
        } else {
            user.comparePassword(password, function (err, isMatch) {

                if (isMatch && !err) {
                    var token = jwt.sign(user, config.secret, {
                        expiresIn: 10080
                    });

                    res.json({
                        success: true,
                        token: 'JWT ' + token,
                        user: user
                    });

                } else {
                    res.status(400).send({
                        success: false,
                        message: 'Authentication failed. No user found.'
                    });
                }
            })
        }
    });

};