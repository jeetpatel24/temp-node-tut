//Globals -- No window!!!

// __dirname -- path to current directory
//__filename -- file name
//require    -- function to use modules (commonJS)
//module     -- info about current module (file)
//process    -- info about env where the program is being executed

// console.log(__dirname);
// console.log(__filename);
// console.log(require);
// console.log(module);
// console.log(process);


// setInterval(()=> {                            // it will print hello world repeatedly at the interval of 1 sec
//     console.log("hello world")
// }, 1000);


const names = require('./4-names');
const functions = require('./5-utils');
const data = require('./6-alternative-flavour');
require('./7-mind-grenade')

console.log(data);
functions.sayHi('Jeet');
functions.sayHi2(names.john);
functions.sayHi2(names.peter);

