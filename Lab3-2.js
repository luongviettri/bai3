function solve(a) {
    // Hàm tính ước chung lớn nhất (GCD) của hai số nguyên x và y
    function gcd(x, y) {
        while (y) {
            let temp = y;
            y = x % y;
            x = temp;
        }
        return x;
    }

    // Hàm tính GCD của một danh sách các số nguyên
    function findGcdOfList(lst) {
        return lst.reduce((acc, val) => gcd(acc, val));
    }

    // Số lượng phần tử trong mảng a
    let n = a.length;
    // Tổng các phần tử trong mảng a
    let totalSum = a.reduce((acc, val) => acc + val, 0);

    // Kiểm tra nếu tổng các phần tử lớn hơn hoặc bằng số lượng phần tử
    if (totalSum >= n) {
        // Tìm GCD của toàn bộ mảng
        let gcdAll = findGcdOfList(a);
        // Nếu GCD là 1, trả về "YES"
        if (gcdAll === 1) {
            return "YES";
        }
    }
    // Nếu không thỏa mãn điều kiện, trả về "NO"
    return "NO";
}

// Ví dụ sử dụng
let a1 = [3, 4];
console.log(solve(a1));  // Output: YES

let a2 = [2, 3, 3];
console.log(solve(a2));  // Output: YES

let a3 = [1, 1, 1];
console.log(solve(a3));  // Output: NO