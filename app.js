/*var express = require('express');
var app = express();*/

var porta = 3000;
var app = require('./config/express')();
var rotasProdutos = require('./app/routes/produtos')(app);


app.listen(porta,function(){
	console.log("Servidor rodando bonito na porta " + porta);


});