var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var cors = require('cors');

var app = express();

app.use(bodyParser.json());
app.use(cors());










var port = 3000;
app.listen(port, function() {
  console.log('listening to port: ' + port);
})
