const express = require('../config/express')();
const request = require('supertest')(express);

describe( '#ProductsController', function () {

    beforeEach( function ( done ) {

        const conn = express.factory.dbConnectionFactory();
        conn.query("delete from produtos", function ( ex, result ) {
            if ( !ex ) {
                done();
            }
        });

    });

    it( '#json list', function ( done ) {

        request.get('/products')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);

    });

    it( '#Register new products with invalid data', function ( done ) {

        request.post('/products')
            .send({
                titulo: "",
                descricao: "new book"
            })
            .expect(400, done);

    });

    it( '#Register new products with valid data', function ( done ) {

        request.post('/products')
            .send({
                titulo: "titulo",
                descricao: "new book",
                preco: 20.50
            })
            .expect(302, done);

    });

});