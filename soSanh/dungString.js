// Hàm này đảm bảo rằng hai chuỗi số có độ dài bằng nhau bằng cách thêm các số 0 vào đầu chuỗi ngắn hơn
function equalLength(a, b) {
    // Thêm số 0 vào đầu chuỗi 'a' cho đến khi độ dài của nó bằng với chuỗi 'b'
    while (a.length < b.length) {
        a = '0' + a;
    }
    // Thêm số 0 vào đầu chuỗi 'b' cho đến khi độ dài của nó bằng với chuỗi 'a'
    while (b.length < a.length) {
        b = '0' + b;
    }
    // Trả về hai chuỗi đã được làm cho có độ dài bằng nhau
    return [a, b];
}

// Hàm này so sánh hai chuỗi số lớn
function compare(a, b) {
    // Gọi hàm equalLength để đảm bảo hai chuỗi có độ dài bằng nhau
    [a, b] = equalLength(a, b);
    
    // So sánh hai chuỗi
    if (a < b) {
        return -1; // Trả về -1 nếu 'a' nhỏ hơn 'b'
    }
    if (a > b) {
        return 1; // Trả về 1 nếu 'a' lớn hơn 'b'
    }
    return 0; // Trả về 0 nếu 'a' bằng 'b'
}
