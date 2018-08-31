module.exports = function ( app ) {

    app.get('/promotions/form', function ( req, res ) {

        const connection = app.factory.dbConnectionFactory();
        const productsRepository = new app.repository.productRepository( connection );

        productsRepository.get( function ( err, results ) {
          res.render( 'promotions/form', { list: results });
        });
        connection.end();

    });

    app.post('/promotions', function ( req, res ) {

      const promotion = req.body;
      console.log(promotion);

      app.get('io').emit('newPromotion', promotion);
      res.redirect('/promotions/form');

    });

};