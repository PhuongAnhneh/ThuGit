// Bài 1:
// var luongt5 = {
// Anh:1222000,{
// Duy:2250000,
// Thai:222225455
// }
// a ) sử dụng console.log để in ra số lương của Duy . 
// b ) Sửa lại tiền lương của Thái là 40000000 . 
// c ) Tính tổng tiền lương của Anh , Duy và Thái . 
// d ) Thêm bạn Trường với tiền lương là 4444444
// d ) Sử dụng console.log để in ra kết như sau : Tổng Lương Tháng 4 của Anh , Duy , Thái,Trường  là … 
// (ghi kết quả tại dấu …) . 

var luongt5 = {
    Anh: 1222000,
    Duy: 2250000,
    Thai: 222225455
}
    
// console.log(luongt5.Duy);

luongt5.Thai = 40000000;
// console.log(luongt5);

// console.log(luongt5.Anh + luongt5.Duy + luongt5.Thai);

// Bài 2 :  Cho array sau  : 
// var arr2 =[6,2,’Dương’,”Hải”,5,2, “Huy” ,3,6,”Nấm”,”Hải”] ;
// a ) Truy vấn đến các phần tử có ví trí index (vị trí )là 4 ; 2 ;6 và in chúng ra bằng console.log . 
// b ) Ghi đè cuối cùng ,thành tên của bạn . và truy vấn và in kết quả ra bằng console.log . 
// c ) Ghi đè phần tử có  thứ tự là 2 , thành số tuổi của bạn . và truy vấn và in kết quả ra bằng console.log . 
// d ) truy vấn phần tử cuối cùng và đầu tiên của Array và  sử dụng console.log in ra kết quả dưới dạng sau : 
// “ Phần tử đầu tiên là … và phần tử cuối cùng là … “
//  điền qua sau khi truy vấn vào dấu  …  .
// e ) Đảo vị trí đầu và cuối của arr2 .

var arr02 =[6,2,'Dương','Hải',5,2, 'Huy',3,6,'Nấm','Hải'] ;

// console.log(arr02[4], arr02[2], arr02[6]);

// arr02[arr02.length-1] = 'PA'
// console.log(arr02);

// arr02[2] = 19;
// console.log(arr02);

// console.log('Phan tu dau tien la '+ arr02[0] +' va phan tu cuoi cung la '+ arr02[arr02.length-1]);

a = arr02[0];
arr02[0] = arr02[arr02.length-1];
arr02[arr02.length-1] = a
console.log(arr02);

// Bài 3 : Cho array sau : 
//  var  Arr3=[1,3,6,8,[1,11,12,3],13,15,[4,3,2]]; 
// a ) Hoán đổi giá trị của phần tử đầu và phần tử cuối lại với nhau  .  
// sử dụng console.log in ra kết quả .
// b) Truy vấn phần tử có ví trí ( vị trí index) là 4 có thứ tự là  2 .
// và trị trí cuối cùng và có thứ tự là 2 . 
// Sử dụng console.log để in ra kết quả . 
// c  ) Tính tổng , hiệu ,tích tất cả các giá trị của phần tử có vị trí  là 4 và vị trí cuối của Arr3. 


