var express = require('express');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var cors = require('cors');
var url = 'mongodb://localhost:27017/myproject';

var app = express();

app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/', function(req, res) {
	res.send({ hello : 'world'});
});

app.post('/login', function(req, res) {
	MongoClient.connect(url, function(err, db) {

		var collection = db.collection('users');
		collection.findOne({
			username : req.body.username,
			password : req.body.password
		}, function(err, queryResult) {
			if(err) res.sendStatus(422);
			else if(!queryResult) res.sendStatus(401);
			else res.send(queryResult);
		})
	});
});

app.post('/signup', function(req, res) {
	MongoClient.connect(url, function(err, db) {

		var collection = db.collection('users');

		collection.find({username : req.body.username}).toArray(function(err,queryResult) {

			if(err) { res.send(500); }

			if(queryResult && queryResult.length > 0) {
				res.send('username already exits', 422);
			} else {
			
				collection.insert({username : req.body.username, password: req.body.password}, function(errI, insertResult) {
					if(!errI) {
						console.log(insertResult);
						res.sendStatus(200);
					}
				});

			}
		});

	});
});

app.listen(5000, function() {
	console.log('listening at 5000');
});