// Hàm xóa các số 0 vô nghĩa ở đầu mảng
function delZero(arr) {
    // Đảo ngược mảng để dễ dàng xóa các số 0 ở cuối
    arr.reverse();

    // Xóa các số 0 ở cuối mảng (sau khi đảo ngược)
    while (arr.length >= 2 && arr[arr.length - 1] === 0) {
        arr.pop();
    }

    // Đảo ngược lại mảng để trở về thứ tự ban đầu
    arr.reverse();
}

// Hàm thêm các số 0 vào đầu mảng để đảm bảo độ dài bằng nhau
function addZero(arr, size) {
    while (arr.length < size) {
        arr.unshift(0);
    }
}

// Đưa 2 mảng về cùng một kích thước bằng cách thêm các số 0 vào đầu
function change(a, b) {
    const size = Math.max(a.length, b.length);
    addZero(a, size);
    addZero(b, size);
}

// Phép toán cộng hai mảng số nguyên lớn
function addArrays(a, b) {
    change(a, b);

    const sz = a.length;
    const c = [];

    let rem = 0; // Biến nhớ
    for (let i = sz - 1; i >= 0; --i) {
        let x = a[i] + b[i] + rem;
        rem = Math.floor(x / 10); // Biến nhớ bằng kết quả hàng trước chia 10
        x %= 10; // Lấy chữ số cuối của kết quả
        c.push(x);
    }

    c.push(rem); // Thêm biến nhớ vào cuối mảng
    c.reverse(); // Đảo ngược mảng để có kết quả đúng
    delZero(c); // Xóa các số 0 vô nghĩa ở đầu mảng

    return c;
}

// Ví dụ sử dụng hàm addArrays
let num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let num2 = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
let result = addArrays(num1, num2);
console.log(result); // Output: [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0]
