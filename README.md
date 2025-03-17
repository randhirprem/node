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

[Events.js](/Part2/events.js)
[Race.js](/Part2/race.js)
