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
File ~ [PACKAHE-EXAMPLE](/Part4/PACKAGE-EXAMPLE)
README ~ [README.md PACKAGE-EXAMPLE](/Part4/PACKAGE-EXAMPLE/README.md)
