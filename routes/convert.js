var   rasterize = require('../libs/rasterize.js')
	, sendres = require('../libs/sendres.js')
	, temp = require('temp')
	, fs = require('fs');

app.post('/convert', function(req, res, next) {


	temp.open('sample', function(err, page) {

		fs.write(page.fd, req.body.html);

		var url = page.path
		, options = {
			  path: req.body.path
			, viewportWidth: req.body.viewportWidth
			, viewportHeight: red.body.viewportHeight
		};
	
		rasterize(url, options, function(err){
			if (err) return next(err);
			console.log('screenshot - rasterized %s', url);
			app.emit('screenshot', url, options.path, 1);
			console.log(options.path);
			res.sendfile(options.path);
		});

		fs.close(page.fd, function() {
			console.log('close temp file');
		});

	});

});