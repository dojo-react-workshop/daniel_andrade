module.exports = function Route(app){
	app.get('/', function(req, res) {
	 
	 res.render("index");
	})

	app.post('/result', function(req, res) {
		 res.json(req.body);
		
		
		// user = {
		// 	name: req.body.name,
		// 	location: req.body.location,
		// 	language: req.body.language,
		// 	comment: req.body.comment
		// }

		// var contextObj = {
		//  title: "My Survey Form"
		// 	 }

		// res.render("results", {data: user});
	})
		
	 
};