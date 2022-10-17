//Bai 1: PT bac 2
// a * x**2 + b * x + c = 0

var a = 1;
var b = 10;
var c = 1;
var delta = b**2 - 4*a*c;
if (delta == 0) {
    x1 = x2 = -b / (2*a)
    console.log('Phuong trinh co nghiem kep: '+ x1, x2);
} else if (delta > 0) {
    x1 = (-b + Math.sqrt(delta)) / (2*a)
    x2 = (-b - Math.sqrt(delta)) / (2*a)
    console.log('Phuong trinh co 2 nghiem phan biet: '+ x1, x2);
} else {
    console.log('Phuong trinh vo nghiem');
}

// Bai 2: SoDT
a='';
var SoDT = [0,3,3,9,8,3,1,7,0,1]
for(var i = 0; i < SoDT.length; i++) {
    a += SoDT[i];
}
var SDT = (SoDT == '') ? 'Khong de trong'
        : (SoDT < 10 || SoDT > 10 ) ? 'SDT khong hop le'
        : a 
console.log(SDT);

// Bai 3: SanPham
var SP = 27;
if (SP > 1 && SP < 20) {
    console.log('giá  10000/ sản phẩm');
} else if (SP > 20 && SP < 50) {
    console.log('giá là 8000/ sản phẩm');
} else if (SP > 50 && SP < 100) {
    console.log('giá là 7000/ sản phẩm ');
} else if (SP >= 100) {
    console.log('giá là 6000/ sản phẩm ');
} else {
    console.log('Khong hop le. Nhap lai!');
}

// Bài 4: Cho arr4  = [1,2,5,10,3,7,4,8,9,25];
// a ) In ra các số chia hết cho 5 . 
// b ) In ra các số chẵn  và số lẻ trong arr4 
// c ) in ra các số .>  9 trong arr4 

var arr4  = [1,2,5,10,3,7,4,8,9,26];
b = '';
c = '';
d ='';
for (var i = 0; i < arr4.length; i++) {
    if (arr4[i] % 5 == 0) {
        b += arr4[i] + ' ';
    }
    else if (arr4[i] % 2 == 0) {
        c += arr4[i] + ' ';
    }
    else if (arr4[i] % 2 != 0) {
        d += arr4[i] + ' ';
    }
    if (arr4[i] > 9){
        console.log(arr4[i]);
    }
} 
console.log('So chia het cho 5 la: ', b);
console.log('So chan la: ', c);
console.log('So le la: ', d);

// Bài 5: Khai báo một biến tienLuong  với giá trị là số lương của bạn mong muốn . 
// Tính số tiền lương thực lãnh của bạn . Biết rằng : 
// Lương thực lãnh  = tienLuong - thuế .
// và : 
// 30% thuế thu nhập nếu lương là 25 triệu. 
// 15% thuế thu nhập nếu lương từ 7 đến 25 triệu.
// 7% thuế thu nhập nếu lương dưới 7 triệu.

var Salary = 10
if (Salary < 7) {
    console.log('Luong thuc lanh:',Salary - ((Salary * 7) / 100));
} else if (Salary > 7 && Salary < 25) {
    console.log('Luong thuc lanh:',Salary - ((Salary * 15) / 100));
} else if (Salary == 25) {
    console.log('Luong thuc lanh:',Salary - ((Salary * 30) / 100));
} else {
    console.log('Luong qua cao');
}

// Bài 1: ÁP dụng vòng lặp while In ra các số lẻ , nguyên dương  > 9 và < = 25 . 

f = '';
i=10;
while (i > 9 && i <= 25) {
    if (i % 2 != 0) {
        f += i+ ' ';
    }
    i = i + 1;
}
console.log('Cac so le la: ', f);

// Bài 2  :  Áp dụng vòng lặp while 
// Cho arr1 = [1,2,4,6,3,7,4,8,9]
// a ) Tính tổng các phần tử trong arr1
// b ) Tính tích các phần tử trong arr1 
// c ) Tính tổng  và  tích các số chẵn trong arr1 
// d ) Đếm xem có bao nhiêu số chẵn và số lẻ trong Arr1 

var arr1 = [1,2,4,6,3,7,4,8,9];
var i = 0;
var sum = 0;
var multiple = 1;
var sum1 = 0;
var multiple1 = 1;
var countC = 0;
var countL = 0;
while ( i < 9) {
    sum += arr1[i] ;
    multiple *= arr1[i];
    if (arr1[i] % 2 == 0) {
        sum1 += arr1[i];
        multiple1 *= arr1[i];
        countC += 1;
    }
    else {
        countL += 1;
    }
    i += 1;
    
}
console.log('Tong cac phan tu la:', sum);
console.log('Tich cac phan tu la:', multiple);
console.log('Tong cac so chan:', sum1);
console.log('Tich cac so chan:', multiple1);
console.log('So cac phan tu chan la:', countC);
console.log('So cac phan tu le la:', countL);

// Bài 3: Cho arr2 = [1,3,4,6,13,7,4,48,39] 
// a ) Tìm phần tử lớn nhất và nhỏ nhất trong arr2
// b ) Lấy ra số lẻ lớn nhất trong arr2 

var arr2 = [1,3,4,6,13,7,4,48,39];
var i = 1;
var max = arr2[0]
var min = arr2[0]
var maxL = arr2[0]
while (i < arr2.length) {
    if (arr2[i] > max) {
        max = arr2[i];
    }
    else if (arr2[i] < min) {
        min = arr2[i]
    }
    if (arr2[i] > maxL && arr2[i] % 2 != 0) {
        maxL = arr2[i];
    }
    i += 1;
}
console.log('Phan tu lon nhat:', max);
console.log('Phan tu nho nhat:', min);
console.log('Phan tu le lon nhat:', maxL);

// Bài 1 :  Sử dụng vòng lặp for 
// cho  arr3 = [1,3,42,61,13,7,4,38,29] 
// a ) tính tổng các phần tử trong arr3
// b ) Tính tích các phần tử trong arr3 
// c ) Tìm số lớn nhất và nhỏ nhất trong arr3 
// d ) có bao nhiêu số chẵn và bao nhiêu số lẻ trong arr3 
// e ) Tìm ra số chẵn lớn nhất và số lẻ nhỏ nhất . 

var arr3 = [1,3,42,61,13,7,4,38,29];

var sum = 0;
var multiple = 1;
var max = arr3[0];
var min = arr3[0];
var countC = 0;
var countL = 0;
for (var i = 0; i < arr3.length; i++ ) {
    sum += arr3[i];
    multiple *= arr3[i];
    if (arr3[i] > max) {
        max = arr3[i];
    }
    if (arr3[i] < min) {
        min = arr3[i];
    }
    if (arr3[i] % 2 == 0) {
        countC += 1;
    }
    else {
        countL += 1;
    }
    if (arr3[i] % 2 == 0 && arr3[i] > max) {
        max = arr3[i];
    }
    if (arr3[i] % 2 != 0 && arr3[i] > min) {
        min = arr3[i];
    }
}
console.log('Tong cac phan tu:', sum);
console.log('Tich cac phan tu:', multiple);

console.log('So lon nhat la:', max);
console.log('So nho nhat la:', min);

console.log('So cac so chan la:', countC);
console.log('So cac so le la:', countL);

console.log('So chan lon nhat:', max);
console.log('So le lon nhat:', min);

// Bài 2: Cho arr4 =   [1,3,2,13,5,7,4,38,29] 
// a) sắp xếp arr4 theo thứ tự tăng dần 
// b) sắp xếp arr4 theo thứ tự giảm dần

var arr4 = [1,3,2,13,5,7,4,38,29];
for (let i = 0; i < arr4.length; i++) {
    for (let j = 0; j < arr4.length; j++) {
        if (arr4[i] < arr4[j]) {
            let temp = arr4[i];
            arr4[i] = arr4[j];
            arr4[j] = temp;  
        }
    }
}
console.log('Sap xep theo chieu tang dan:', arr4)
for (let i = 0; i < arr4.length; i++) {
    for (let j = 0; j < arr4.length; j++){
        if (arr4[i] > arr4[j]) {
            let temp = arr4[i];
            arr4[i] = arr4[j];
            arr4[j] = temp;
        }
    }
}
console.log('Sap xep theo chieu giam dan:', arr4)

// Bai 4: 
// var luong = [
//     {
//         ten:'Anh',
//         luong:1000
//     },
//     {
//         ten:'Duy',
//         luong:2000
//     },
//     {
//         ten:'Thai',
//         luong:4000
//     }
// ]
//  a )Tính tổng luong của Anh , Duy  và Thái .
//  b )Tìm xem lương của ai lớn nhất , lương của au nhỏ nhất  .  
// c ) Sắp xếp thứ tự theo lương  .

var luong = [
    {
        ten:'Anh',
        luong:1000
    },
    {
        ten:'Duy',
        luong:2000
    },
    {
        ten:'Thai',
        luong:4000
    }
]

console.log(luong[0].luong + luong[1].luong + luong[2].luong);

var max = luong[0].luong
var min = luong[0].luong
for (var i = 0; i < luong.length; i++) {
    if (luong[i].luong > max) {
        max = luong[i].luong
    }
    if (luong[i].luong < min ) {
        min = luong[i].luong
    }
}
console.log('Luong cao nhat:', max);
console.log('Luong thap nhat:', min);

// Bài 5 :  Sử dụng vòng lặp for 
// var sanPham = [{ten :"Túi xách",gia:10000,soLuong:100},{ten :"dày",gia:15000,soLuong:30},
// {ten :"Dép",gia:12000,soLuong:30},{ten :"Ví",gia:101000,soLuong:20}];
// a) Tính tổng số lượng các sản phẩm trên  . 
// b) Xếp các sản phẩm theo giá tăng dần . 
// c) Sử dụng vòng lặp để tìm sản phẩm có giá là 101000 đ . (In ra tên giá và số lượng)
// d) Sử dụng vòng lặp để tìm sản phẩm theo tên người dùng nhập vào

var sanPham = [
    {ten :"Túi xách",gia:10000,soLuong:100},
    {ten :"dày",gia:15000,soLuong:30},
    {ten :"Dép",gia:12000,soLuong:30},
    {ten :"Ví",gia:101000,soLuong:20}
];

var sum = 0;
for (var i = 0; i < sanPham.length; i++) {
    sum += sanPham[i].soLuong;
}
console.log('Tong so luong san pham:', sum);

for (var i = 0; i < sanPham.length; i++) {
    for (var j = 0; j < sanPham.length; j++) {
        if (sanPham[i].gia < sanPham[j].gia){
        var temp = sanPham[i];
        sanPham[i] = sanPham[j];
        sanPham[j] = temp;
        }
    }
}
console.log('các sản phẩm theo giá tăng dần', sanPham);

for (let i = 0; i < sanPham.length; i++) {
    if (sanPham[i].gia == 101000) {
        console.log(sanPham[i].ten, sanPham[i].soLuong)
    }
}

for (var i = 0; i < sanPham.length; i++) {
    if (sanPham[i].ten == 'Túi xách') {
        console.log(sanPham[0]);
    }
}

// Bài 6: Cho array sau: 
// var arr6 =  [1,13,2,6,4,8];
// a) Tính tổng ,hiệu, tích , chia , tất cả các phần tử trong arr6. 
// b) Sắp xếp arr6 theo thứ tự tăng dần và giảm dần. 

var arr6 =  [1,13,2,6,4,8];
var sum = 0; 
var tru = arr6[0];
var nhan = 1;
var chia = 1;
for (var i = 0; i < arr6.length; i++) {
    sum += arr6[i];
    tru -= arr6[i];
    nhan *= arr6[i];
    chia /= arr6[i];
}
console.log('Tong cac phan tu:', sum);
console.log('Hieu cac phan tu:', tru+arr6[0]);
console.log('Tich cac phan tu:', nhan);
console.log('Thuong cac phan tu:', chia);

for (var i = 0; i < arr6.length; i++) {
    for (j = 0; j < arr6.length; j++) {
        if (arr6[i] > arr6[j]) {
            var temp = arr6[i];
            arr6[i] = arr6[j];
            arr6[j] = temp;
        }
    }
}
console.log('Sap xep theo chieu giam dan:', arr6);
for (var i = 0; i < arr6.length; i++) {
    for (j = 0; j < arr6.length; j++) {
        if (arr6[i] < arr6[j]) {
            var temp = arr6[i];
            arr6[i] = arr6[j];
            arr6[j] = temp;
        }
    }
}
console.log('Sap xep theo chieu tang dan:', arr6);

// Bài 7: Cho số nguyên n. Tính giá trị biểu thức S= 1.2 + 2.3 + 3.4 + ... + n(n+1).

var n = 3;
var sum = 0;
for (i = 1; i <= n; i++) {
    sum += i * (i + 1)
}
console.log('Tong cua S = ', sum);








