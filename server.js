const http = require('http');
const url = require('url');
const definitionsReader = require('./definitionsReader.js');
const requestMatcher = require('./requestMatcher.js');

const PORT = process.env.PORT || 3000;
let count = 1;
let definitions;

const server = http.createServer((request, response) => {

    console.log(`--- REQUEST START ---`);
    console.log(`ID #${count++}`);
    const now = new Date();
    console.log('TIME:', now.toLocaleString() + '.' + now.getMilliseconds());
    console.log('METHOD:', request.method);
    console.log('URL:', request.url);
    console.log('REMOTE ADDRESS:', request.connection.remoteAddress);
    console.log('REMOTE PORT:', request.connection.remotePort);
    console.log('LOCAL ADDRESS:', request.connection.localAddress);
    console.log('LOCAL PORT:', request.connection.localPort);
    console.log('HTTP VERSION:', request.httpVersion);
    console.log('UPGRADE:', request.upgrade);
    console.log('STATUS CODE:', response.statusCode);
    console.log('STATUS MESSAGE:', response.statusMessage);
    console.log('HEADERS:', request.headers);
    console.log('QUERY PARAMETERS:', url.parse(request.url, true).query);

    let body = '';
    request.on('data', chunk => {
        body += chunk.toString();
    });

    request.on('end', () => {
        console.log('REQUEST BODY:', body);

        let definedResponse = requestMatcher.match(definitions, request);
        response.statusCode = definedResponse.statusCode;
        response.setHeader('Content-Type', definedResponse.contentType);
        response.end(JSON.stringify(definedResponse.body));

        console.log(`--- REQUEST END ---\n`);

        return response;
    });

});

server.listen(PORT, async () => {
    console.log(`Server running at http://localhost:${PORT}/\n`);
    definitions = await definitionsReader.read();
});
