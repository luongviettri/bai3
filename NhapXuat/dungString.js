const readline = require('readline');

// Tạo giao diện để đọc và ghi dữ liệu từ bàn phím
const rl = readline.createInterface({ // dùng cái này sẽ nhận dữ liệu là string
    input: process.stdin,   
    output: process.stdout
});

// Hàm để nhập một chuỗi ký tự từ bàn phím
function input(callback) {
    rl.question('', (number) => {
        callback(number);
    });
}

// Hàm để xuất một chuỗi ký tự ra màn hình
function output(number) {
    console.log(number);
}

let a, b; // sẽ là string khi dùng readLine

// Nhập chuỗi ký tự đầu tiên
input((number) => {
    a = number;
    // Nhập chuỗi ký tự thứ hai
    input((number) => {
        b = number;
        // Xuất chuỗi ký tự đầu tiên
        output(a);
        // Xuất chuỗi ký tự thứ hai
        output(b);
        // Đóng giao diện đọc/ghi
        rl.close();
    });
});
