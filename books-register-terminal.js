const http = require('http');

const config = {
    hostname: 'localhost',
    port: 3000,
    method: 'post',
    path: '/products',
    headers: {
        'Accept' : 'application/json',
        'Content-type' : 'application/json'
    }
};

const client = http.request( config, function ( res ) {

    console.log( res.statusCode );
    res.on( 'data', function ( body ) {
      console.log("Body: " + body);
    })

});

const product = {
    // titulo : 'Mais sobre node',
    descricao : 'node, js e http',
    preco: '100'
};

client.end( JSON.stringify( product ) );