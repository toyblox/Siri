var http = require('http');

var messages = [
	{
		"message": "sorry, I do not understand"
	},
	{
		"message": "i will check that for you"
	},
	{
		"message": "why would you say that"
	}
];

var onRequest = function(req, res) {
	if (req.method == "GET") {
		res.writeHead(200, {
        'Connection': 'close',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      });
		var random = Math.floor(Math.random() * messages.length);
		console.log(random);
		var objectSend = messages[random];
		var stringSend = JSON.stringify(objectSend);
		res.end(stringSend);
	}

	if (req.method == "OPTIONS") {
		res.writeHead(200, {
			"Connection": "close",
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "OPTIONS, GET, POST",
			"Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
		});
		res.end();
	}
};

http.createServer(onRequest).listen(8887);

