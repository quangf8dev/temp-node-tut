// them module
const names = require('./4-names'); // -> require(<link>) giong import
const sayHi = require('./5-utils'); 
const data  = require('./6-alternative-flavor');
require('./7-mind-grenade');
 sayHi('susan');
 sayHi(names.john);
 sayHi(names.peter);

//MODULES
 console.log(names);
 console.log(data);
//=> { john: 'john', peter: 'peter' }
//----------------------------------------------------------------------------------------