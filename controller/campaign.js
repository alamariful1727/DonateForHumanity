var express = require('express');
var router = express.Router();
var userModel = require('./../models/user-model');
var uploadModel = require('../models//upload-model');
var expressValidatorFormatter = require('./../models/express-validator-formatter');

var userInfo = {};
var p = "";

router.get('*', function (req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect('/login');
  }
});

router.get('/profile', (req, res) => {
  //req.user = uid
  userModel.get(req.user, function (results) {
    if (results.length > 0) {
      res.render('user/profile', {
        user: results[0], // results[0].type
        member: JSON.parse(results[0].member) // String 'JSON object' -> JSON object
      });
    }
  });

});

router.get('/settings', (req, res) => {
  userModel.get(req.user, function (results) {
    // console.log(results[0]);
    if (results.length > 0) {
      userInfo['user'] = results[0];
      userInfo['member'] = JSON.parse(results[0].member);
      p = results[0].password.toString();
      res.render('user/settings', {
        user: results[0],
        member: JSON.parse(results[0].member)
      });
    }
  });

});


module.exports = router;