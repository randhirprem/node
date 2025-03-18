// // run a time-out
// const REQUEST_TIMEOUT = 500;
module.exports.REQUEST_TIMEOUT = 500;
// Function to encrypt the data
function encrypt(data) {
    return 'encrypted data';
}
// // Function to send that said url data over
// function send(url, data) {
//     const encryptedData = encrypt(data);
//     console.log(`sending ${encryptedData} to ${url}`);
// }

// // module 
// // test what exactaly gets export from a module
// console.log(module);

// // Export a module - ONE METHOD WITH TIME OUT
// module.exports = {
//     REQUEST_TIMEOUT,
//     send,
// }

// Function to send that said url data over
module.exports.send = function send(url, data) {
    const encryptedData = encrypt(data);
    console.log(`sending ${encryptedData} to ${url}`);
}