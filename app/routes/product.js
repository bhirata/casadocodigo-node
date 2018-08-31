module.exports = function ( app ) {

	app.get('/products', function( req, res, next ) {

		const connection = app.factory.dbConnectionFactory();
		const productsRepository = new app.repository.productRepository( connection );

		productsRepository.get(function ( err, results, next ){
			if ( err ) {
				console.log( err );
				return next(err);
			}

			console.log(results);
			// Close DB Connection
			connection.end();

			res.format({

				html: function () {
					res.render( 'products/list', {
						list: results
					});
                },
				json: function () {
					res.json( results );
                }

			})

		});

		
	});

	app.post('/products', function ( req, res ) {

	    const product = req.body;

	    req.assert( 'titulo', 'Title is mandatory' ).notEmpty();
	    req.assert( 'preco', 'Wrong Format' ).isFloat();
	    const errors = req.validationErrors();

	    if ( errors ) {

	    	console.log(errors);

	        res.format({
               html: function () {
                   res.status(400).render('products/form', {
                       validationErrors: errors,
                       product: product
                   });
               } ,
                json: function () {
                    res.status(400).json(errors);
                }
            });

	        return;

        }

	    const connection = app.factory.dbConnectionFactory();
	    const productsRepository = new app.repository.productRepository( connection );

	    productsRepository.set( product, function ( err, results ) {

            if ( err ) {

                console.log( err );
                res.status(500).send(err);

            } else {

                res.redirect('/products');

            }

        });

    });

	app.get('/products/form', ( req, res ) => {

		res.render('products/form', {
            validationErrors: {},
            product: {}
        });

	});

};