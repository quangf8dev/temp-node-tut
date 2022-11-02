//Path
/*
KN: Đường dẫn là một chuỗi ký tự được sử dụng để xác định duy nhất một vị trí trong cấu trúc thư mục.
Nó được cấu tạo bằng cách tuân theo hệ thống phân cấp cây thư mục, trong đó các thành phần, được phân
tách bằng ký tự phân cách,
*/
const path = require('path'); // duong dan
console.log(path.sep);

const filePath = path.join('/content/', 'subfolder', 'test.txt'); 
console.log(filePath);

const  base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname,'content','subfolder','test.txt'); // duong dan tuyet doi 
// absolute =  dirname: duong dan thu muc hien tai +  'content','subfolder','test.txt'
/*
Đường dẫn được chia làm hai loại:

Đường dẫn tuyệt đối (là một chuỗi đầy đủ bao gổm http://, tên miền của trang web, đường dẫn đến tập 
tin)
Đường dẫn tương đối (là một phần nhỏ của đường dẫn tuyệt đối, thông thường đường dẫn tương đối là 
phần đường dẫn đến tập tin)
*/
console.log(absolute);