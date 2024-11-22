function match(definitions, req) {
    let pathNotFound = true;
    let response;

    if (definitions == null) {
        console.error('Definitions file is empty or not found!');
        return JSON.parse('{ "contentType": "application/json", "statusCode": 200, "body": "Definitions file is empty or not found!" }');
    }

    definitions.items.forEach(item => {

        if (item.request.path == req.url &&
            item.request.method == req.method) {

            console.log('Found the requested HTTP method and path in the request-response definitions file!');
            console.log("RETURNED RESPONSE:", item.response);
            pathNotFound = false;
            response = item.response;
        }

    });

    if (pathNotFound) {
        console.error('Requested path not found in the request-response definitions file!');
        response = definitions.items[0].response;
    }

    return response;
}

module.exports = { match: match };
