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

// So sánh hai số lớn.
function compareLargeNumbers(a, b) {
    if (a.length !== b.length) {
        return a.length - b.length;
    }
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            return a[i] - b[i];
        }
    }
    return 0;
}

// Cộng hai số lớn.
function addLargeNumbers(a, b) {
    let carry = 0;
    let result = [];
    let maxLength = Math.max(a.length, b.length);
    a = a.slice().reverse();
    b = b.slice().reverse();

    for (let i = 0; i < maxLength || carry; i++) {
        let sum = (a[i] || 0) + (b[i] || 0) + carry;
        result.push(sum % 10);
        carry = Math.floor(sum / 10);
    }

    result.reverse();
    return result;
}

// Trừ hai số lớn.
function subtractLargeNumbers(a, b) {
    let carry = 0;
    let result = [];
    a = a.slice().reverse();
    b = b.slice().reverse();

    for (let i = 0; i < a.length; i++) {
        let diff = a[i] - (b[i] || 0) - carry;
        if (diff < 0) {
            diff += 10;
            carry = 1;
        } else {
            carry = 0;
        }
        result.push(diff);
    }

    result.reverse();
    deleteLeadingZeros(result);
    return result;
}

// Nhân hai số lớn.
function multiplyLargeNumbers(a, b) {
    a.reverse();
    b.reverse();
    let result = new Array(a.length + b.length + 1).fill(0);

    for (let i = 0; i < a.length; ++i) {
        for (let j = 0; j < b.length; ++j) {
            result[i + j] += a[i] * b[j];
            result[i + j + 1] += Math.floor(result[i + j] / 10);
            result[i + j] %= 10;
        }
    }

    result.push(0);
    for (let i = 0; i < result.length - 1; ++i) {
        result[i + 1] += Math.floor(result[i] / 10);
        result[i] %= 10;
    }

    result.reverse();
    deleteLeadingZeros(result);
    return result;
}

// Chia hai số lớn.
function divideLargeNumbers(dividend, divisor) {
    let result = [0];
    let one = intToDigitArray(1);
    let low = intToDigitArray(1);
    let high = dividend.slice();

    while (compareLargeNumbers(low, high) <= 0) {
        let mid = divideLargeNumbers(addLargeNumbers(low, high), intToDigitArray(2));
        if (compareLargeNumbers(multiplyLargeNumbers(mid, divisor), dividend) <= 0) {
            result = mid;
            low = addLargeNumbers(mid, one);
        } else {
            high = subtractLargeNumbers(mid, one);
        }
    }

    return result;
}

// Ví dụ sử dụng hàm
let dividend = [1, 2, 3, 4, 5]; // Số bị chia
let divisor = [1, 2]; // Số chia
let result = divideLargeNumbers(dividend, divisor);
console.log(`Kết quả của phép chia là: ${result.join('')}`);
