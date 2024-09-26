// Hàm thêm các số 0 vào đầu chuỗi để đảm bảo độ dài bằng nhau
function equalLength(a, b) {
    while (a.length < b.length) {
        a = '0' + a;
    }
    while (b.length < a.length) {
        b = '0' + b;
    }
    return [a, b];
}

// Hàm cộng hai chuỗi số nguyên lớn
function add(a, b) {
    // Cân bằng độ dài hai chuỗi
    [a, b] = equalLength(a, b);
    
    let carry = 0; // Biến nhớ
    let res = ''; // Chuỗi kết quả
    
    // Duyệt qua từng chữ số từ phải qua trái
    for (let i = a.length - 1; i >= 0; --i) {
        // Cộng hai chữ số cùng hàng và thêm biến nhớ từ hàng bên phải dồn lên
        let d = (parseInt(a[i]) + parseInt(b[i]) + carry);
        
        carry = Math.floor(d / 10); // Biến nhớ bằng kết quả hàng trước chia 10
        res = (d % 10).toString() + res; // Viết chữ số cuối của kết quả vào chuỗi kết quả
    }
    
    // Nếu biến nhớ còn khác 0, thêm kí tự 1 vào đầu chuỗi kết quả
    if (carry) {
        res = '1' + res;
    }
    
    return res;
}

// Ví dụ sử dụng hàm add
let num1 = '12345678901234567890';
let num2 = '98765432109876543210';
let result = add(num1, num2);
console.log(result); // Output: 111111111011111111100
