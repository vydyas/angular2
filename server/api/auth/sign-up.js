var User = require('../../models/user');
var jwt = require('jsonwebtoken');
var config = require('../../config/auth');

module.exports = function(req, res) {

    var newUser = new User({
        name: {
            firstName: req.body.firstName,
            lastName: req.body.lastName
        },
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });

    // Attempt to save the user
    newUser.save(function(err) {
        if (err) {

            console.log(err);

            return res.status(400).json({
                success: false,
                message: 'Please fill in required fields.'
            });
        }

        var token = jwt.sign(newUser, config.secret, {
            expiresIn: 10080
        });

        res.status(201).json({
            success: true,
            message: 'Successfully created new user.',
            token: 'JWT ' + token,
            user: newUser
        });
    });

};