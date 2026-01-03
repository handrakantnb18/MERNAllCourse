// 96 - Implement the http method

    const http = require('http');
    const fs = require('fs');

    const server =  http.createServer((request, response) =>{
        request.writeHead(200, {'content-type' : 'text/http'});
        response.end("welcome to nodejs");
    });

    server.listen(3000, () => {
        console.log("server is running on port 3000");
    });
    