const EventEmitter = require('events');
const celebrity = new EventEmitter();

// // Subscribe to celebrity for Observer 1
// celebrity.on('race win'), function() {
//     console.log('Congratulations! you are the best');
// });

// // Subscribe to celebrity for Observer 1
// celebrity.on('race win', () => {
//     console.log('Congratulations! you are the best');
// });

// // Subscribe to celebrity for Observer 2
// celebrity.on('race win', () => {
//     console.log('Boo I could have better than that!');
// });
// // Emit the event
// celebrity.emit('race win');
// celebrity.emit('race loss'); // nothing subscribe to
// celebrity.emit('race win');


// process.on('exit')
// Subscribe to celebrity for Observer 1
celebrity.on('race', (result) => {
    if (result === 'win') {
    console.log('Congratulations! you are the best');
    }
});

// Subscribe to celebrity for Observer 2
celebrity.on('race', (result) => {
    if (result === 'win') {
    console.log('Boo I could have better than that!');
    }
});

// process on ('exit').
process.on('exit', (code) => {
    console.log('Porcess exit event with code: ', code);
})
// Emit the event
celebrity.emit('race', 'win');
celebrity.emit('race', 'loss'); // nothing subscribe to

