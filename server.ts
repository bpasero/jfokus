/// <reference path="./declare/node.d.ts" />

import http = require('http');
import helper = require('./helper');

http.createServer((req, res)=>{
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(helper.printSomething());
}).listen(process.env.PORT, '127.0.0.1');

console.log('Server running at http://127.0.0.1/');