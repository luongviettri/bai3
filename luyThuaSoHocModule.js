function powerMod(x, y, p) {
    let result = 1;
    x = x % p; // Đảm bảo x nhỏ hơn p

    for (let i = 0; i < y; i++) {
        result = (result * x) % p;
    }
    return result;
}

// Ví dụ sử dụng
let x = 2;
let y = 5;
let p = 13;
console.log("Power is " + powerMod(x, y, p)); // Kết quả sẽ là 6
