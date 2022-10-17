// 2, 
// cho object user = {
// 	ten: ‘tung’,
// 	tuoi: 20
// }

// a, hãy in ra tên và tuổi của user
// b, hãy thêm cho user họ là ‘nguyễn’
// c, hãy thay đổi tuổi thành 30
obj1 = {
    ten: 'tung',
    tuoi: 20
}
console.log(obj1);

obj1.ho='nguyen';
console.log(obj1);

obj1.tuoi=30;
console.log(obj1);

// 3,
// cho object user = {
// 	ten: ‘tung’,
// 	tuoi: 20
// 	banBe:[‘vy’,’tung’,’tuan’]
// 	diaChi:{
// tinh: ‘HCM’,
// quan:’Q1’
// }
// }
// a, in ra array bạn bè
// b, người bạn cuối cùng tên là gì
// c, in ra object dia chi của user
// d, hãy tạo string giới thiệu bản thân theo mẫu sau
// ‘tên tôi là …, tôi .. tuổi, tôi ở … tỉnh …’
// e, hãy thêm đường = ‘nguyễn tuân’ vào địa chỉ của user
// f, hãy thêm ‘thai’ vào danh sách bạn của user

obj2 = {
	ten: 'tung',
	tuoi: 20, 
	BanBe: ['vy','tung','tuan'],
	DiaChi:{
        tinh:'HCM',
        quan:'Q1'
    }
}
console.log(obj2.BanBe);

console.log(obj2.BanBe[obj2.BanBe.length-1]);
console.log(obj2.BanBe[2]);

console.log(obj2.DiaChi);

console.log('Ten toi la '+ obj2.ten +', Toi '+ obj2.tuoi +' tuoi'+ ',' +'Toi o '+ obj2.DiaChi.quan +' tinh '+ obj2.DiaChi.tinh);

obj2.DiaChi.duong = 'Nguyen Tuan'
console.log(obj2);
obj2.BanBe[obj2.BanBe.length] = 'thai'
console.log(obj2);

// 4,
// var age = 20,
// var name = ‘tung’
// hãy tạo ra string greet theo mẫu 

// `
// xin chao, tôi là … , tôi …. tuổi.
// tên bạn là gì?
// `

var age1 = 20;
var name1 = 'tung'
console.log('Xin chao, ten toi la '+ name1 +', toi '+ age1 +' tuoi');

// 5, 
// var hocSinh = {
//   ten: 'thai',
//   tuoi: 20
// }
 
// var key = ['soNha', 'duong', 'quan', 'thanhPho']
// var value = [15, 'Giải Phóng', 'Hai Ba Trưng', 'Hà Nội']

// hãy lấy các key ghép với value ở vị trí tương ứng để thêm địa chỉ cho hocSinh thành như sau
// {
//   ten: 'thai',
//   tuoi: 20,
//   diaChi: {
//     soNha: 15,
//     duong: 'Giải Phóng',
//     quan: 'Hai Ba Trưng',
//     thanhPho: 'Hà Nội'
//   }
// }

var HocSinh = {
    ten: 'thai',
    tuoi: 20
  }
HocSinh.DiaChi = {
    SoNha: 15,
    duong: 'Giải Phóng',
    quan: 'Hai Ba Trưng',
    ThanhPho: 'Hà Nội'
}
console.log(HocSinh);

// 6, 
// cho array = [3,5,4,9,8,1,10]
// a, hãy tính tổng của phần tử đầu và phần tử cuối 3 + 10
// b, hãy thêm số 20 vào cuối array trên và tính lại tổng của phần tử đầu và phần tử cuối 
// 3 + 20

array1 = [3,5,4,9,8,1,10]
console.log(array1[0] + array1[array1.length-1]);

array1[array1.length] = 20;
console.log(array1[0] + array1[array1.length-1]);

// 7, cho array2 = [1,6,8,7,10 , [6,8,7,4,3,5] , 3]
// a, tính tổng của phần tử đầu và phần tử cuối trong array2 và array con 
//  1 + 3 + 6 +5
// b, hãy thêm số 10 vào cuối array con và tính lại tổng trên

array2 = [1,6,8,7,10 , [6,8,7,4,3,5] , 3]
console.log(array2[0] + array2[array2.length-1] + array2[5][0] + array2[5][ array2[5].length-1]);

array2[5][array2[5].length] = 10
console.log(array2[0] + array2[array2.length-1] + array2[5][0] + array2[5][ array2[5].length-1]);

// Bài 1 : 
// Cho object sau : 
// var Car ={
// name:”audi”,
// color:”Black”,
// age:1
// }
// a ) Sử dụng console.log để hiện tên , màu , tuổi  của xe 
// b ) Đổi tên xe thành “lamborghini “ ,màu “ đỏ “ , tuổi = 0 . 
// c ) Thêm key “namSx” vào object xe và gán một giá trị cụ thể  . 
// d ) chạy console.log để xem lại kết quả cuối cùng thu được .

var Car ={
    name1:'Audi',
    color1:'Black',
    age1:1
    }

console.log(Car);

Car.name1 = 'Lamborghini';
Car.color1 = 'Red',
Car.age1 = 0
console.log(Car);

Car.NamSx = 1980
console.log(Car);

// Bài 2 :  
// Cho object sau  : 
// var hocVien = {
// ten:”Văn Anh”,
// tuoi:23,
// diachi:”Hà Nội”
// }
// Yêu cầu 
// a )Thêm vào Object hocVien , họ là “ Đào” . 
// b ) Sử dụng console.log để in ra chuỗi sau : “Tôi tên Đào Văn Anh năm nay 23 tuổi địa chỉ Hà Nội “ 
// c ) Sửa họ ,ten , tuoi , diachi của Object hocVien thành các thông tin của bạn . 
// d ) Tương tự như câu b ,  sử dụng console.log in ra các thông tin của bạn.
// e )Xóa key diachi và thay bằng noiSinh và điền thông tin của bạn vào .
// f ) Sử dụng console.log để in ra cuối cùng  . 

var HocVien = {
    ten:'Văn Anh',
    tuoi:23,
    DiaChi:'Hà Nội'
    }

HocVien.ho = 'Dao'
console.log(HocVien);

console.log('Toi ten la '+ HocVien.ten +', nam nay '+ HocVien.tuoi +' tuoi, dia chi '+ HocVien.DiaChi);

HocVien.ten = 'Phuong Anh'
HocVien.tuoi = '19'
console.log(HocVien);

delete HocVien.DiaChi;
HocVien.NoiSinh = 'Ha Nam'
console.log(HocVien);

// Bài 3 cho Object sau : 
// var luongThang4 = {
// Anh:10000,
// Duy:20000,
// Thai:22222
// }
// a ) sử dụng console.log để in ra số lương của Duy . 
// b ) Sửa lại tiền lương của Thái là 40000 . 
// c ) Tính tổng tiền lương của Anh , Duy và Thái . 
// d ) Sử dụng console.log để in ra kết như sau : Tổng Lương Tháng 4 của Anh , Duy , Thái là … (ghi kết quả tại dấu …) .

var LuongThang4 = {
    Anh:10000,
    Duy:20000,
    Thai:22222
    }

console.log(LuongThang4.Duy);

LuongThang4.Thai = 40000
console.log(LuongThang4);

console.log(LuongThang4.Anh+LuongThang4.Duy+LuongThang4.Thai);

// Bai 1 : 
// Cho array sau  : 
// var arr =[1,2,’Nam’,”Hải”,5,8, “Huy” ,3,6,”Nấm”] ;
// a ) Truy vấn đến các phần tử có ví trí index (vị trí )là 0 ; 3 ;5 và in chúng ra bằng console.log . 
// b ) Ghi đè phần tử có ví trí là 2 ,thành tên của bạn . và truy vấn và in kết quả ra bằng console.log . 
// c ) Ghi đè phần tử có  thứ tự là 2 , thành số 100 . và truy vấn và in kết quả ra bằng console.log . 
// d ) truy vấn phần tử cuối cùng và đầu tiên của Array và  sử dụng console.log in ra kết quả dưới dạng sau : 
// “ Phần tử đầu tiên là … và phần tử cuối cùng là … “
//  điền qua sau khi truy vấn vào dấu  …  .

var arr =[1,2,'Nam','Hải',5,8, 'Huy',3,6,'Nấm']

console.log(arr[0], arr[3], arr[5]);

arr[2] ='Phuong Anh'
console.log(arr);

arr[2] =100
console.log(arr);

console.log('Phan tu dau tien la '+ arr[0] +' va phan tu cuoi cung la '+ arr[arr.length-1]);

// Bài 2 : 
// Cho Array sau : 
// 
// a ) sử dụng console.log in ra số lượng phần tử có trong Array
// b ) Truy vấn phần tử đầu và phần tử cuối của Array trên và  sử dụng console.log in ra kết quả . 
// c ) Hoán đổi giá trị của phần tử đầu và phần tử cuối lại với nhau  .  
// sử dụng console.log in ra kết quả . 
// d) Chỉnh sửa( ghi đè )  phần tử có  thứ tự là 4 thành “ Thái “ .   
// sử dụng console.log in ra kết quả .


var arr2= ['Lâm','Hải', 'Huy', 'Anh', 'Duy'] ;   

console.log(arr2.length);

console.log(arr2[0],arr2[arr2.length-1]);

a = arr2[0]
a = arr2[arr2.length-1]
console.log(arr2);

arr2[4] = 'Thai'
console.log(arr2);

// Bài 3 : 
// Cho array sau : 
//  var  Arr3=[1,3,5,7,[12,11,10],13,9]; 
// a ) Hoán đổi giá trị của phần tử đầu và phần tử cuối lại với nhau  .  
// sử dụng console.log in ra kết quả .
// b) Truy vấn phần tử có ví trí ( vị trí index) là 4 có thứ tự là  2 .
// Sử dụng console.log để in ra kết quả . 
// c  ) Tính tổng tất cả các giá trị của phần tử có vị trí  là 4 . 
// Sử dụng console.log để in ra kết quả . 
// d ) tính Tổng phần tử đầu và phần tử cuối của Arr3 .
// Sử dụng console.log để in ra kết quả .

var  arr3=[1,3,5,7,[12,11,10],13,9]; 

a = arr3[0]
arr3[0] = arr3[arr3.length-1]
arr3[arr3.length-1] = a
console.log(arr3);

console.log(arr3[4][2]);

console.log(arr3[4][0]+arr3[4][1]+arr3[4][2]);

console.log(arr3[0] + arr3[arr3.length-1]);

// Bài 1 cho Object sau : 
// var cat = {
// color:’yelow’,
// weight:7,
// age:2
// }
// a ) sử dụng console.log để in ra cân nặng của con mèo  . 
// b ) Sửa lại cần nặng của thành 4 . 
// c ) thêm key là adress  vào object cat với giá trị là hanoi . 

var cat = {
    color:'yelow',
    weight:7,
    age:2
    }

console.log(cat.weight);

cat.weight = 4,
console.log(cat.weight);

cat.address = 'hanoi'
console.log(cat);

// Bài 2 :
// Khai báo biến ten   và gán  giá trị là tên của bạn . 
// khai báo biến tuoi  và gán giá trị bằng với tuổi của bạn  . 
// Khai báo biến diaChi và gán giá trị là địa chỉ của bạn  .  
// a ) với các biến đã tạo ở trên tạo một object thongTin với key và value tương ứng . ( lưu ý không tự điền vào ) . Sử dụng console.log để in ra kết quả . 
// b ) thêm key là nguoiYeu vào object ở câu 2  và thêm giá trị vào (Nếu đã có người yêu thì true ,ngược lại là false )
// c ) Tạo object thongTinGiaDinh   với 
// key mom có giá trị là tên mẹ của bạn  . 
// key dad có giá trị là tên bố  của bạn  .  
// Ghi đè object thongTinGiaDinh vào Object thongTin và in ra kết quả . 
// d ) Truy vấn giá trị của key mom trong object thongTin . 
// ( console.log để in ra kết quả )

var ten = 'PA';
var tuoi = 19;
var DiaChi = 'HN'
var ThongTin = {
    ten: ten,
    tuoi: tuoi,
    DiaChi:DiaChi
}
console.log(ThongTin);

ThongTin.NguoiYeu = 'PA';
console.log(ThongTin);
if(ThongTin.NguoiYeu != '' ) {
    console.log('true');
}
else {
    console.log('false');
}

ThongTin.thongTinGiaDinh = {
    mom: 'A',
    dad: 'B',
}
console.log(ThongTin);

console.log(ThongTin.thongTinGiaDinh.mom);

// Bài 3: Cho array sau : 
//  var  arr03=[“Hoa”,12,[“Hùng”, 1,”Huy”,5],21,32,”Hải”]; 
// a ) Hoán đổi giá trị của phần tử đầu và phần tử cuối lại với nhau  .  
// sử dụng console.log in ra kết quả .
// b) Truy vấn phần tử có ví trí ( vị trí index) là 2 có thứ tự là  2 .
// Sử dụng console.log để in ra kết quả . 
// c ) in ra vị trí index của phần tử có giá trị là  32 . 
// d ) in ra số lượng phần tử của array trên  .

 var  arr03=['Hoa',12,['Hùng', 1,'Huy',5],21,32,'Hải']; 

 a = arr03[0];
 arr03[0] = arr03[arr03.length-1];
 arr03[arr03.length-1] = a;
 console.log(arr03);

 console.log(arr03[2][2]);

 for (var i = 0; i < arr03.length; i++) {
    if (arr03[i] == '32') {
        console.log(i);
    }
 }

 console.log(arr03.length);

// Bài 4: Cho array sau : 
// var arr004 = [3,5,7,8,9,[6,9,12],10,12];
// a ) Truy vấn phần tử đầu và phần tử cuối của array con của arr004.
// b ) Tính tổng phần tử đầu và cuối arr004 và array con . 
// 3 + 12 + 6 +12
// c ) thêm 8 vào cuối arr004 rồi tính lại câu b . 

var arr04 = [3,5,7,8,9,[6,9,12],10,12];

console.log(arr04[0] + arr04[arr04.length-1]);

console.log(arr04[0] + arr04[arr04.length-1] + arr04[5][0] + arr04[5][arr04[5].length-1]);

arr04[arr04.length] = 8;
console.log(arr04[0] + arr04[arr04.length-1] + arr04[5][0] + arr04[5][arr04[5].length-1]);







    

    





  


