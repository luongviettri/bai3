// Hàm nhân số lớn với số nhỏ
function multiplyLargeNumberWithSmall(largeNumber, smallNumber) {
    let carry = 0;
    let result = [];

    // Duyệt từ cuối chuỗi số lớn về đầu
    for (let i = largeNumber.length - 1; i >= 0; --i) {
        // Lấy tích chữ số và số nhỏ, cộng thêm biến nhớ từ hàng bên phải
        let product = (parseInt(largeNumber[i]) * smallNumber) + carry;
        carry = Math.floor(product / 10); // Giá trị nhớ đẩy sang hàng bên trái
        result.push(product % 10); // Thêm chữ số cuối vào kết quả
    }

    // Nếu vẫn còn nhớ thì viết nốt nó sang bên trái kết quả
    while (carry > 0) {
        result.push(carry % 10);
        carry = Math.floor(carry / 10);
    }

    // Đảo ngược chuỗi kết quả để thu được kết quả đúng
    result.reverse();

    // Chuyển mảng kết quả thành chuỗi
    return result.join('');
}

// Ví dụ sử dụng hàm
let largeNumber = "12345678901234567890";
let smallNumber = 1234567890123456789;
console.log(`Kết quả của phép nhân là: ${multiplyLargeNumberWithSmall(largeNumber, smallNumber)}`);
