# HTTP REQUEST BIN

A primitive HTTP request bin to log incoming requests and setup custom response.

```
--- REQUEST START ---
ID #1
TIME: 2024-11-22 15:10:25.270
METHOD: GET
URL: /hello/world?success=true
REMOTE ADDRESS: ::1
REMOTE PORT: 51625
LOCAL ADDRESS: ::1
LOCAL PORT: 3000
HTTP VERSION: 1.1
UPGRADE: false
STATUS CODE: 200
STATUS MESSAGE: undefined
HEADERS: {
  custom: '1234',
  'content-type': 'application/json',
  key: 'value',
  'user-agent': 'PostmanRuntime/7.42.0',
  accept: '*/*',
  'postman-token': '89a61577-798d-4a07-b6c6-4ad5f4697af1',
  host: 'localhost:3000',
  'accept-encoding': 'gzip, deflate, br',
  connection: 'keep-alive',
  'content-length': '26'
}
QUERY PARAMETERS: [Object: null prototype] { success: 'true' }
REQUEST BODY: {
    "hello": "world"
}
Found the requested HTTP method and path in the request-response definitions file!
RETURNED RESPONSE: {
  contentType: 'application/json',
  statusCode: 200,
  body: 'hello world'
}
--- REQUEST END ---
```

## Setup Custom Request and Response

Use `reqResDefitions.json` file to setup expected incoming request and desired response to be returned. First item in the definitions file is for default use when there is no match for a request. Add your own mapping following the convention.

## Run

```
node server.js

Server running at http://localhost:3000/

Done reading request-response definitions file!
```

Program will continue to log incoming requests even if there is any problem with request-response definitions file.
