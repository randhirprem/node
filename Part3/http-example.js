// // http request
// const http = require('http');

// const req = http.request('http:www.google.com', (res) => {
//     res.on('data', (chunk) => {
//         console.log(`Data chunk: ${chunk}`);
//     });
//     res.on('end',() => {
//         console.log('No more data')
//     });
// });

// req.end();

// https request and creating a function for
// const { request } = require('https');

// const req = request('https:www.google.com', (res) => {
//     res.on('data', (chunk) => {
//         console.log(`Data chunk: ${chunk}`);
//     });
//     res.on('end',() => {
//         console.log('No more data')
//     });
// });

// req.end();

// Using a get functiom

const { get } = require('https');

 get('https:www.google.com', (res) => {
    res.on('data', (chunk) => {
        console.log(`Data chunk: ${chunk}`);
    });
    res.on('end',() => {
        console.log('No more data')
    });
});

