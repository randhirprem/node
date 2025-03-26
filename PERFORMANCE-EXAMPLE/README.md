## Commit 12 Nodejs Performance Example.

[Response Times: The 3 Important Limits](https://www.nngroup.com/articles/response-times-3-important-limits/) - There are 3 main time limits (which are determined by human perceptual abilities) to keep in mind when optimizing web and application performance.
Excerpt from Chapter 5 in my book Usability Engineering, from 1993:

The basic advice regarding response times has been about the same for thirty years [Miller 1968; Card et al. 1991]:

0.1 second is about the limit for having the user feel that the system is reacting instantaneously, meaning that no special feedback is necessary except to display the result.
1.0 second is about the limit for the user's flow of thought to stay uninterrupted, even though the user will notice the delay. Normally, no special feedback is necessary during delays of more than 0.1 but less than 1.0 second, but the user does lose the feeling of operating directly on the data.
10 seconds is about the limit for keeping the user's attention focused on the dialogue. For longer delays, users will want to perform other tasks while waiting for the computer to finish, so they should be given feedback indicating when the computer expects to be done. Feedback during the delay is especially important if the response time is likely to be highly variable, since users will then not know what to expect.

[user engagement](https://www.speedcurve.com/blog/web-performance-monitoring-user-engagement/).

[node-crypto module](https://nodejs.org/api/crypto.html).

Running node optimisations by load spreading. side by side. Parrallel

[node-cluster](https://nodejs.org/api/cluster.html)Source Code: lib/cluster.js
Clusters of Node.js processes can be used to run multiple instances of Node.js that can distribute workloads among their application threads. When process isolation is not needed, use the worker_threads module instead, which allows running multiple application threads within a single Node.js instance.
The cluster module allows easy creation of child processes that all share server ports.

cluster  - fork().

[Load-Balancing](https://en.wikipedia.org/wiki/Load_balancing_(computing)),[webscaling](https://www.webscale.com/). In computing, load balancing is the process of distributing a set of tasks over a set of resources (computing units), with the aim of making their overall processing more efficient. Load balancing can optimize response time and avoid unevenly overloading some compute nodes while other compute nodes are left idle.

Load balancing is the subject of research in the field of parallel computers. Two main approaches exist: static algorithms, which do not take into account the state of the different machines, and dynamic algorithms, which are usually more general and more efficient but require exchanges of information between the different computing units, at the risk of a loss of efficiency.

[pm2](https://pm2.keymetrics.io/).Cluster module process manager

[workerthread](https://nodejs.org/api/worker_threads.html)

[workerthreads-modzilla](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API)
