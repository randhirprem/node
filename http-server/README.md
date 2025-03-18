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


## 🌍 HTTP SERVER EXAMPLE

### 📌 Overview
This project is a simple Node.js HTTP server that demonstrates how to handle GET and POST requests. The server maintains a list of famous scientists ("friends") and allows users to retrieve and add new friends through HTTP requests.

### 📂 Project Structure
bash
Copy
Edit
HTTP-SERVER/
│── index.js       # Main server file
│── package.json   # Project metadata and dependencies
│── README.md      # Documentation
│── node_modules/  # Dependencies (after running npm install)

### 🛠️ Installation & Setup
1️⃣ Clone the Repository
git clone <https://github.com/randhirprem/http-server-example.git>
cd http-server-example
2️⃣ Install Dependencies
npm install
🚀 Running the Server
🔹 Start the Server
npm start
or manually:
node index.js
Once started, the server will listen on <http://localhost:3000>.

### 📜 How It Works
1️⃣ Handling HTTP Requests
The server supports the following routes:

HTTP Method Endpoint Description
GET /friends Returns a list of all friends (scientists).
GET /friends/:id Returns details of a specific friend (by ID).
POST /friends Adds a new friend from JSON request body.
GET /messages Returns an HTML response with some messages.

### 🔗 Useful Commands
Command Description
npm install Installs project dependencies.
npm start Runs index.js to start the HTTP server.
node index.js Manually runs the server.

### 📝 License
This project is licensed under the ISC License.
