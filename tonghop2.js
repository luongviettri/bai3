// Xóa các số 0 vô nghĩa ở đầu.
function deleteLeadingZeros(arr) {
    arr.reverse();
    
    while (arr.length >= 2 && arr[arr.length - 1] === 0) {
        arr.pop();
    }
    
    arr.reverse();
}

// Chuyển số nguyên thành mảng các chữ số.
function intToVi(n) {
    let res = [];
    if (n === 0) {
        res.push(n);
        return res;
    }

    while (n) {
        res.push(n % 10);
        n = Math.floor(n / 10);
    }

    return res;
}

// Nhân hai số lớn.
function multiplyLargeNumbers(a, b) {
    // Đảo ngược hai số trước để tiện tính toán.
    a.reverse();
    b.reverse();
    
    // Khởi tạo mảng kết quả. Kết quả của tích có thể đạt tới số chữ số
    // bằng tổng độ dài của hai số ban đầu cộng lại và cộng thêm 1.
    let c = new Array(a.length + b.length + 1).fill(0);
    
    for (let i = 0; i < a.length; ++i) {
        for (let j = 0; j < b.length; ++j) {
            c[i + j] += a[i] * b[j];
            c[i + j + 1] += Math.floor(c[i + j] / 10);
            c[i + j] %= 10;
        }
    }
    
    // Xử lý nốt phần giá trị nhớ chưa được cộng hết.
    // Mảng c hiện tại đang là mảng kết quả bị đảo ngược.
    c.push(0);
    for (let i = 0; i < c.length - 1; ++i) {
        c[i + 1] += Math.floor(c[i] / 10);
        c[i] %= 10;
    }
    
    // Đảo ngược mảng c và xóa các chữ số 0 vô nghĩa ở đầu, ta sẽ thu được tích a * b.
    c.reverse();
    deleteLeadingZeros(c);
    
    return c;
}

// Ví dụ sử dụng hàm
let a = [1, 2, 3]; // Số lớn thứ nhất
let b = [4, 5, 6]; // Số lớn thứ hai
let n = 789; // Số nhỏ

// Nhân số lớn a và số nhỏ n.
let result1 = multiplyLargeNumbers(a, intToVi(n));
console.log(`Kết quả của phép nhân a và n là: ${result1.join('')}`);

// Nhân hai số lớn a và b.
let result2 = multiplyLargeNumbers(a, b);
console.log(`Kết quả của phép nhân a và b là: ${result2.join('')}`);
