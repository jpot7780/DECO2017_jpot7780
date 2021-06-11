var http = require('https');

var options = {
	"method": "GET",
	"hostname": "wordsapiv1.p.rapidapi.com",
	"port": null,
	"path": "/words/laptop/definitions",
	"headers": {
		"x-rapidapi-key": "f83d8e69d2mshbe1a00f6bb1e198p17abc0jsne844e7fb630e",
		"x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
		"useQueryString": true
	}
};

var 
const req = http.request(options, function (res) {
	const chunks = [];

	res.on("data", function (chunk) {
		chunks.push(chunk);
	});

	res.on("end", function () {
		const body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.end();