/// <reference path="./declare/node.d.ts" />
var http = require('http');
var helper = require('./helper');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(helper.printSomething());
}).listen(process.env.PORT, '127.0.0.1');

console.log('Server running at http://127.0.0.1/');
