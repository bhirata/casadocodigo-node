module.exports = function ( app ) {

	app.get('/products', function( req, res ) {

		const connection = app.factory.dbConnectionFactory();
		const productsRepository = new app.repository.productRepository( connection );

		productsRepository.get(function ( err, results ){
			if ( err ) {
				console.log( err );
				res.status(500).send(err);
			}

			console.log(results)
			// Close DB Connection
			connection.end();

			res.render( 'products/list', {
				list: results
			});

		});

		
	});

	app.get('/products/form', ( req, res ) => {

		res.render('products/form');

	});

	app.post('/products/form', (req, res) => {

		const product = req.body;
		console.log(product);

		const connection = app.factory.dbConnectionFactory();
		const productsRepository = new app.repository.productRepository( connection );

		productsRepository.set( product, function ( err, results ){

			if ( err ) {
				
				console.log( err );
				res.status(500).send(err);

			} else {

				res.redirect('/products');

			}

		});

	});

}