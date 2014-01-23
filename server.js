var express = require('express'),
    http = require('http'),
    app = express(),
    server = http.createServer(app);

app.configure(function() {
    app.set('title', 'Ionic Demo Server');
    app.set('port', 8080);
    app.use(express.logger());
    app.use(express.compress());
    app.use(express.static(__dirname + '/www'));
});

console.log('Starting %s...', app.get('title'));
server.listen(app.get('port'), function() {
    console.log("Express server listening on port %s.", server.address().port);
});