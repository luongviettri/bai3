// Hàm xóa các số 0 vô nghĩa ở đầu mảng
function delZero(arr) {
    arr.reverse();
    while (arr.length >= 2 && arr[arr.length - 1] === 0) {
        arr.pop();
    }
    arr.reverse();
}

// Hàm cân bằng độ dài hai mảng bằng cách thêm các số 0 vào đầu mảng ngắn hơn
function equalLength(a, b) {
    while (a.length < b.length) {
        a.unshift(0);
    }
    while (b.length < a.length) {
        b.unshift(0);
    }
}

// Hàm thực hiện phép trừ hai mảng số nguyên lớn
function subtractArrays(a, b) {
    equalLength(a, b);
    
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

// Ví dụ sử dụng hàm subtractArrays
let num1 = [1, 2, 3, 4, 5];
let num2 = [6, 7, 8];
let result = subtractArrays(num1, num2);
console.log(result); // Output: [1, 1, 6, 6, 7]
