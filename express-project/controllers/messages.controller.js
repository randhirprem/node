// // If in server.js
// // (req,res) => {
// //     res.send('<ul><li>Hello Albert!</li></ul>');
// // }
// const path = require('path');
// // As a function
// function getMessages(req,res) {
    
//     res.sendFile(path.join(__dirname, '..', 'public', 'skimountain.jpg'));
//    // res.send('<ul><li>Hello Albert!</li></ul>');
// }
// // If in server.js
// // (req,res) => {
// //     console.log('Updating messages...');
// // }
// // As a function
// function postMessages(req,res) {
//     console.log('Updating messages...');
// }

// // Export function
// module.exports = {
//     getMessages,
//     postMessages,
// };

const path = require('path');

function getMessages(req, res) {
  res.render('messages', {
    title: 'Messages to my Friends!',
    friend: 'Elon Musk',
  });
  // res.sendFile(path.join(__dirname, '..', 'public', 'images', 'skimountain.jpg'));
}

function postMessage(req, res) {
  console.log('Updating messages...');
}

module.exports = {
  getMessages,
  postMessage,
};