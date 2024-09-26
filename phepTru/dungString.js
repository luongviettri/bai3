// Hàm cân bằng độ dài hai chuỗi bằng cách thêm kí tự '0' vào đầu chuỗi ngắn hơn
function equalLength(a, b) {
    while (a.length < b.length) {
        a = '0' + a;
    }
    while (b.length < a.length) {
        b = '0' + b;
    }
    return [a, b];
}

// Hàm thực hiện phép trừ hai chuỗi số nguyên lớn
function subtractLargeNumbers(a, b) {
    [a, b] = equalLength(a, b); // dùng tuple lấy 2 số dạng string ra
    
    let difference = 0, borrow = 0;
    let result = '';
    
    for (let i = a.length - 1; i >= 0; --i) {
        difference = (a[i] - '0') - (b[i] - '0') - borrow; // (a[i] - '0') là để đổi a[i] dạng string sang dạng int mà ko cần dùng parseInt 
        
        // Tính toán biến nhớ cho hàng này
        if (difference < 0) {
            difference += 10;
            borrow = 1;
        } else {
            borrow = 0;
        }
        
        // Thêm kí tự cuối cùng của kết quả trừ hàng vào đầu biến hiệu
        result = (difference + '') + result;
    }
    
    // Xóa chữ số 0 vô nghĩa ở đầu kết quả. Nếu kết quả bằng 0 thì giữ lại một kí tự
    while (result.length > 1 && result[0] === '0') {
        result = result.slice(1);
    }
    
    return result;
}

// Ví dụ sử dụng hàm subtractLargeNumbers
let num1 = '12345';
let num2 = '678';
let result = subtractLargeNumbers(num1, num2);
console.log(result); // Output: 11667
