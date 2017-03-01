var http = require('http');
var PORT1 = 7000;
var PORT2 = 7500;

var array = ["You rock!", "You're the best!", "Never give up!", "You make this look easy!"];

function random(){
	var randomNumber = Math.floor(Math.random() * array.length);
	return array[randomNumber];
}

function handleNiceRequest(request, response){
	response.end(random());
};

var niceServer = http.createServer(handleNiceRequest);

niceServer.listen(PORT1, function(){
	console.log("Listening on localhost" , PORT1);
});
