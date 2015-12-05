'use strict';
module.exports.home = {
    auth: false,
    handler: function (request, reply){

        reply({ hello: 'world' });
    }
};
