// Hàm tính toán phép chia lấy dư cho một số lớn và một số nhỏ
// 'a' là mảng các chữ số của số lớn, 'b' là số nhỏ
function modLargeNumber(a, b) {
    let res = 0;
    for (let d of a) {
        res = (res * 10 + d) % b;
    }
    return res;
}

// Ví dụ sử dụng
let a = [1, 2, 3, 4]; // Số lớn 1234
let b = 7; // Số nhỏ
console.log(modLargeNumber(a, b)); // Kết quả: 2
