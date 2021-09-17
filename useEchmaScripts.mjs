import { createServer } from 'http';

let server = createServer(function (req, res) {
    res.end("\n What the heck world");
});

server.listen(3000, function () {
    console.log("listening to port 3000")
})