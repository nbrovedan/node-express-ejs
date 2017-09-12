//Import mysql module
var mysql = require('mysql');

//Cria a conexao
var connMySQL = function(){
	return mysql.createConnection({
		host: '127.0.0.1',
		user: 'root',
		password: 'mysql',
		database: 'portal_udemy'
	});
};

module.exports = function(){
	return connMySQL;
};