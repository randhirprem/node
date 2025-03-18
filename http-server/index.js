// // Import the HTTP module
// const http = require('http');

// const PORT = 3000;

// const server = http.createServer((req,res) => {
//     res.writeHead(200, {
//         //'Content-Type': 'text/plain',
//         'Content-Type': 'application/json',
//     });
//     //res.end('Hello! Sir Isaac Newton is your friend');
//     res.end(JSON.stringify({
//         id: 1,
//         name: 'Sir Isaac Newton',
//     }));
// });

// server.listen(PORT, () => {
//     console.log(`Listening on port ${PORT}...`);
// }); //127.0.0.1 => localhost


// const http = require('http');

// const PORT = 3000;

// const server = http.createServer();

// const friends = [
//   {
//     id: 0,
//     name: 'Nikola Tesla',
//   },
//   {
//     id: 1,
//     name: 'Sir Isaac Newton',
//   },
//   {
//     id: 2,
//     name: 'Albert Einstein',
//   }
// ];

// server.on('request', (req, res) => {
//   const items = req.url.split('/');
//   // /friends/2 => ['', 'friends', '2']
//   // /friends/
//   if (req.method === 'POST' && items[1] === 'friends') {
//     req.on('data', (data) => {
//       const friend = data.toString();
//       console.log('Request:', friend);
//       friends.push(JSON.parse(friend));
//     });
//     req.pipe(res);
//   } else if (req.method === 'GET' && items[1] === 'friends') {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'application/json');
//     if (items.length === 3) {
//       const friendIndex = Number(items[2]);
//       res.end(JSON.stringify(friends[friendIndex]));
//     } else {
//       res.end(JSON.stringify(friends));
//     }
//   } else if (req.method === 'GET' && items[1] === 'messages') {
//     res.setHeader('Content-Type', 'text/html');
//     res.write('<html>');
//     res.write('<body>');
//     res.write('<ul>');
//     res.write('<li>Hello Isaac!</li>');
//     res.write('<li>What are your thoughts on astronomy?</li>');
//     res.write('</ul>');
//     res.write('</body>');
//     res.write('</html>');
//     res.end();
//   } else {
//     res.statusCode = 404;
//     res.end();
//   }
// });

// server.listen(PORT, () => {
//   console.log(`Listening on port ${PORT}...`);
// }); // 127.0.0.1 => localhost

// Import the built-in HTTP module to create a server
const http = require('http');

// Define the port number where the server will listen for requests
const PORT = 3000;

// Create an HTTP server instance
const server = http.createServer();

// Define a list of "friends" as sample data (array of objects)
const friends = [
  {
    id: 0,
    name: 'Nikola Tesla',
  },
  {
    id: 1,
    name: 'Sir Isaac Newton',
  },
  {
    id: 2,
    name: 'Albert Einstein',
  }
];

// Listen for incoming HTTP requests
server.on('request', (req, res) => {
  // Split the request URL into parts using '/' as a separator
  const items = req.url.split('/');  
  // Example: '/friends/2' => ['', 'friends', '2']

  // Handle POST requests to add a new friend
  if (req.method === 'POST' && items[1] === 'friends') {
    req.on('data', (data) => {
      // Convert the incoming data from Buffer to a string
      const friend = data.toString();
      console.log('Request:', friend);
      
      // Parse the JSON data and add it to the friends array
      friends.push(JSON.parse(friend));
    });

    // Send back the request body as the response
    req.pipe(res);
  } 
  // Handle GET requests for retrieving friends
  else if (req.method === 'GET' && items[1] === 'friends') {
    res.statusCode = 200; // Set HTTP status to OK (200)
    res.setHeader('Content-Type', 'application/json'); // Set response type to JSON
    
    // Check if the request specifies a specific friend's ID
    if (items.length === 3) {
      const friendIndex = Number(items[2]); // Convert the ID to a number
      res.end(JSON.stringify(friends[friendIndex])); // Send the selected friend
    } else {
      res.end(JSON.stringify(friends)); // Send the entire friends list
    }
  } 
  // Handle GET requests for retrieving messages
  else if (req.method === 'GET' && items[1] === 'messages') {
    res.setHeader('Content-Type', 'text/html'); // Set response type to HTML
    
    // Write an HTML response
    res.write('<html>');
    res.write('<body>');
    res.write('<ul>');
    res.write('<li>Hello Isaac!</li>');
    res.write('<li>What are your thoughts on astronomy?</li>');
    res.write('</ul>');
    res.write('</body>');
    res.write('</html>');
    
    res.end(); // End response
  } 
  // Handle all other unknown routes with a 404 response
  else {
    res.statusCode = 404;
    res.end();
  }
});

// Start the server and listen on the specified port
server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
}); // Accessible via http://localhost:3000
