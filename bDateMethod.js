// Bài 2: var sinhNhat = ‘10/5/2000’
// a, năm nay bao nhiêu tuổi
// b, Ngày sinh nhật tiếp theo vào thời điểm nào?
// c, Mừng thọ 83 tuổi là vào ngày tháng năm nào?

var sinhNhat = '12/5/2000'


var Nam_sinh = new Date(sinhNhat.split('/').reverse().join('-'))
var Nam_nay = new Date()
var tuoi = Nam_nay.getFullYear() - Nam_sinh.getFullYear();
if (Nam_sinh.getMonth() <= Nam_nay.getMonth()) {
    console.log('Tuoi nam nay:', tuoi)
}
if (Nam_sinh.getMonth() > Nam_nay.getMonth()) {
    console.log('Tuoi nam nay:', tuoi-1)
}

var Nam_sau = new Date(new Date().getFullYear()+1 , Nam_sinh.getMonth(), Nam_sinh.getDate())
console.log('Ngày sinh nhật tiếp theo:', Nam_sau);

var Nam_sau = new Date(Nam_sinh.getFullYear()+83 , Nam_sinh.getMonth(), Nam_sinh.getDate())
console.log('Mừng thọ 83 tuổi vào:', Nam_sau);

// Bài 4: Tạo ra ngày 	
// a, Cách hiện tại bao nhiêu năm
// b, hôm đó là thứ mấy
// c, sau 5 ngày thì la thứ mấy

var Ngay = '27/11/2002'

var Nam_sinh = new Date(Ngay.split('/').reverse().join('/'))
var Nam_nay = new Date()
var So_nam = Nam_nay.getFullYear() - Nam_sinh.getFullYear()
console.log('Cách hiện tại:', So_nam +' nam');

var Thu = new Date(Nam_sinh).getDay()
console.log('Hôm đó là thứ:', Thu + 1);

var Thu1 = Nam_sinh
Thu1.setDate(Thu1.getDate() + 5)
console.log('Sau 5 ngày thì la thứ:', Thu1.getDay() + 1);

// Bài 5: 
// Cho var phucBirthday = ‘26-11-1992’
// Cho var cuongBirthday= ‘27-11-1994’
// a,  Đổi định dạng ngày thành ‘1992-11-26’
// b, Quy đổi về cả 2 về object date
// c, So sánh xem phuc hay cuong lớn tuổi hơn
// d, Hỏi sau 100 ngày từ lúc phucBirthday là ngày hôm nào, thứ mấy?
// 	gợi ý: dùng setDate(getDate + 100): tim ngay
// 	dùng hàm getDay: tim thu để tìm ra thứ  biết rằng:
// 	0: chủ nhật
// 	1: thứ 2  ..

var phucBirthday = '26-11-1992'
var cuongBirthday= '27-11-1994'

var Nam_sinh = new Date(phucBirthday.split('-').reverse().join('-'))
var Nam_sinh1 = new Date(cuongBirthday.split('-').reverse().join('-'))
console.log(Nam_sinh);
console.log(Nam_sinh1);

phuc = Date.parse(Nam_sinh)
cuong = Date.parse(Nam_sinh1)
if (phuc > cuong) {
    console.log('Phuc it tuoi hon Cuong');
} 
else if (phuc < cuong) {
    console.log('Phuc nhieu tuoi hon Cuong');
} else {
    console.log('Phuc bang tuoi cuong');
}

var Thu = Nam_sinh
Thu.setDate(Thu.getDate() + 100)
console.log('Sau 100 ngày từ lúc phucBirthday là thứ:', Thu.getDay() + 1);









