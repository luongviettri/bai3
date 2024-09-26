// Nạp chồng toán tử % cho hai số lớn a và b.
function mod(a, b) {
    let c = Math.floor(a / b) * b;
    return a - c;
}

// Ví dụ sử dụng
let a = 12345678901234567890n;
let b = 9876543210n;
console.log(mod(a, b)); // Kết quả sẽ là phần dư của phép chia a cho b
