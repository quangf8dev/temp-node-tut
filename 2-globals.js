// GLOBALS - NO WINDOW !!!!

// _dirname - path to current directory -> đường dẫn đến thư mục hiện tại
// _filename - file name -> tên tệp
// require - function to use modules (CommonJS) ->  hàm sử dụng mô-đun (CommonJS) 
// module  - info about current module (file) -> thông tin về mô-đun (tệp) hiện tại
// process - info about env where the program is being executed ->  thông tin về env nơi chương trình đang được thực thi
const amount  = 9;
if ( amount  < 10){
    console.log('small number');}
else{
    console.log('large number');

}
console.log(`hey it's my first code node app !!`);
console.log(__dirname); // => KQ: /home/bird/coder/learnNodejs
// node app.ja -> mo file app.js

