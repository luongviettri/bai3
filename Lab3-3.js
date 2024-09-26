/**
 * Hàm tính ước chung lớn nhất (GCD) của hai số.
 * @param {number} x - Số thứ nhất.
 * @param {number} y - Số thứ hai.
 * @returns {number} - GCD của x và y.
 */
function gcd(x, y) {
    while (y) {
        let temp = y;
        y = x % y;
        x = temp;
    }
    return x;
}

/**
 * Hàm giải quyết bài toán theo yêu cầu.
 * @param {number[]} a - Mảng đầu vào chứa các số nguyên.
 * @returns {number[]} - Mảng kết quả B sao cho GCD(B[i], B[i+1]) = A[i].
 */
function solve(a) {
    let length = a.length;
    let resultArray = new Array(length + 1).fill(0);

    // Khởi tạo phần tử đầu tiên của mảng kết quả
    resultArray[0] = a[0];

    // Duyệt qua từng phần tử của mảng đầu vào
    for (let i = 1; i <= length; i++) {
        // Gán giá trị cho phần tử hiện tại của mảng kết quả
        resultArray[i] = a[i - 1];

        /**
         * Điều chỉnh phần tử trước đó của mảng kết quả để đảm bảo
         * GCD(resultArray[i-1], resultArray[i]) = a[i-1].
         */
        resultArray[i - 1] = (resultArray[i - 1] * a[i - 1]) / gcd(a[i - 1], resultArray[i - 1]);
    }

    // Trả về mảng kết quả
    return resultArray;
}
