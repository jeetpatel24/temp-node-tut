// npm - global command comes with code
// npm --version

// local dependency - use it only in this particular project
// npm i <packagename>

// global dependency - use it in any project
// npm install -g <packagename>
// sudo install -g <pakagename> (mac)
// package.json- manifest file (stores imp info about project/package)
// mannual approach (create package.json int the root, create properties etc)
// npm init (step by step press enter to skip)
// npm init -y (everything default)




const _ = require('lodash');

const items = [1,[2,[3,[4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);