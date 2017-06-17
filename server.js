var express = require('express');
var app = express();


app.get('/', function(req,res){
	res.json("Hello World");
});

console.log('Running Server..');
app.listen(5000);