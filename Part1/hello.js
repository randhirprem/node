// // How a function is written in node
// function findMeaning() {
//     return 42;
// }
// // console.log - console logging to output the function once run
// console.log(findMeaning())

// // Option 1 old school way to concate string
// const mission = 'learn';

// if (mission === 'learn') {
//     console.log('Time to write some Node code');
// } else {
//     console.log('Is '+ mission + ' really more fun?');
// }

// New way to write in node to concate string us `` not '',console.log(`Is ${mission} really more fun?`); 

// const mision = 'learn';

// if (mission === 'learn') {
//     console.log('Time to write some Node code');
// } else {
//     console.log(`Is ${mission} really more fun?`);
// } 

// using a process.argv
// see that the process arvg is in index 2
const mission = process.argv[2];


if (mission === 'learn') {
    console.log('Time to write some Node code');
} else {
    console.log(`Is ${mission} really more fun?`);
}