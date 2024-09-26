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

// Hàm nhập số lớn từ chuỗi
function parseBigInt(str) {
    return str.split('').map(char => parseInt(char, 10));
}

// Hàm in số lớn ra chuỗi
function printBigInt(arr) {
    return arr.join('');
}

// Hàm tính số Fibonacci thứ n
function fibonacci(n) {
    if (n === 0) return "0";
    if (n === 1) return "1";

    let f0 = parseBigInt("0");
    let f1 = parseBigInt("1");
    let fn;

    for (let i = 2; i <= n; ++i) {
        fn = addArrays(f0, f1);
        f0 = f1;
        f1 = fn;
    }

    return printBigInt(fn);
}

// Ví dụ với n = 100
let n = 6;
console.log(`Số Fibonacci thứ ${n} là: ${fibonacci(n)}`);
