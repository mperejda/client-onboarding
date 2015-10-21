var express = require('express');
var haml = require('hamljs');
var app = express();
var redis = require('redis');
var client = redis.createClient(port, host);

app.get('/', function (req,res) {
     res.send("Hello World!");
});

var server = app.listen(3000, function() {
     var host = server.address().address;
     var port = server.address().port;

console.log('Example app listening at http://%s:%s', host, port);
});
