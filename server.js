var http = require('http');

http.createServer(function (req, res) {
    res.write("Hello from Node.js server deepak sharma 111");
    res.end();
}).listen(5000, function() {
    console.log("Server is listening on port 5000");
});
