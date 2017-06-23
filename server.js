var express = require("express");
var app = express();

app.use('/public', express.static(__dirname + '/public'));
app.use('/public', express.static(__dirname + '/node_modules'));

/* serves main page */
app.get("/", function(req, res) {
	res.sendFile(__dirname + '/public/spa.html')
});

/* serves layout page */
app.get("/layout", function(req, res) {
	res.sendFile(__dirname + '/public/layout.html')
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
	console.log("Listening on " + port);
});