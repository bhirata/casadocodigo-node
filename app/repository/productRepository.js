function ProductRepository ( connection ) {
	this._connection = connection;
}

ProductRepository.prototype.get = function ( callback ) {

	this._connection.query('select * from livros', callback);

}

ProductRepository.prototype.set = function ( product, callback ) {

	this._connection.query( 'insert into livros set ?', product, callback);

}


module.exports = function ( ) {

	return ProductRepository;

}