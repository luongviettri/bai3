// Thêm các số 0 vào đầu mảng để đảm bảo độ dài bằng nhau
//output như
/** 
 *  console.log(arr1); // Output: [0, 0, 1, 2, 3]
    console.log(arr2); // Output: [0, 0, 0, 4, 5]
*/
function addZero(arr, size) {
    // Đảo ngược mảng để tối ưu thời gian khi thêm phần tử
    arr.reverse();

    // Thêm số 0 vào cuối mảng cho đến khi đạt kích thước yêu cầu
    while (arr.length < size) {
        arr.push(0);
    }

    // Đảo ngược lại mảng để trở về thứ tự ban đầu
    arr.reverse();
}

// Đưa 2 mảng về cùng một kích thước bằng cách thêm các số 0 vào đầu
function change(a, b) {
    const size = Math.max(a.length, b.length);
    addZero(a, size);
    addZero(b, size);
}

// So sánh hai mảng số nguyên, trả về true nếu a < b
/**
 *Tại sao so sánh từng phần tử lại có thể kết luận được?
Khi so sánh từng phần tử từ trái sang phải (từ phần tử có chỉ số nhỏ nhất đến phần tử có chỉ số lớn nhất), chúng ta đang thực hiện một phép so sánh từ phần tử quan trọng nhất đến phần tử ít quan trọng hơn. Điều này tương tự như cách chúng ta so sánh các số nguyên lớn:

Nếu chữ số đầu tiên khác nhau, chữ số đầu tiên quyết định kết quả so sánh.
Nếu chữ số đầu tiên giống nhau, chúng ta tiếp tục so sánh chữ số thứ hai, và cứ tiếp tục như vậy.
 */
function lessThan(a, b) {
    change(a, b);

    for (let i = 0; i < a.length; ++i) {
        if (a[i] < b[i]) {
            return true;
        } else if (a[i] > b[i]) {
            return false;
        }
    }

    return false;
}

// So sánh hai mảng số nguyên, trả về true nếu a > b
function greaterThan(a, b) {
    change(a, b);

    for (let i = 0; i < a.length; ++i) {
        if (a[i] > b[i]) {
            return true;
        } else if (a[i] < b[i]) {
            return false;
        }
    }

    return false;
}

// So sánh hai mảng số nguyên, trả về true nếu a <= b
function lessThanOrEqual(a, b) {
    change(a, b);

    for (let i = 0; i < a.length; ++i) {
        if (a[i] < b[i]) {
            return true;
        } else if (a[i] > b[i]) {
            return false;
        }
    }

    return true;
}

// So sánh hai mảng số nguyên, trả về true nếu a >= b
function greaterThanOrEqual(a, b) {
    change(a, b);

    for (let i = 0; i < a.length; ++i) {
        if (a[i] > b[i]) {
            return true;
        } else if (a[i] < b[i]) {
            return false;
        }
    }

    return true;
}

// So sánh hai mảng số nguyên, trả về true nếu a == b
function equal(a, b) {
    change(a, b);

    for (let i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) {
            return false;
        }
    }

    return true;
}
