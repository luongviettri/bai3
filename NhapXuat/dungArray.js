// JavaScript Code
const readline = require('readline');

// Tạo giao diện để đọc và ghi dữ liệu từ/đến console
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Hàm để nhập số lớn từ người dùng
function input(callback) {
    rl.question('', (number) => {
        // Chuyển chuỗi nhập thành mảng số nguyên
        const numArray = number.split('').map(digit => parseInt(digit, 10));
        callback(numArray);
    });
}

// Hàm để xuất số lớn ra console
function output(number) {
    // Chuyển mảng số nguyên thành chuỗi và in ra
    console.log(number.join(''));
}

let a, b;

// Nhập số đầu tiên
input((number) => {
    a = number;
    // Nhập số thứ hai
    input((number) => {
        b = number;
        // Xuất cả hai số
        output(a);
        output(b);
        // Đóng giao diện readline
        rl.close();
    });
});
