// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip) step by step: tutu tung buoc 1
// npm init -y ( everything default)
//Lodash framework js => toi uu code lam viec voi array
const _ = require('lodash')
const items = [1, [2,[3,[4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
