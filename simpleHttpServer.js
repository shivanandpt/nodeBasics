const http = require('http');

let server = http.createServer(function (req, res) {
    res.end("\n What the heck world");
});

server.listen(3000, function () {
    console.log("listening to port 3000")
})