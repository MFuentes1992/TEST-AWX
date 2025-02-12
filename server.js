const http = require('http');

const server = http.createServer((req, res) => {
    console.log(`Request method: ${req.method}`);
    console.log(`Request URL: ${req.url}`);
    console.log(`Request headers: ${JSON.stringify(req.headers)}`);

    var body = "";
    req.on('readable', function() {
        body += r.read();
    });
    req.on('end', function() {
        console.log(body);
        s.write("OK"); 
        s.end(); 
    });

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
