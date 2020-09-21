var express = require('express');

var app = express();

var mysql = require("mysql2");
  
var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "dotsoncots",
  password: "Platydito2001"
});


db.connect(function(err){
   if (err) {
     return console.error("Ошибка: " + err.message);
   }
   else{
     console.log("Подключение к серверу MySQL успешно установлено");
   }
});


app.listen(777, function(){
	console.log('API app started');
})


app.get('/', function(req, res){
	res.set('Access-Control-Allow-Origin', '*');
	res.send('API started');
})


app.get('/news', function(req, res){
	db.query(
	  'SELECT * FROM news',
	  function(err, results) {
	  	res.set('Access-Control-Allow-Origin', '*');
	  	res.send(results);
	  }
	);
})


app.get('/categories', function(req, res){
	db.query(
	  'SELECT * FROM categories',
	  function(err, results) {
	  	res.set('Access-Control-Allow-Origin', '*');
	  	res.send(results);
	  }
	);
})


app.get('/subcategories', function(req, res){
	db.query(
	  'SELECT * FROM subcategories',
	  function(err, results) {
	  	res.set('Access-Control-Allow-Origin', '*');
	  	res.send(results);
	  }
	);
})


