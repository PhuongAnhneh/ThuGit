// Bài 0: Thực hiện các phép toán sau:
// (8 + "10" + "11" - "12" + "13" + "14" + 10);
// ("1" + "2" + 3 - 4  + 5 * "6" + "7" + "8" + "9" + 10 * 0)

console.log(8+10+11);

// Bài 4 : 
// Khai báo x ;y lần lượt là chiều dài và chiều rộng  của hình chữ nhật A 
// tính chu vi của hình Chữ nhật A
// Tính diện tích của hình chữ nhật A
// Kiểm tra xem A có phải hình vuông không ?

var x = 5;
var y = 5;
console.log('Chu vi cua hinh chu nhat:', (x + y) * 2);
console.log('Dien tich hinh chu nhat:', x * y);

if ( x == y) {
    console.log('A la hinh vuong');
} else {
    console.log('A khong la hinh vuong');
}

// Bài 6: Khai báo biến a ; b; c lần lượt là  chiều cao ,chiều rộng ,chiều dài của một hình hộp chữ nhật . 
// a) Tính thể tích V của hình hộp chữ nhật trên (V=a*b*c )  
// b) Kiểm tra xem Hình hộp chữ nhật trên có phải la hình lập phương hay không . Nếu có thì tính thể tích của hình Lập phương trên  . 
// c) Tinh đường chéo D của hình hộp chữ nhật trên. 
// d) tính chu vi P của hình hộp chữ nhật  
// e) Tính diện tích xung quanh của hinh hộp chữ nhật trên. 
// f) Tính diện tích toàn phần của hình hộp chữ nhật  


var a = 3;
var b = 4;
var c = 3;

console.log('The tich cua hinh chu nhat:', a * b * c);

if (a == b && b == c) {
    console.log('Day la hinh lap phuong', a * b * c);
} else {
    console.log('Khong la hinh chu nhat');
}

console.log('Duong cheo D cua hinh chu nhat:', Math.sqrt((a**2) + (b**2) + (c**2)));

console.log('chu vi P của hình hộp chữ nhật:', 2 * (b + c));

console.log('diện tích xung quanh của hinh hộp chữ nhật trên:', 2 * a * (b + c));

console.log('diện tích toàn phần của hình hộp chữ nhật:', 2 * a * (b + c) + 2 * b * c);
