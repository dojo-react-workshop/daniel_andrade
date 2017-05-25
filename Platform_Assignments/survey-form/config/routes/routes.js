module.exports = function Route(app){
	app.get('/', function(req, res) {
	 res.render("index");
	})
	app.post('/result', function(req, res) {
		user = {
			name: req.body.name,
			dojo_location: req.body.dojo_location,
			favorite_language: req.body.favorite_language,
			comment: req.body.comment
		};
	 	res.render("results",{data: user});
	})
};