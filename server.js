var http = require('http');

http.createServer(function (req, res) {
    res.write("Hello from Node.js server deepak sharma123");
    res.end();
}).listen(5000, '139.59.36.218', function() {
    console.log("Server is listening on 139.59.36.218:5000");
});
