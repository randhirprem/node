// Require Axios lib.
const axios = require('axios');

// using the functionality of the Axios lib to get the URL request
// using a .then callback function
// // Method 1
// axios.get('https://www.google.com')
//     .then((response) => {
//         console.log(response);
//     });

// Method 2 - hidden function
axios.get('https://www.google.com')
.then(function(response){
    console.log(response);
})
// to catch error
.catch((err) => {
    console.log(err);
})
.then(() => {
// Message to display when all done. 
    console.log('All done!');
});