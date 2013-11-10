var http = require("http");
var nifgen = require("./nifgen");
http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "application/json"});
  response.write(nifgen.gens(100));
  response.end();
}).listen(8888);

