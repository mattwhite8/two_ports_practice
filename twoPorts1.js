var http = require('http');
var PORT1 = 7000;
var PORT2 = 7500;

function handleMeanRequeset(request, response){
	response.end("You do not rock");
};

var meanServer = http.createServer(handleMeanRequeset);

meanServer.listen(PORT2, function(){
	console.log("Listening on localhost" , PORT2);
});