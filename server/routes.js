var passport = require('passport');

module.exports = function(app, express) {

    // Set up middleware
    var requireAuth = passport.authenticate('jwt', {
        session: false
    });

    // Create API group routes
    var apiRoutes = express.Router();

    apiRoutes.get('/user', requireAuth, require('./api/user/show'));
    apiRoutes.put('/user', requireAuth, require('./api/user/update'));

    apiRoutes.post('/auth', require('./api/auth/auth'));
    apiRoutes.post('/sign-up', require('./api/auth/sign-up'));

    app.use('/api', apiRoutes);

    app.get('*', function(req, res) {
        res.sendfile('./client/index.html');
    });
};