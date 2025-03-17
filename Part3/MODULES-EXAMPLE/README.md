# MODULE-EXAMPLES

**Overview**
MODULE-EXAMPLES is a simple Node.js project that demonstrates how to use modules to handle HTTP requests and responses. The project consists of three files:

https.js - The main file that makes a request and reads the response.
request.js - Handles encrypting and sending data to a given URL.
response.js - Handles decrypting and reading the response.

**Project Structure**
MODULE-EXAMPLES/
│── https.js
│── request.js
│── response.js
│── README.md

## Files and Their Functions
1. https.js (Main Entry Point)
This file imports the request.js and response.js modules to simulate sending an HTTP request and receiving a response.
[Code](/https.js)

2. request.js (Handles Sending Data)
This module encrypts and sends data to a given URL.
[Code](/request.js)

3. response.js (Handles Receiving Data)
This module decrypts and reads the received data.
[Code](/response.js)

## How to Run the Project
[GIT](https://github.com/randhirprem/node/tree/main/Part3/MODULE-EXAMPLE)
**RUN IN TERMINAL** node https.js

## Key Concepts Demonstrated
✔ Modularization in Node.js
✔ Exporting and importing modules (module.exports)
✔ Function abstraction for handling HTTP requests and responses
