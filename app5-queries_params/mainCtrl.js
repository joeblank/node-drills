var data = require('./data');

module.exports = {

    getData: function(req, res, next) {
        var sex = req.query.sex;
        if (sex) {
            var newArr = data.filter(function(value) {
                if (sex === value.sex) {
                    return value;
                }
            })
            res.status(200).send(newArr);
        }
        res.status(200).send(data)
    },
    getOne: function(req, res, next) {
        var id = req.params.id;
        if (id && id >= 0 && id < data.length) {
            res.status(200).send(data[id])
        }
        res.send('Cannot locate index -Joe');
    },
    postData: function(req, res, next) {
        data.push(req.body);
        res.status(200).send(data);
    },
    deleteData: function(req, res, next) {
        var id = req.params.id;
        if (id && id >= 0 && id < data.length) {
            data.splice(id, 1);
            res.status(200).send(data)
        }
        res.send('Cannot locate index -Joe');
    },
    update: function(req,res,next) {
      var id = req.params.id;
      if (id && id >= 0 && id < data.length) {
        data[id].job = req.query.job;
        res.status(200).send(data[id]);
      }
      res.status(404).send('cannot find dat index!')
    }



}
