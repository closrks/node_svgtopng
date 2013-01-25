var sendres = function(req, res, content) {
	res.header('Access-Control-Allow-Origin', "*");
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	if ( req.accepts('application/json') ) 
		res.json(content);
	else {
		res.contentType('js');
		var json = JSON.stringify(content, null, 3);
		if ( req.query && req.query.callback ) 
			json = req.query.callback + '(' + json + ');';
		res.send(json);
	}
}

module.exports = sendres;