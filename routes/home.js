var express = require('express');
var home = express.Router();

/* GET hello page. */


home.get('/', function(req, res, next) {
  res.render('home',{ title: '欢迎登录' });
	next()
});

module.exports = home;
