// Xóa các số 0 vô nghĩa ở đầu.
function deleteLeadingZeros(digits) {
    digits.reverse();
    
    while (digits.length >= 2 && digits[digits.length - 1] === 0) {
        digits.pop();
    }
    
    digits.reverse();
}

// Chuyển từ int sang mảng các chữ số.
function intToDigitArray(number) {
    let digitArray = [];
    if (number === 0) {
        digitArray.push(number);
        return digitArray;
    }

    while (number) {
        digitArray.push(number % 10);
        number = Math.floor(number / 10);
    }

    digitArray.reverse();
    return digitArray;
}

// Nhân hai số lớn.
function multiplyLargeNumbers(num1, num2) {
    // Đảo ngược hai số trước để tiện tính toán.
    num1.reverse();
    num2.reverse();
    
    // Khởi tạo mảng kết quả. Kết quả của tích có thể đạt tới số chữ số
    // bằng tổng độ dài của hai số ban đầu cộng lại và cộng thêm 1.
    let result = new Array(num1.length + num2.length + 1).fill(0);
    
    for (let i = 0; i < num1.length; ++i) {
        for (let j = 0; j < num2.length; ++j) {
            result[i + j] += num1[i] * num2[j];
            result[i + j + 1] += Math.floor(result[i + j] / 10);
            result[i + j] %= 10;
        }
    }
    
    // Xử lý nốt phần giá trị nhớ chưa được cộng hết.
    // Mảng result hiện tại đang là mảng kết quả bị đảo ngược.
    result.push(0);
    for (let i = 0; i < result.length - 1; ++i) {
        result[i + 1] += Math.floor(result[i] / 10);
        result[i] %= 10;
    }
    
    // Đảo ngược mảng result và xóa các chữ số 0 vô nghĩa ở đầu, ta sẽ thu được tích num1 * num2.
    result.reverse();
    deleteLeadingZeros(result);
    
    return result;
}

// Tính giai thừa của một số lớn.
function calculateFactorial(n) {
    let factorial = intToDigitArray(1);
    for (let i = 2; i <= n; ++i) {
        factorial = multiplyLargeNumbers(factorial, intToDigitArray(i));
    }
    return factorial;
}

// Ví dụ sử dụng hàm
let n = 5; // Số cần tính giai thừa
let result = calculateFactorial(n);
console.log(`Giai thừa của ${n} là: ${result.join('')}`);
