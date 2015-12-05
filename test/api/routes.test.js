'use strict';
const Code = require('code');
const Lab = require('lab');
const lab = exports.lab = Lab.script();
const Path = require( 'path' );
const Glue = require( 'glue' );
const Manifest = require('../resources/manifest');

const options = {
    relativeTo : Path.join( __dirname , '../../' )
};

const getServer = function (callback){

    Glue.compose( Manifest , options, (err, server) => {

        if (err){
            throw err;
        }
        return callback(server);
    });
};

lab.experiment( 'Simple test' , () => {

    lab.test('Get access for Hobbes', (done) => {

        getServer((server) => {

            server.inject({
                method: 'GET',
                url: '/hello'
            }, (response) => {

                Code.expect(response.statusCode).to.equal(200);
                done();
            });
        });
    });
});
