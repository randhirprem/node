### This is the **MAIN** README.md for the following node folder.

# The following are parts and components of node lessons and projects. Refer to the respective README.md for understandings.

## **COMMIT_1** basics of node.
1. For this I learn please refere to the following folder
[Part1](/Part1).
2. To see the actual node file.
[Part1, hello.js](/Part1/hello.js)
3. To see what was learn
[What was learn](/Part1/README.md).

## **Commit_2_lesson_2**

### Documentation

This is the reference to node.js.

1. [Node.js](https://github.com/nodejs/node)
2. [libuv](https://libuv.org/)
3. [libuv/doc](https://docs.libuv.org/en/v1.x/)
4. [libuv.git](https://github.com/libuv/libuv)
5. [Event Loop](https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick)
6. [Event Emitter](https://nodejs.org/api/events.html#events_events)

#### Definition

1. Async means to do it concurrently.
2. Non-blocking function helps in assisting in other task. JS is synchronous langauge.
3. Node.js is single threaded langauge not a multi-thread. Refer to udemy lesson 28 (5:47) and lesson 29.
4. Event loop for call-back function this allows node.js to be multi-thread.
5. Node has 3 timers setTimeout, setInterval, setImmediate. setTimeout is when a function times out after e.g 100ms. setInterval is when a function executes after e.g 100ms loops a function on that interval, set Immediate execute immediately.It executes immediatly after and I/O operations. Lesson 32 of udemy.Close callbacks closes the loop and re-executes the loop.timers: this phase executes callbacks scheduled by setTimeout() and setInterval().
pending callbacks: executes I/O callbacks deferred to the next loop iteration.
idle, prepare: only used internally.
poll: retrieve new I/O events; execute I/O related callbacks (almost all with the exception of close callbacks, the ones scheduled by timers, and setImmediate()); node will block here when appropriate.
check: setImmediate() callbacks are invoked here.
close callbacks: some close callbacks, e.g. socket.on('close', ...)
6. Node is event driven. Oberver design pattern.

#### Files
[Doc](/Part2/README.md) - README.md for commit 2
[Folder](/Part2) - Folder for part 2
[Events.js](/Part2/events.js) - event based things
[Race.js](/Part2/race.js) - Node timer

## **Commit_3_lesson_3**

**Part 3 of node.**
The following Part is part 3 of Node. It is the Fundamentals and Module system.

1. The require function eg reguire the http module. E.g. const EventEmitter = require('events');

2. Http request and Https. [http](/Part3/http-example.js). - https request and creating a function for {request} - Addtionally you can use the get function to execute the http,https function this does not require the req.end();

3. Module are used to create more complex structure. Reuse existing code, Organise the code, Expose only what will be used.

4. [MODULES-EXAMPLES](/Part3/MODULES-EXAMPLE)
    [README.MD](/Part3/MODULES-EXAMPLE/README.md)
Please see [README.MD] (/Part3/MODULES-EXAMPLE/README.md) for files and extension
✔ Modularization in Node.js
✔ Exporting and importing modules (module.exports)
✔ Function abstraction for handling HTTP requests and responses.

## Docs

1. [HTTP NODE Doc](https://nodejs.org/docs/latest/api/http.html)
2. [ECMA-IMPORT](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
3. [ECMA-EXPORT](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)
4. [ECMA](https://nodejs.org/api/modules.html#modules_modules_commonjs_modules)
5. [INDEX.JS VIDEO EXPLANATION](https://www.youtube.com/watch?v=M3BM9TB-8yA)
6. [INDEX.JS](https://nodejs.org/api/modules.html#modules_all_together).



## Commit_4_Part4_Package_Management

### Section 1 [NPM](https://www.npmjs.com/)

**Node Package Manager** [NPM](https://docs.npmjs.com/) - NPM doccument

1. The node package manager is a tool where you can download all the necessary tools to help build your project e.g [PostgresSQL](https://www.npmjs.com/search?q=POSTGRES).
2. A module is a file that contains some code which may be exported from that module. A package is a collection of modules that have been package together.
For  example of a [module](/Node/Part3).
3. Package means a reusable package.
4. [Semantic Versioning 2.0.0](https://semver.org/) - MAJOR version when you make incompatible API changes,MINOR version when you add functionality in a backward compatible manner,PATCH version when you make backward compatible bug fixes.Additional labels for pre-release and build metadata are available as extensions to the MAJOR.MINOR.PATCH format.
5. How to check versioning for NPM [Versioning](https://semver.npmjs.com/).
6. Documentation on [nodemon](https://www.npmjs.com/package/nodemon).

**Files & Example**
File ~ [PACKAGE-EXAMPLE](/Part4/PACKAGE-EXAMPLE)
README ~ [README.md PACKAGE-EXAMPLE](/Part4/PACKAGE-EXAMPLE/README.md)

## Commit_5_PLANETS-PROJECT

**[Kepler/K2](https://science.nasa.gov/mission/kepler/).**
The Kepler space telescope was NASA’s first planet-hunting mission, assigned to search a portion of the Milky Way galaxy for Earth-sized planets orbiting stars outside our solar system. During nine years in deep space Kepler, and its second act, the extended mission dubbed K2, showed our galaxy contains billions of hidden "exoplanets," many of which could be promising places for life. They proved that our night sky is filled with more planets than even stars — knowledge that revolutionizes the understanding of our place in the cosmos.[Background](https://science.nasa.gov/exoplanets/can-we-find-life/).

[CSV](https://exoplanetarchive.ipac.caltech.edu/cgi-bin/TblView/nph-tblView?app=ExoTbls&config=cumulative) - You can download the CSC from the link.

For node all stereams are an event-emmiter.

**Tools**

1. [CSV-parse](https://www.npmjs.com/package/csv-parse), [Doc](https://csv.js.org/parse/)- to parse CSV.
2. [fs](https://nodejs.org/api/fs.html#fs_fs_createreadstream_path_options)- to read the file.
3. [Read-stream](https://nodejs.org/api/fs.html#fs_fs_createreadstream_path_options)
4. [A Review of the Best Habitable Planet Candidates](https://www.centauri-dreams.org/2015/01/30/a-review-of-the-best-habitable-planet-candidates/)

**File**
[Data](PLANETS-PROJECT/kepler_data.csv)
[File](PLANETS-PROJECT/index.js)
[README.md](PLANETS-PROJECT/README.md)

## Commit_6_Web_Server

### What is it about

An HTTP web server is software that handles requests from clients (e.g., browsers) and serves responses over the Hypertext Transfer Protocol (HTTP). When a client sends a request (e.g., visiting a webpage), the server processes it, retrieves the necessary resources (HTML, CSS, images, etc.), and sends them back as a response. Servers use response status codes to indicate the outcome of a request, such as 200 OK (successful request), 404 Not Found (resource missing), 500 Internal Server Error (server-side failure), and 301 Moved Permanently (redirect). Modern web servers can handle dynamic content, APIs, and real-time communication.
**Documentation**

1. [HTTP request methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods) - Modzilla doc on HTTP request method.
2. [API](https://www.mulesoft.com/api/what-is-an-api). - Api defination.
3. [Status-Code for HTTP response](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status).- Status response code and what they mean.
*Skill* - view - developer - network - header(to see the request) - response(to see the response).
4. [Origin](https://developer.mozilla.org/en-US/docs/Glossary/Origin) - Web content's origin is defined by the scheme (protocol), hostname (domain), and port of the URL used to access it. Two objects have the same origin only when the scheme, hostname, and port all match.
Some operations are restricted to same-origin content, and this restriction can be lifted using CORS.
5. [Same-origin policy](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy) - The same-origin policy is a critical security mechanism that restricts how a document or script loaded by one origin can interact with a resource from another origin.
It helps isolate potentially malicious documents, reducing possible attack vectors. For example, it prevents a malicious website on the Internet from running JS in a browser to read data from a third-party webmail service (which the user is signed into) or a company intranet (which is protected from direct access by the attacker by not having a public IP address) and relaying that data to the attacker.
6. [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS) - Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.
An example of a cross-origin request: the front-end JavaScript code served from <https://domain-a.com> uses fetch() to make a request for <https://domain-b.com/data.json>.
For security reasons, browsers restrict cross-origin HTTP requests initiated from scripts. For example, fetch() and XMLHttpRequest follow the same-origin policy. This means that a web application using those APIs can only request resources from the same origin the application was loaded from unless the response from other origins includes the right CORS headers.
7. [Whitelist](https://en.wikipedia.org/wiki/Whitelist) - A whitelist or allowlist is a list or register of entities that are being provided a particular privilege, service, mobility, access or recognition. Entities on the list will be accepted, approved and/or recognized. Whitelisting is the reverse of blacklisting, the practice of identifying entities that are denied, unrecognized, or ostracized

### Knowledge check

Let's test our knowledge of the browser's Same Origin Policy! See if you can answer three quick questions about the following scenario:

Say you're browsing a page on <www.wikipedia.org>. In general, will the following requests succeed, or fail?

1. A JavaScript GET request to <www.bank.com>.

2. A JavaScript POST request to <www.bank.com>.

3. Clicking an HTML link to a video on <www.bank.com>.

#### Answer

There are possible exceptions, but in general the following will be true:

1. This request will FAIL, because requests to get information from a cross-origin domain are not allowed by the browser. The browser is trying to protect your privacy by preventing <www.wikipedia.org> from stealing your private information from <www.bank.com>.

2. This request will SUCCEED. This is a little known exception to the Same Origin Policy! The decision to allow POST requests is mostly historical, but there is also a lower chance that a POST request will steal your private information. POST requests are used to write data to a server, rather than GET data from it, so it's less likely the response will contain private information.

3. This request will SUCCEED. The Same Origin Policy applies only to scripts and not static resources like HTML tags.
[folder](/http-server).
[File](/http-server/index.js).
[README.md](/http-server/README.md).
