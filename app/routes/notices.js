module.exports = function(app){
	//create route new
	app.get('/notices/new', function(req, res){
		res.render('admin/new_notice', {messages: undefined});
	});
	//create route notices
	app.get('/notices', function(req, res){
		//Pega a conexao
		var conn = app.db.connection();
		//Pega o model da noticia
		var noticeModel = new app.app.models.NoticeDAO(conn);
		noticeModel.getAll(function(err, result){
			res.render("noticias/noticias", {noticias: result});
		});
	});
	//create route notices
	app.post('/notices/save', function(req, res){
		//body
		var notice = req.body;
		// //Validacoes
		req.checkBody('titulo', 'O título é obrigatório').notEmpty();
		req.checkBody('resumo', 'O resumo é obrigatório').notEmpty();
		req.checkBody('resumo', 'O resumo deve ter entre 10 e 100 caracteres').len(10,100);
		req.checkBody('autor', 'O autor é obrigatório').notEmpty();
		req.checkBody('datacriacao', 'A data é obrigatória').notEmpty();
		req.checkBody('noticia', 'A notícia é obrigatória').notEmpty();
		// //Captura os erros
		var errors = req.validationErrors();
		//Se deu erro
		if(errors){
			res.render('admin/new_notice', {messages : errors});
			return;
		}
		//Pega a conexao
		var conn = app.db.connection();
		// //Pega o model da noticia
		var noticeModel = new app.app.models.NoticeDAO(conn);
		
		noticeModel.create(notice, function(err, result){
		 	res.redirect('/notices');
		});
	});
};