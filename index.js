var static = require('node-static');
var path = new static.Server('./');

require('http').createServer(function (request, response) {
    request.addListener('end', function () {
      path.serveFile('index.html', 200, {}, request, response);
    }).resume();
}).listen(8080);
