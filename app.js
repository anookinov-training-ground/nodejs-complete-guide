const http = require('http');

const routes = require('./routes');
// const routes = require('./routes.js');

// function rqListener(req, res) {
// };

// http.createServer(rqListener);

// http.createServer(function(req, res) {
// });

// const server = http.createServer((req, res) => {
//   // console.log(req);
//   // console.log(req.url, req.method, req.headers);
//   // process.exit();
// });

console.log(routes.someText);

// const server = http.createServer(routes);
const server = http.createServer(routes.handler);

server.listen(3000);
