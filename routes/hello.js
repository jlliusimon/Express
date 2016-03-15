var express = require('express');
var hello = express.Router();

/* GET hello page. */


hello.get('/', function(req, res, next) {
  res.render('hello',{ title: '用户登录' });
	next()
});

module.exports = hello;

