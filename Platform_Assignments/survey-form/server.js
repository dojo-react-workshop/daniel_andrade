var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, "/client")));

app.set('views', path.join(__dirname, "/views"));
app.set('view engine', 'ejs');


var route = require('./config/routes/routes.js')(app);

app.listen(8000, function() {
 console.log("server is running!");
})