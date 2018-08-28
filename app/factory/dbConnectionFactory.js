const mysql = require( 'mysql' );

function createDBConnection () {

	if ( !process.env.NODE_ENV ) {
        console.log("dev env");
	// if ( !process.env.NODE_ENV || process.env.NODE_ENV === "dev" || process.env.NODE_ENV === "development" ) {
        return mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '1234',
            database: 'casadocodigo_nodejs'
        });
    }

	if ( process.env.NODE_ENV == "test" ) {
	    console.log("test env");
        return mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '1234',
            database: 'casadocodigo_nodejs_test'
        });
    }

}

module.exports = () => {

	return createDBConnection;

};