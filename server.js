var express = require('express');
var app = express();

var path = require('path');
var bodyParser = require('body-parser');
app.use(bodyParser.json())

// Connect to angular
app.use(express.static(path.join(__dirname, 'client/dist/client')));
app.use(express.static(__dirname + '/client/dist/client'));

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/ArtDB', function(err) {
    console.log("HEYYYAYAYYAAY")
});




app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./client/dist/client/index.html"))
});

app.listen(8000, function() {
    console.log("listening on port 8000");
})