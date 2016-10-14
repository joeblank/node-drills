var express = require('express');
var bodyParser = require('body-parser');
var mainCtrl = require('./mainCtrl');

var app = express();

app.use(bodyParser.json());


app.get('/api/data', mainCtrl.getData);
app.post('/api/data', mainCtrl.postData);







var port = 3000;
app.listen(port, function() {
  console.log('listening to port ' + port + ' for app 4');
})
