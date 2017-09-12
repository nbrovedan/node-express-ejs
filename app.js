//require module main
var app = require('./config/server');
//define 404 route
app.use(function(req, res, next){
	var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
//start listen server on port 3500
app.listen(3500, function(){
	console.log('Servidor iniciado na porta 3500');
});