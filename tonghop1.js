// Hàm xóa các số 0 vô nghĩa ở đầu mảng
function delZero(arr) {
    arr.reverse();
    while (arr.length >= 2 && arr[arr.length - 1] === 0) {
        arr.pop();
    }
    arr.reverse();
}

// Hàm thêm các số 0 vào đầu mảng để cân bằng độ dài
function addZero(arr, size) {
    arr.reverse();
    while (arr.length < size) {
        arr.push(0);
    }
    arr.reverse();
}

// Hàm cân bằng độ dài hai mảng bằng cách thêm các số 0 vào đầu
function changeLength(a, b) {
    const maxSize = Math.max(a.length, b.length);
    addZero(a, maxSize);
    addZero(b, maxSize);
}

// Hàm so sánh hai mảng số nguyên lớn
function isLessThan(a, b) {
    changeLength(a, b);
    for (let i = 0; i < a.length; ++i) {
        if (a[i] < b[i]) return true;
        if (a[i] > b[i]) return false;
    }
    return false;
}

function isGreaterThan(a, b) {
    changeLength(a, b);
    for (let i = 0; i < a.length; ++i) {
        if (a[i] > b[i]) return true;
        if (a[i] < b[i]) return false;
    }
    return false;
}

function isLessThanOrEqual(a, b) {
    changeLength(a, b);
    for (let i = 0; i < a.length; ++i) {
        if (a[i] < b[i]) return true;
        if (a[i] > b[i]) return false;
    }
    return true;
}

function isGreaterThanOrEqual(a, b) {
    changeLength(a, b);
    for (let i = 0; i < a.length; ++i) {
        if (a[i] > b[i]) return true;
        if (a[i] < b[i]) return false;
    }
    return true;
}

function isEqual(a, b) {
    changeLength(a, b);
    for (let i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

// Hàm cộng hai mảng số nguyên lớn
function addArrays(a, b) {
    changeLength(a, b);
    const result = [];
    let carry = 0;
    for (let i = a.length - 1; i >= 0; --i) {
        let sum = a[i] + b[i] + carry;
        carry = Math.floor(sum / 10);
        sum %= 10;
        result.push(sum);
    }
    result.push(carry);
    result.reverse();
    delZero(result);
    return result;
}

// Hàm trừ hai mảng số nguyên lớn
function subtractArrays(a, b) {
    changeLength(a, b);
    const result = [];
    let borrow = 0;
    for (let i = a.length - 1; i >= 0; --i) {
        let difference = a[i] - b[i] - borrow;
        if (difference < 0) {
            difference += 10;
            borrow = 1;
        } else {
            borrow = 0;
        }
        result.push(difference);
    }
    result.reverse();
    delZero(result);
    return result;
}

// Hàm nhập số lớn từ chuỗi
function parseBigInt(str) {
    return str.split('').map(char => parseInt(char, 10));
}

// Hàm in số lớn ra chuỗi
function printBigInt(arr) {
    return arr.join('');
}

// Test
function main() {
    const a = parseBigInt(prompt("Nhập số a:"));
    const b = parseBigInt(prompt("Nhập số b:"));

    if (isLessThan(a, b)) {
        console.log("a < b");
    } else if (isGreaterThan(a, b)) {
        console.log("a > b");
    } else if (isEqual(a, b)) {
        console.log("a = b");
    }

    console.log("a + b =", printBigInt(addArrays(a, b)));

    // Phải đảm bảo a >= b để thực hiện phép trừ
    if (isLessThan(a, b)) {
        [a, b] = [b, a]; // Hoán đổi a và b nếu a < b
    }
    console.log("a - b =", printBigInt(subtractArrays(a, b)));
}

main();
