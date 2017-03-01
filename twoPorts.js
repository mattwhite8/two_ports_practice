var http = require('http');
var PORT1 = 7000;
var PORT2 = 7500;

function handleNiceRequest(request, response){
	response.end("You rock!");
};

var niceServer = http.createServer(handleNiceRequest);

niceServer.listen(PORT1, function(){
	console.log("Listening on localhost" , PORT1);
});
