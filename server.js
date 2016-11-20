var express     = require('express');
var bodyParser  = require('body-parser');
var morgan      = require('morgan');
var path        = require('path');
var mongoose    = require('mongoose');
var passport    = require('passport');

var databaseConfig = require('./server/config/database');
var passportConfig = require('./server/config/passport');

const port = process.env.PORT || 8080;

var app = express();

// Log requests to console
app.use(morgan('dev'));

// Use body-parser to get POST requests for API use
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static(path.join(__dirname, 'client')));

passportConfig();

// Connect to database
mongoose.connect(databaseConfig.database);

require('./server/routes')(app, express);

// START THE SERVER
app.listen(port, function () {
    console.log('Magic happens on port ' + port);
});