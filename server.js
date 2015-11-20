var express = require("express");
var bodyParser = require('body-parser');
var cors = require('cors');
var stuff = require('node-day-one');
var app = express();
var resources = stuff.resources;
var port = 9001;

/* CONTROLLERS */
var guestListCtrl = require("./controllers/guest-list");
var greetingCtrl = require("./controllers/greeting");
var resourcesCtrl = require("./controllers/resources");
var middleware = require('./controllers/middleware');

/* MIDDLEWARE */
app.use(middleware.requestLogger);
app.post('*', middleware.jsonChecker);
app.use(bodyParser.json());
app.use(cors());

/* RESOURCES */
app.get('/resources', resourcesCtrl.get);

/* GUEST LIST */
app.get('/guest-list', guestListCtrl.get);
app.post('/guest-list', guestListCtrl.post);
app.put('/guest-list/:guestName', guestListCtrl.put);

/* GREETING */
app.get('/greeting', greetingCtrl.get);

/* SERVER INITIALIZATION */
app.listen(port, function(e){
    if(e) return console.error(e);
    console.log('Now listening on port:', port);
  });
