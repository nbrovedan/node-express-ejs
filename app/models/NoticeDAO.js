//Class notice
function NoticeDAO(conn){
	this._conn = conn;
}
//Get all notices
NoticeDAO.prototype.getAll = function(callback){
	this._conn.query('select * from noticia', callback);
};
//Get single notice
NoticeDAO.prototype.getOne = function(callback){
	this._conn.query('select * from noticia where id = 2', callback);
};

NoticeDAO.prototype.create = function(notice, callback){
	this._conn.query('insert into noticia set ?', notice, callback);
};

module.exports = function(){
	return NoticeDAO;
};
