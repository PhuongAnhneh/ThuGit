// 1,
// Khai báo số x có giá trị bất kỳ
// Nếu x < 0 thì in ra x là số âm	
// Nếu x = 0 thì in ra x = 0
// Nếu x > 0, và x là số nguyên thì in ra x là số nguyên dương	
// Nếu x > 0, và là số thập phân thì in ra x là số thập phân dương

var x = 5;
if (x < 0) {
    console.log('x la so am');
} else if (x = 0) {
    console.log('x = 0');
} else {
    console.log('x la so nguyen duong');
}

// 3,
// Cho biến password là 1 string bất kỳ
// Nếu password để trống thì in ra ‘password không để trống’
// Nếu password nhỏ hơn 8 ký tự hoặc password dài hơn 16 ký tự thì in ra ‘password k hợp lệ’
// Nếu không bị những lỗi trên thì in ra password hợp lệ 

var password = 'PA2117'
if (password == '') {
    console.log('Password khong de trong');
} else if (password.length < 8 || password.length > 16) {
    console.log('password k hợp lệ');
} else {
    console.log('password hợp lệ');
}

// 4,
// Cho biến button là 1 string và Biến page là 1 số nguyên từ 1 đến 10
// Nếu biến button = ‘next’ thì page tăng 1 đơn vị
// Nếu biến button = ‘prev’ thì page giảm 1 đơn vị
// Nếu button nhận giá trị từ 1-10 thì page nhận giá trị tương tự
// Nếu page = 10 và button = ‘next’ thì page vẫn = 10
// Nếu page = 1 và button = ‘prev’ thì page vẫn = 1

var button = '3';
var page = 5;
if (button == 'next'){
    console.log(++page);
} else if (button == 'prev'){
    console.log(--page);
} else if (button > '1' || button < 10) {
    console.log(page = button);
}




