const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Hello world! from node JS server");
    res.end();
  }
});

server.listen(3000);
