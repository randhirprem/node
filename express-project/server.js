// // Require express package
// const express = require('express');

// const friendsRouter = require('./routes/friends.router'); // import friends router

// // // import the messages controller
// // const messagesController = require('./controllers/messages.controller');
// const messagesRouter = require('./routes/messages.router');

// // Use express
// const app = express();

// // Set the port
// const PORT = 3000;



// // Middleware
// app.use((req, res, next) => {
//     // Log the time diffrence
//     const start = Date.now();
//     next();
//     // get the time diffrence
//     const delta = Date.now() - start;
//     console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
// });
// app.use(express.static())
// app.use(express.json());

// // app.post Example

// app.use('/friends',friendsRouter); // use as a middleware mounting
// app.use('messages', messagesRouter);


// //App to listen
// app.listen(PORT, () => {
//     console.log(`Listening on ${PORT}...`);
// });

const express = require('express');
const path = require('path');

const friendsRouter = require('./routes/friends.router');
const messagesRouter = require('./routes/messages.router');

const app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

const PORT = 3000;

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
});

app.use('/site', express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.get('/', (req, res) => {
  res.render('index', {
    title: 'My Friends Are VERYY Clever',
    caption: 'Let\'s go skiing!',
  });
});

app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`);
});