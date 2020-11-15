const http = require('http');

// Create server object
const server = http.createServer((req, res) => {
  // Write response
  res.write('Hello World');
  res.end();
});

server.listen(3000, () => console.log('Listening to port 3000...'));
