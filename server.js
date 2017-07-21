// SERVER-SIDE JAVASCRIPT

//require express in our app
var express = require('express');
//require body-parser
var bodyParser = require('body-parser');
// generate a new express app and call it 'app'
var app = express();

// serve static files from public folder
app.use(express.static('public'));

//parses requests into JSON
app.use(bodyParser.urlencoded({extended: true}));

var controllers = require('./controllers');


/**********
 * ROUTES *
 **********/

/*
 * HTML Endpoints
 */

app.get('/', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

/*
 * JSON API Endpoints
 */
// GET route for api index- lists enpoints of the app
app.get('/api', controllers.api.index);

// Index of albums endpoint
app.get('/api/albums', controllers.albums.index);

// Create new album endpoint
app.post('/api/albums', controllers.albums.create);

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});
