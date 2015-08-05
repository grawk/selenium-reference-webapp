'use strict';

var path = require('path');
var Server = require(path.resolve(__dirname, '../server'));
var server = new Server();

server.start(function () {
    console.log('started!');
    server.stop(function () {
       console.log('stopped!');
    });
});