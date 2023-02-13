const http = require('http');

const server = http.createServer(function(request, response) {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.end('Hello World');
});

server.listen({ port: 3000, host: 'localhost' }, function() {
  console.log('Server is running!');
});

//creates server at http://localhost:3000/

//can use a different port to run different servers
//Ports can be any unsigned integer from 0 to 65535