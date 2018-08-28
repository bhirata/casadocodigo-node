module.exports = function ( app ) {

    app.get("/promotions/form", function ( req, res ) {

        const connection = app.factory.dbConnectionFactory();
        const productsRepository = new app.repository.productRepository( connection );

        productsRepository.get( function ( err, results ) {
           res.render( 'promotions/form', { list: results });
        });
        connection.end();

    });

};