var http = require('http');
var PORT1 = 7000;
var PORT2 = 7500;

var array = ["You do not rock!", "You're definitely not the best!", "Give up!", "You make this look hard!"];

function random(){
	var randomNumber = Math.floor(Math.random() * array.length);
	return array[randomNumber];
}

function handleMeanRequeset(request, response){
	response.end(random());
};

var meanServer = http.createServer(handleMeanRequeset);

meanServer.listen(PORT2, function(){
	console.log("Listening on localhost" , PORT2);
});