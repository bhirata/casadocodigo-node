const mysql = require( 'mysql' );

function createDBConnection () {
	return mysql.createConnection({
			host: 'localhost',
			user: 'root',
			password: '1234',
			database: 'casadocodigo_nodejs'
		});
}

module.exports = () => {

	return createDBConnection;

}