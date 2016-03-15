var express = require('express');
var doLogin = express.Router();

doLogin.post('/',function(req, res){
	var user={
		username:'ljl',
		password:'123'
	}

	if(req.body.username===user.username && req.body.password===user.password){

		res.redirect('/home');
		
	}else {
		res.redirect('/hello');
	}
	
})

module.exports = doLogin;
