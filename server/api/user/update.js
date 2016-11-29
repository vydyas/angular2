var User = require('../../models/user');

module.exports = function (req, res, next) {

    var body = req.body;

    User.findById(body._id, function (err, user) {

        if (err) {
            throw err;
        }

        user.firstName = body.firstName;
        user.lastName = body.lastName;
        user.country = body.country;
        user.city = body.city;
        user.address = body.address;
        user.email = body.email;
        user.username = body.username;

        user.comparePassword(body.password, function (err, isMatch) {

            if (err) {
                throw err;
            }

            if (isMatch) {
                user.save(function (err, user) {
                    if (err) {
                        throw err;
                    }

                    res.json({
                        success: true,
                        msg: "user_saved_successfully"
                    });
                });
            } else {
                res.status(400).send({
                    success: false,
                    msg: 'wrong_password'
                });
            }

        });

    });

};