// const express = require('express'); // import express

// //  import friends controller
// const friendsController = require('../controllers/friends.controller');

// const friendsRouter = express.Router(); // establish router

// friendsRouter.use((req, res,next) => {
//     console.log('ip address:', req.ip);
//     next();
// });

// friendsRouter.post('/',friendsController.postFriend); // to add new friend
// friendsRouter.get('/', friendsController.getFriends); // to get all friends
// friendsRouter.get('/:friendId',friendsController.getFriend);// TO get a specific friend by ID

// module.exports = friendsRouter; 
const express = require('express');

const friendsController = require('../controllers/friends.controller');

const friendsRouter = express.Router();

friendsRouter.use((req, res, next) => {
  console.log('ip address:', req.ip);
  next();
});
friendsRouter.post('/', friendsController.postFriend);
friendsRouter.get('/', friendsController.getFriends);
friendsRouter.get('/:friendId', friendsController.getFriend);

module.exports = friendsRouter;