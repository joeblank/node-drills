var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mainCtrl = require('./mainCtrl');
var port = 5000;
// var data = require('./data.js')

var app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/api/data', mainCtrl.getData);
app.get('/api/data/:id', mainCtrl.getOne);

app.put('/api/data/:id', mainCtrl.update);

app.post('/api/data', mainCtrl.postData);

app.delete('/api/data/:id', mainCtrl.deleteData);



app.listen(port, function() {
	console.log('Listening on port',port);
})
