// Bài 1:  var data2 = [1,1,3,4,4,5,6,7,9]
// a ) Thêm số 8 vào cuối array data2 . 
// b ) Thêm số 10 vào cuối array data2
// c ) Thêm số 5 vào đầu  array data2 .
// d ) Đổi phần tử có vị trí là 5 thành số  11 .
// e ) Xóa phần tử vị trí  thứ 4 và thêm 2 số 5 và 7 vào data2 .  

var data2 = [1,1,3,4,4,5,6,7,9]

data2.push(8)
// console.log(data2);

// data2.unshift(5)
// console.log(data2);

// data2.splice(5,1,11)
// console.log(data2);

data2.splice(4,1,5,7)
console.log(data2);

// Bài 2 : var  data03 = [“Cam',”Xoài”,”Mít”,”Bưởi ”,”Quýt,”Dưa gang”]
// a ) Copy array data03. Bằng  … 
// b )  Sửa phần tử “Dưa gang” thành “Dưa hấu” 
// c ) Thêm “mận” vào giữa data03 . 
// d ) Thêm “Dứa” vào đầu của data03 và “Chanh”  vào cuối data03 . 

var  data03 = ['Cam','Xoài','Mít','Bưởi ','Quýt','Dưa gang']

data03.splice(5,1,'Dưa hấu')
console.log(data03);

data03.splice(Math.round(data03.length / 2),0,'Man')
console.log(data03);

data03.unshift('Dứa')
console.log(data03);

data03.push('Chanh')
console.log(data03);

// Bài 3 :
// a ) Tạo ra một array persons mới . (newPersons)
// a1) Thêm {firstname : "Điền họ của bạn…", lastname: "Điền họ của ban …."} vào cuối Array newPersons. 
// b) Xóa {firstname : "Trần", lastname: "Huy"}, và Đổi thành 
// {firstname : "Nguyễn", lastname: "Hoàng"}.
// c ) Áp dụng map thêm key address:"Hà Nội"  vào mỗi value của array newPersons . 

const persons = [
    {firstname : "Đào", lastname: "Văn Anh"},
    {firstname : "Trần", lastname: "Huy"},
    {firstname : "Lê", lastname: "Hoàng"}
  ];

var newPersons = persons.slice(0, persons.length)

newPersons.push({firstname : "Đào", lastname: "Phuong Anh"})

newPersons.splice(1,0,{firstname : "Nguyễn", lastname: "Hoàng"})

var persons1 = newPersons.map(function(value) {
    value.address = 'Ha Noi'
    return value
})
// console.log(persons1);
// console.log('newPersons =', newPersons);

// Bài 4: var arr2 = ['4', '6', 1,2,3,5, 'y', 't', 5]
// viết function có đầu vào là 1 arr return tổng các number và string number trong array

var arr2 = ['4', '6', 1,2,3,5, 'y', 't', 5]
function Arr (arr) {
    var a = 0
    arr.forEach(function(value) {
        a += value
    })
    return a 
}
console.log(Arr(arr2));

// Bài 5:
// viết function có đầu vào là 2 array và return tổng 2 array đầu vào
// viết function có đầu vào là 2 array return array mới gộp 2 array với nhau và các phần tử sắp xếp tăng dần

var list1 = [3,6,7,9,5]
var list2 = [3,5,7,8,6,6,7]

function Sum(a, b) {
    var sum1 = 0
    var sum2 = 0
    a.forEach(function(value) {
        sum1 += value
    })
    b.forEach(function(value) {
        sum2 += value
    })
    return sum = sum1 + sum2
}
console.log(Sum(list1, list2));

function Sort(a, b) {
    var arr1 = a.concat(b)
    arr1.sort(function(before, after) {
        return before - after
    })
    return arr1
}
console.log('Mang sap xep:', Sort(list1, list2));

// Bài 6:var data = [1,2,3,1,2,3,4,5,6,5,4,6]
// viết function có dầu vào là array và return ra array mới chứa các phần tử của array đầu vào không lặp lại

var data = [1,2,3,1,2,3,4,5,6,5,4,6]
function NewArr(arr) {
    arr2 = [...new Set(data)]
    return arr2
}
console.log('Mang moi khong lap:', NewArr(data));

// Bài 7:
// hãy tính điểm thi của từng học sinh biết tổng điểm = điểm thi * hệ số
// hệ số sẽ thay đổi theo khối thi và môn thi
// hoc sinh thi đỗ nếu điểm thi >= điểm sàn của khối tương ứng
// hãy cho biết ai thi đỗ, ai thi trượt

var hocSinh=[
    {ten: 'huy', khoi:'A', diem: {toan: 7, van: 5, anh:5}},
    {ten: 'lam', khoi:'B', diem: {toan: 7, van: 7, anh:5}},
    {ten: 'tung', khoi:'C', diem: {toan: 7, van: 4, anh:7}},
]
    
var khoiThi = [
    {khoi: 'A', heSo:{toan:2, van:1, anh:1}, diemSan:25},
    {khoi: 'B', heSo:{toan:1, van:1, anh:2}, diemSan:24},
    {khoi: 'C', heSo:{toan:1, van:2, anh:1}, diemSan:20},
]

// function Ten(name) {
//     var arr3 = hocSinh.map(function(value) {
//         var arr4 = khoiThi.map(function(value1) {
//             if(value.khoi == value1.khoi) {
//                 var sum = value.diem.toan * value1.heSo.toan + value.diem.van * value1.heSo.van + value.diem.anh * value1.heSo.anh
//                 value.total = sum
//                 if (value.total >= value1.diemSan) {
//                     value.TotNghiep = 'Do'
//                 }
//                 else {
//                     value.TotNghiep = 'Truot'
//                 }
//             }
//         })
//         return value
//     })
//     var arr5 = arr3.filter(function(value2) {
//         if (name == value2.ten) {
//             return value2
//         }
//     })
//     return arr5 
// }
// console.log(Ten('huy'));

var arr3 = hocSinh.map(function(value) {
    var arr4 = khoiThi.map(function(value1) {
        if (value.khoi == value1.khoi) {
            var sum = value.diem.toan * value1.heSo.toan + value.diem.van * value1.heSo.van + value.diem.anh * value1.heSo.anh 
            value.DiemTong = sum
            if (value.DiemTong >= value1.diemSan) {
                value.TotNghiep = 'Do'
            }
            else {
                value.TotNghiep = 'Truot'
            }
        }
    })
    return value
})
console.log(arr3);

// Bài 8
// a, Hãy tạo ra arrayA chỉ chứa object  các học sinh lớp A
// b, Hãy tạo ra array chứa object các học viên có điểm từ 6 trở xuống
// c, Hãy tạo ra array vip chứa object các học viên tham gia đội tuyển

var all = [
    {name: 'huy', score: 10, class: 'A'},
    {name: 'hai', score: 7, class: 'B'},
    {name: 'hung', score: 8, class: 'A'},
    {name: 'kien', score: 6, class: 'A'},
    {name: 'vinh', score: 9, class: 'B'},
    {name: 'binh', score: 8, class: 'B'},
    {name: 'cuong', score: 5, class: 'B'},
    {name: 'chien', score: 6, class: 'A'},
    {name: 'minh', score: 7, class: 'B'},
  ]
   
var doiTuyen = ['huy', 'vinh', 'binh', 'hung', 'minh']

// a, Hãy tạo ra arrayA chỉ chứa object  các học sinh lớp A
var arrayA = all.filter(function(value) {
    return value.class == 'A'
})
console.log(arrayA);

// b, Hãy tạo ra array chứa object các học viên có điểm từ 6 trở xuống
var arrayB = all.filter(function(value) {
    return value.score <= 6
})
console.log(arrayB);

// c, Hãy tạo ra array vip chứa object các học viên tham gia đội tuyển
arrvip = []
var arrayC = all.map(function(value) {
    var arrayD = doiTuyen.map(function(value1) {
        if (value.name == value1) {
            arrvip[arrvip.length] = value
            return arrvip
        }
    })
})
console.log(arrvip);


// Bài 9: 
// hãy cho biết các phần tử trong array trên lặp lại bao nhiêu lần
ketqua: [
    {phanTu: 1, lapLai: 2},
	{phanTu: 2, lapLai: 2},
	{phanTu: 3, lapLai: 3},
]

var data = [1,2,3,1,2,3,4,5,6,5,4,6,3]

data.sort(function(a, b) {
    return a - b
})
var count = 1
for (let i = 0; i < data.length; i++) {
    if (data[i] == data[i+1]) {
        count += 1
    }
    else {
        console.log('Phan tu:', data[i] +' xuat hien', count +' lan');
        count = 1
    }
}
