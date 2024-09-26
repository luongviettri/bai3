// Xóa các số 0 vô nghĩa ở đầu.
function deleteLeadingZeros(digits) {
    digits.reverse();
    
    while (digits.length >= 2 && digits[digits.length - 1] === 0) {
        digits.pop();
    }
    
    digits.reverse();
}

// Chia một số lớn cho một số nhỏ và lấy thương nguyên.
function divideLargeNumberBySmallNumber(largeNumber, smallNumber) {
    let current = 0;
    let result = [];
    
    for (let digit of largeNumber) {
        current = current * 10 + digit;
        result.push(Math.floor(current / smallNumber));
        current %= smallNumber;
    }
    
    deleteLeadingZeros(result);
    
    return result;
}

// Ví dụ sử dụng hàm
let largeNumber = [1, 2, 3, 4, 5]; // Số lớn
let smallNumber = 12; // Số nhỏ
let result = divideLargeNumberBySmallNumber(largeNumber, smallNumber);
console.log(`Kết quả của phép chia là: ${result.join('')}`);
