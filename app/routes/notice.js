module.exports = function(app){
	//create route notice
	app.get('/notice', function(req, res){
		//Pega a conexao
		var conn = app.db.connection();
		//Pega o model da noticia
		var noticiaModel = new app.app.models.NoticeDAO(conn);
		//Executa a function
		noticiaModel.getOne(function(err, result){
			res.render('noticias/noticia', {noticia: result});
		});
	});
};