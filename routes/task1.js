var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('task1', {});
});

router.post('/', function(req, res, next) {
  if (!req.body || !req.body.code) {
    res.render('task1', {});
  }

  if (req.body.code.join('') === 'LEGA') {
    req.session.task1solved = 'yes please!';
    res.redirect('/location');
  }

  res.render('task1', {message: 'Not friends! Try again, it\'s cheap :-)'});
});

module.exports = router;
