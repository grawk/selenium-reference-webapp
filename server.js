var express = require('express');
var app = express();
app.use(express.static('public'));
app.get('/', function (req, res) {
    res.redirect('/public/index.html');
});
app.get('/waits', function (req, res) {
    res.redirect('/public/waits.html');
});
app.get('/selects', function (req, res) {
    res.redirect('/public/selects.html');
});
app.get('/login', function (req, res) {
    res.redirect('/public/login.html');
});
var Server = function () {
    this.server;
};
Server.prototype.start = function (port, cb) {
    if (cb === undefined) {
        cb = port;
        port = 3000;
    }
    var self = this;
    this.server = app.listen(port, function () {
        var host = self.server.address().address;
        var port = self.server.address().port;

        console.log('Example app listening at http://%s:%s', host, port);
        cb();
    });

};
Server.prototype.stop = function(cb) {
    this.server.close(cb);
};

module.exports = Server;