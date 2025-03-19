// const express = require('express'); // import express

// //  import friends controller
// const messagesController = require('../controllers/messages.controller');

// const messagesRouter = express.Router(); // establish router

// messagesRouter.get('/', messagesController.getMessages);
// messagesRouter.post('/',messagesController.postMessages);

// module.exports = messagesRouter; 

const express = require('express');

const messagesController = require('../controllers/messages.controller');

const messagesRouter = express.Router();

messagesRouter.get('/', messagesController.getMessages);
messagesRouter.post('/', messagesController.postMessage);

module.exports = messagesRouter;
