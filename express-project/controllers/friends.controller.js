// // Import the models
// const model = require('../models/friends.model');

// // post friends and add new friend
// function postFriend(req, res) {
//     if (!req.body.name){
//         return res.status(400).json({
//             error: 'Missing friend name'
//         });
//     }
//     const newFriend = {
//         name: req.body.name,
//         // id: friends.length
//         id: model.friends.length
//     };
//     // friends.push(newFriend);
//     model.push(newFriend);
//     res.json(newFriend);
// }
// // EXAMPLE ABOUT HOW EXPRESS WORKS
// // method 1
// // app.get('/',(req,res) => {
// //     res.send('HELLOOOOO');
// // });
// // method 2

// // Get all of our friends
//  function getFriends (req,res) {
//     // res.json(friends); // to render JSON
//     res.json(model); // to render JSON
//     //res.send(friends); // method 1 - to render
// }

// // Get individual friends
// function getFriend (req,res) {
//     const friendID = Number(req.params.friendId); // get friend id parameter
//     // const friend = friends[friendId];
//     const friend = model[friendId]; // Retrives a specific friend from friends array using index (friendID)
//     if(friend) {
//         res.status(200).json(friend);
//     } else {
//         res.status(404).json({
//             error: 'Friend does not exist'
//         });
//     }
// }

// // set module exports
// module.exports = {
//     postFriend,
//     getFriends,
//     getFriend,
// };

const model = require('../models/friends.model');

function postFriend(req, res) {
  if (!req.body.name) {
    return res.status(400).json({
      error: 'Missing friend name'
    });
  }

  const newFriend = {
    name: req.body.name,
    id: model.length,
  };
  model.push(newFriend);

  res.json(newFriend);
}

function getFriends(req, res) {
  res.json(model);
}

function getFriend(req, res) {
  const friendId = Number(req.params.friendId);
  const friend = model[friendId];
  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({
      error: 'Friend does not exist'
    });
  }
}

module.exports = {
  postFriend,
  getFriends,
  getFriend,
};