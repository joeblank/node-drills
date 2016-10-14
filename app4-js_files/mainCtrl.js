var data = require('./data.js');

module.exports = {


getData: function(req,res,next) {
  res.status(200).send(data);
},
postData: function(req,res,next) {
  data.push(req.body);
  res.status(200).send(data);
}


}
