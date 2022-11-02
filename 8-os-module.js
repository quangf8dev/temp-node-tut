const os  = require('os'); // module hedieuhanh
// info about current  user
const user = os.userInfo();
console.log(user);
// method returns the system uptime in seconds
console.log(`The system Uptime is ${os.uptime()} second`)
// Operating System 
/*
Hệ điều hành ( OS ) là phần mềm hệ thống quản lý phần cứng máy tính, 
tài nguyên phần mềm và cung cấp các dịch vụ chung cho các chương trình máy tính 
*/ 
const currentOS = {
    name: os.type(), 
    release: os.release(),
    totalmem: os.totalmem(),
    freeMem : os.freemem(),
}
console.log(currentOS);
