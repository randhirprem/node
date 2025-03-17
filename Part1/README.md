# This is PART 1 of the node lessons.

## Useful links that can help.
1. [download latest version of node](https://nodejs.org/en) - this is to do node instalation.
2. [latest node releases](https://nodejs.org/en/about/previous-releases) - latest support of node.
3. [Visual studio code for ide](https://code.visualstudio.com/) - ide download
4. [Doccumentation for node ](https://nodejs.org/docs/latest/api/) - latest doccumentation for node.js .

## Part of part 1
[Part1](/hello.js)

1. How a function is written in node.
2. console.log - console logging to output the function once run.
3. // const mission = 'learn'; -- method 1
// if (mission === 'learn') {
//     console.log('Time to write some Node code');
// } else {
//     console.log('Is '+ mission + ' really more fun?');
// }
4. New way to write in node to concate string us `` not '',console.log(`Is ${mission} really more fun?`);

// const mision = 'learn';

// if (mission === 'learn') {
//     console.log('Time to write some Node code');
// } else {
//     console.log(`Is ${mission} really more fun?`);
// }

// using a process.argv
// see that the process arvg is in index 2

5. using a process.argv
// see that the process arvg is in index 2
const mission = process.argv[2];

if (mission === 'learn') {
    console.log('Time to write some Node code');
} else {
    console.log(`Is ${mission} really more fun?`);
}
