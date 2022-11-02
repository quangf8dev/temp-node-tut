//local
const secret  = 'SUPER SECRET';
// global
const john = 'john';
const peter = 'peter';
// Module {
//     id: '.',
//     path: '/home/bird/coder/learnNodejs',
//     exports: {}, -> thuoc tinh module tra ve 1 doi tuong
//     filename: '/home/bird/coder/learnNodejs/4-names.js',
//     loaded: false,
//     children: [],
//     paths: [
//       '/home/bird/coder/learnNodejs/node_modules',
//       '/home/bird/coder/node_modules',
//       '/home/bird/node_modules',
//       '/home/node_modules',
//       '/node_modules'
//     ]
//   }
// tao module: 
module.exports = {john, peter};