var express = require('express');
var router = express.Router();

var _ = require('lodash');

router.get('/', function(req, res, next) {
  if (req.session.task1solved !== 'yes please!') {
    res.redirect('/');
  }
  res.render('location', {});
});

router.post('/', function(req, res, next) {
  if (req.session.task1solved !== 'yes please!') {
    res.redirect('/');
  }

  var data = {};

  var code = req.body.code.toLowerCase().trim();
  var validCodes = ['leo', 'elma', 'goran', 'ante'];
  if (_.includes(validCodes, code)) {
    data.image = '/images/l_' + code + '.jpg';
  }
  else {
    data.message = '"' + code + '" is not a friend, try again! it\'s cheap :-)';
  }

  res.render('location', data);
});

module.exports = router;
