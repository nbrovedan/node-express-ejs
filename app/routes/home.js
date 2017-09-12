module.exports = function(app){
	//create main route
	app.get('/', function(req, res){
		res.render('home/index');
	});
};