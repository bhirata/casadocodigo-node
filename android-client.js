const http = require('http');

const config = {
	hostname: 'localhost',
	port: 3000,
	path: '/products'
};

http.get( config, ( res ) => {

	console.log( res.statusCode );
	res.on( 'data', function ( body ) {

		console.log('body: ' + body);

	});
	
});