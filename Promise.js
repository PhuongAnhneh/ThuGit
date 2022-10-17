// Bài 2 :  
// Áp dụng setIterval  , tạo một function có tác dụng giống với đồng hồ đếm ngược.
// Đầu vào số giây cần đếm ngược  .
// nếu Người dùng cố tình nhập vào một số âm thì  in ra “ Hãy nhập số > 0 “ 
// Nếu số giây đã đếm hết (tức số đếm hiện tại <= 0) thì hiển thị thông báo: Bạn đã hết giờ làm bài.
//  Nếu số giây còn thì hiển thị số giây còn lại

// function count(second) {
//     if (second < 0) {
//         console.log('Hay nhap lai');
//     } else {
//         var time = setInterval(function(){
//             console.log(second);
//             second--
//             if (second == 0) {
//                 clearInterval(time)
//                 console.log(second);
//                 console.log('Het gio');
//             }
//         }, 1000)
//     }
// }
// count(10)

// Bài 3 :  
// promise1 xử lý tác vụ 3s  cho ra kết quả là 2
// promise2 xử lý tác vụ 3s và CẦN data của tác vụ 1 trả ra kết quả giá trị x3 kết quả tác vụ 1 (=6)
// promis3 CẦN data của tác vụ 2 để xác định kết quả tác vụ 2 có > 10 hay không
// in ra màn hình true hoặc false. 

// var promise1 = new Promise(function(resolve,reject) {
    //  setTimeout(function() {
    //      resolve(2)
    //  }, 300)
// })
// .then(function(data) {
//     return new Promise(function(res,rej) {
//         res(data * 3)
//     })
// })
// .then(function(data1) {
//     return new Promise(function(res,rej) {
//         if(data1 > 10) {
//             res(true)
//         } else {
//             rej(false)
//         }
//     })
//     .then(function(data2) {
//         console.log(data2);
//     })
//     .catch(function(data3) {
//         console.log(data3);
//     })
// })

// B4: tạo 1 promise1 với tác vụ resovle sau 3 giây (dùng settimeout)
// 	tạo 1 promise2 tác vụ resolve sau 2 giây
// 	tạo 1 promise3 tác vụ reject sau 2 giây
// dùng .all để thực hiện song song tác vụ tiết kiệm time.

// var promise1 = new Promise(function(resolve,reject) {
//     setTimeout(function() {
//         resolve(5)
//     }, 300)
// })
// var promise2 = new Promise(function(resolve,reject) {
//     setTimeout(function() {
//         resolve(6)
//     }, 300)
// })
// var promise3 = new Promise(function(resolve,reject) {
//     setTimeout(function() {
//         resolve(7)
//     }, 300)
// })
// Promise.all([promise1, promise2, promise3])
// .then(function(data) {
//     console.log(...data);
// })

// B6: áp dụng hợp lý, promise1 xử lý 2s retrun 3. promise2 xử lý 5s return 7
// 	Bài toán Cần data của 2 tác vụ trên, biết prmise1 vs promise2 không phụ thuộc nhau. 
// Viết chương trình sao cho kết quả trả về 3+7=10 trong thời gian ngắn nhất 

// var promise1 = new Promise(function(resolve,reject) {
//     setTimeout(function() {
//         resolve(3)
//     }, 3000)
// })
// var promise2 = new Promise(function(resolve,reject) {
//     setTimeout(function() {
//         resolve(7)
//     }, 5000)
// })
// Promise.all([promise1, promise2])
// .then(function(data1) {
//     console.log(data1[0] + data1[1]);
// })

// B7:	
// cho tài khoản khách số dư 10 tr thực hiện mua hàng 3 tr và nhận hoàn tiền 10%
// tài khoản shop dư 100tr
// let khachHang = 10
// let shop = 100
// viết promise1 kiểm tra số dư trong 1s và trả về true nếu số dư của khách đủ để thanh toán / false nếu khách không đủ số dư
// viết promise2 để chuyển tiền từ khách sang shop ( khách - 3*10% , shop + 3*10%) và trả về số dư của 2 bên
// viết promise3 để hoàn tiền 10% sau khi đã thanh toán ở promise2 và trả về số dư của 2 bên
// (khách + 10% * 3 ,  shop - 3 * 10%)

// var khachHang = 10
// var shop = 100
// var promise1 = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         if (khachHang > 3) {
//             resolve('true')
//         } else {
//             reject('false')
//         }
//     }, 100)
// })
// .then(function(data) {
//     console.log(data);
//     return new Promise(function(res,rej) {
//         res ([khachHang -= 3, shop += 3]) 
//     })
// })
// .then(function(data1) {
//     console.log(data1);
//     return new Promise(function(res, rej) {
//         res ([khachHang + 3 * 10 / 100, shop - 3 * 10 / 100])
//     })
// })
// .then(function(data2) {
//     console.log(data2);
// })

// Bài 8  :  
// c1 viết promise in ra tất cả các sản phẩm của cửa hàng nếu không ra thì trả về (false) .
// c2: viết promise in ra tất cả các sản phẩm theo từng loại A,B,C .
// c3 viết promise in ra tất cả các sản phẩm có giá >=15000 .
// c4: Tính tiền theo biên lai .Nếu số lượng trong cửa hàng không đủ thì in ra “ cửa hàng đủ sản phẩm “ 

var cuaHang = [
    {
        ten: 'Bia',
        loai: 'A',
        gia:10000,
        soLuong:200
     },
    {
        ten: 'Rượu',
        loai: 'A',
        gia:20000,
        soLuong:50
     },
    {
        ten: 'Coca',
        loai: 'A',
        gia:15000,
        soLuong:100
     },
    {
        ten: 'Bia Tươi',
        loai: 'B',
        gia:12000,
        soLuong:55
     },
     {
        ten: 'Rượu Vang',
        loai: 'B',
        gia:50000,
        soLuong:250
     },
     {
        ten: 'Bánh Đa',
        loai: 'C',
        gia:5000,
        soLuong:300
     },
     {
        ten: 'Lạc giang',
        loai: 'C',
        gia:12000,
        soLuong:200
     },
     {
        ten: 'Lạc luộc',
        loai: 'B',
        gia:14000,
        soLuong:0
     }, 
    ]
 
// let bienLai = [{
// 	ten:'Lạc luộc',
// 	soLuong:20
// },
// {
// 	ten:'Bia',
// 	soLuong:10
// },
// {
// 	ten:'Bánh Đa',
// 	soLuong:20
// }]

// C1
// var promise1 = new Promise(function(resolve,reject) {
//     var Ten = cuaHang.map(function(value) {
//         return value.ten
//     })
//     resolve(Ten);
// })
// .then(function(data) {
//     console.log(data);
// })

// C2
// var promise2 = new Promise(function(resolve,reject) {
//     var Loai = cuaHang.filter(function(value) {
//         if(value.loai == 'A') {
//             return value
//         }
//     })
//     resolve(Loai)
// })
// .then(function(data1) {
//     console.log(data1);
// })

// function Loai(value) {
//     return new Promise(function(res, rej) {
//         setTimeout(function() {
//             var loai = cuaHang.filter(function(value1) {
//                 if(value1.loai == value) {
//                     return value1 
//                 }
//             })
//             res(loai)
//         }, 1000)
//     })
// }
// Loai('C')
// .then(function(data) {
//     console.log(data);
// })

// C3

// var promise3 = new Promise(function(resolve,reject) {
//    var Gia = cuaHang.filter(function(value) {
//      return value.gia > 15000
//    })
//    resolve(Gia)
// })
// .then(function(data) {
//    console.log(data);
// })

// C4

// for (let i = 0; i < cuaHang.length; i++) {
//    for (let j = 0; j < bienLai.length; j++) {
//       if (cuaHang[i].ten == bienLai[j].ten) {
//          if (cuaHang[i].soLuong < bienLai[j].soLuong) {
//             bienLai[j].sP ='Khong co san pham'
//          } else {
//             bienLai[j].tinhTien = bienLai[j].soLuong * cuaHang[i].gia
//          }
//       }
//    }
// }
// console.log(bienLai);

// Bài 9 : 
// a ) Viết promise in  các trái cây có nơi sản xuất tại VietNam . 
// b ) Viết promise in ra  các trái cây có số lượng (sl) > = 150 . 
// c ) Áp dụng promise Viết function lọc sản phẩm hoa quả  theo tên  .  
// d) Áp dụng promise Viết function lọc sản phẩm hoa quả  theo Nước .  
// e ) Áp dụng promise  viết function tính tổng số lượng theo tên Hoa quả , và theo tên nước . 

var  hoaQua = [
	{ten:'Xoài',sx:'China',sl:'100'},
	{ten:'Xoài',sx:'VietNam',sl:'130'},
	{ten:'Xoài',sx:'ThaiLan',sl:'100'},
	{ten:'Cam',sx:'China',sl:'200'},
   {ten:'Cam',sx:'ThaiLan',sl:'150'},
   {ten:'Nho',sx:'VietNam',sl:'120'},
   {ten:'Xoài',sx:'ThaiLan',sl:'100'},
   ]

   // C1
// var promise1 = new Promise(function(resolve,reject) {
//    var Ten = hoaQua.filter(function(value) {
//       return value.sx == 'VietNam'
//    })
//    resolve(Ten)
// })
// .then(function(data) {
//    console.log(data);
// })

   // C2
// var promise2 = new Promise(function(resolve,reject) {
//    var soLuong = hoaQua.filter(function(value) {
//       return value.sl >= 150
//    })
//    resolve(soLuong)
// })
// .then(function(data) {
//    console.log(data);
// })

   // C3
// function Ten(name) {
//    return new Promise(function(resolve, reject) {
//        var ten = hoaQua.filter(function(value) {
//          if (name == value.ten) {
//             return value
//          }
//        })
//        resolve(ten)
//    })
// }
// Ten('Xoài')
// .then(function(data) {
//    // console.log(data);
//    // C5
//    var sum = 0
//    for (let i = 0; i < data.length; i++) {
//       sum += Number(data[i].sl) 
//    }
//    console.log(sum);
// })

   // C4
// function Nuoc(country) {
//    return new Promise(function(resolve,reject) {
//       var nuoc = hoaQua.filter(function(value) {
//          if (country == value.sx)
//          return value
//       })
//       resolve(nuoc)
//    })
// }
// Nuoc('VietNam')
// .then(function(data) {
//    // console.log(data);
      // C5 y' 2
//    var sum = 0
//    for (let i = 0; i < data.length; i++) {
//       sum += Number(data[i].sl)
//    }
//    console.log(sum);
// })

// Bài 10 : ÁP DỤNG PROMISE .
// Hãy tính liệu người mua hàng có đạt đủ điều kiện nhận ưu đãi hay không! Điều kiện để tính khách có nhận được
// ưu đãi hay không điều kiện để nhận ưu đãi là khách phải đạt được đủ điểm định mức ứng với mỗi loại được 
// khai báo ở array phanLoai và phải có số lượng ít nhất bằng với số lượng của mỗi loại đặt ra.
// Công thức tính dinhMuc = trongLuong*heSo 

var danhSach=[
    {ten: 'huy', phanLoai: 'A', giohang:{soLuong: 12, trongLuong: 12}},
    {ten: 'lam', phanLoai:'B', giohang:{soLuong: 8, trongLuong: 7}},
    {ten: 'tung', phanLoai:'C', giohang:{soLuong: 10, trongLuong: 8}},
    {ten: 'hai', phanLoai:'A', giohang:{soLuong: 8, trongLuong: 20}},
    {ten: 'vinh', phanLoai:'A', giohang:{soLuong: 7, trongLuong: 9}},
    {ten: 'nam', phanLoai:'C', giohang:{soLuong: 5, trongLuong: 8}},
    {ten: 'khanh', phanLoai:'B', giohang:{soLuong: 5, trongLuong: 10}},
    ]

var phanLoai = [
    {Loai: 'A', heSo: 2, dinhMuc:24, soLuong:10},
    {Loai: 'B', heSo: 3, dinhMuc:22, soLuong:7},
    {Loai: 'C', heSo: 1, dinhMuc:10, soLuong:9},
]

// var promise = new Promise(function(resolve,reject) {
//    for (let i = 0; i < danhSach.length; i++) {
//       for (let j = 0; j < phanLoai.length; j++) {
//          if (danhSach[i].phanLoai == phanLoai[j].Loai) {
//             if (danhSach[i].soLuong >= phanLoai[j].soLuong && danhSach[i].soLuong * phanLoai[j].heSo >= phanLoai[j].dinhMuc) {
//                return danhSach[i]
//             }
//          }
//       }
//       resolve(danhSach[i])
//    }
// })
// .then(function(data) {
//    console.log(data);
// })

// Bài 11 : ÁP DỤNG PROMISE
// Hãy in ra danh sách các khách hàng có khả năng đăng ký thẻ VIP với điều kiện điểm tích lũy lớn hơn 100 
// và dịch vụ đăng ký có giá trị lớn hơn 180
// Hãy in ra danh sách khách hàng theo dịch vụ mà từng người đăng ký
// Hãy tính giá tiền mà mỗi người thực chất cần phải trả với hóa đơn của mỗi người = giá trị tại bảng biên lai
// nhân với khuyến mãi ứng với gói dịch vụ mà mỗi người đăng ký yêu cầu in ra dưới dạng là 1 array mới

var khachHang = [
  { ten: "an", gioiTinh: "nam", diemTichLuy: 125, dichVuDangKy: "A" },
  { ten: "binh", gioiTinh: "nam", diemTichLuy: 30, dichVuDangKy: "B" },
  { ten: "hoang", gioiTinh: "nam", diemTichLuy: 51, dichVuDangKy: "C" },
  { ten: "van", gioiTinh: "nu", diemTichLuy: 75, dichVuDangKy: "D" },
  { ten: "thinh", gioiTinh: "nam", diemTichLuy: 25, dichVuDangKy: "D" },
  { ten: "lam", gioiTinh: "nam", diemTichLuy: 100, dichVuDangKy: "C" },
  { ten: "diep", gioiTinh: "nu", diemTichLuy: 162, dichVuDangKy: "B" },
  { ten: "huong", gioiTinh: "nu", diemTichLuy: 71, dichVuDangKy: "B" },
];

var dichVu = [
  { ten: "A", khuyenMai: 0.2, giaTri: 250 },
  { ten: "B", khuyenMai: 0.18, giaTri: 210 },
  { ten: "C", khuyenMai: 0.15, giaTri: 200 },
  { ten: "D", khuyenMai: 0.12, giaTri: 180 },
];

var bienLai = [
  { ten: "an", giaTri: 300 },
  { ten: "binh", giaTri: 180 },
  { ten: "hoang", giaTri: 170 },
  { ten: "van", giaTri: 100 },
  { ten: "lam", giaTri: 200 },
  { ten: "thinh", giaTri: 210 },
  { ten: "diep", giaTri: 100 },
 { ten: "huong", giaTri: 100 },
];

// var promise1 = new Promise(function(resolve,reject) {
//    var danhSach = []
//    for (let i = 0; i < khachHang.length; i++) {
//       for (let j = 0; j < dichVu.length; j++) {
//          if (khachHang[i].diemTichLuy >= 100) {
//             if (khachHang[i].dichVuDangKy == dichVu[j].ten) {
//                if (dichVu[j].giaTri > 180) {
//                   danhSach.push(khachHang[i])
//                }
//             }
//          }
//       }
//    }
//    resolve(danhSach)
// })
// .then(function(data) {
//    console.log(data);
// })

// function Ten(name) {
//    return new Promise(function(resolve,reject) {
//       var ten = khachHang.filter(function(value) {
//          return name == value.dichVuDangKy
//       })
//       resolve(ten)
//    })
// }
// Ten('B')
// .then(function(data) {
//    console.log(data);
// })

var promise3 = new Promise(function(resolve,reject) {
   for (let i = 0; i < khachHang.length; i++) {
      for (let j = 0; j < dichVu.length; j++) {
         for (let k = 0; k < bienLai.length; k++) {
            if (khachHang[i].dichVuDangKy == dichVu[j].ten && khachHang[i].ten == bienLai[k].ten) {
               khachHang[i].tinhTien = dichVu[j].khuyenMai * bienLai[k].giaTri
            }
         }
      }
      resolve(khachHang)
   }
})
.then(function(data) {
   console.log(data);
})