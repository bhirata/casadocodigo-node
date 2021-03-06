module.exports = function ( app ) {

    app.get( '/', function ( req, res) {

        const connection = app.factory.dbConnectionFactory();
        const productsRepository = new app.repository.productRepository( connection );

        productsRepository.get( function ( err, results ) {
            res.render('home/index', {
                books: results
            });
        });

        connection.end();

    });

};