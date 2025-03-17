// getting the request module
const request = require('./request');
// getting the response module
const response = require('./response');
// Function to fufil the request
function makeRequest(url, data) {
    request.send(url,data);
    return response.read();
}

// url in play
const responseData = makeRequest('https://google.com', 'hello');
console.log(responseData);