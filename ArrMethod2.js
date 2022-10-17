// Bài 1:
//  cho  array = [1,5,7,8,9,15] sử dụng map hoặc filter
// bài 1.1: // * in ra các số chẵn trong mảng
// bài 1.2: // * in ra các số lẻ  trong mảng
// bài 1.3: // * in ra các số lớn hơn hoặc bằng 5 trong mảng
// bài 1.4:// *in ra các số chia hết cho 5 trong mảng
// bài 1.5:// Tìm các số >5 của mảng và tăng các giá trị đó lên 1 đơn đơn vị
// bài 1.6: dùng slice để copy mảng từ phần tử số 3 đến phần tử cuối cùng
// bài 1.7: .splice để xóa 1 phần tử trong mảng
// bài 1.8: .push thêm 1 phần tử vào cuối mảng 

// * dùng vòng for tăng kết quả của các phần tử array lên 2 lần, kết quả sẽ là mảng sau [2,10,14,16,18,30]

var array = [1,5,7,8,9,15] 

var arr1 = array.filter(function(value) {
    return value % 2 == 0
})
console.log('Cac so chan trong mang:', arr1);

var arr2 = array.filter(function(value) {
    return value % 2 != 0
})
console.log('Cac so le trong mang:', arr2);

var arr3 = array.filter(function(value) {
    return value >= 5
})
console.log('Cac so lon hon hoac bang 5:', arr3);

var arr4 = array.filter(function(value) {
    return value % 5 == 0
})
console.log('Cac so chia het cho 5:', arr4);

var arr5 = array.filter(function(value) {
    return value > 5
})
var arr6 = arr5.map(function(value1) {
    return value1 +  1
    
})
console.log('Tang cac so lon hon 5 them 1 don vi:', arr6);

var arr7 = array.slice(3,array.length)
console.log('In ra tu phan tu thu 3 den cuoi:', arr7);

var arr8 = array.splice(2,1)
console.log('Xoa di 1 phan tu:', array);

var arr9 = array.push(9)
console.log('Them 1 phan tu vao cuoi mang:', array);

var arr10 = array.map(function(value) {
    return value * 2
})
console.log('Nhan doi cac phan tu:', arr10);

// Bài 2: cho 
// dùng .sort để sắp xếp mảng tăng dần và giảm dần

var arr = [1,8,5,2,7,6,9,2,6]

var arr11 = arr.sort(function(a, b) {
    return a - b
})
console.log('Sap xep tang dan:', arr11);

var arr12 = arr.sort(function(a, b) {
    return b - a 
})
console.log('Sap xep giam dan:', arr12);

// Bài 3:
// 3.1 dùng .sort  để sắp xếp mảng object có tuổi tăng dần
// 3.2 dùng .sort để sắp xếp mảng theo ngày tham gia của học viên
// 3.3 dùng .filter để tìm ra những học viện tham gia trước tháng 2
// 3.4 dùng .map để tạo mảng mới, viết hoa toàn bộ Tên học viện : (Trung => TRUNG) 
// 	gợi ý : dùng toUppercase để viết hoa

var persons =
[{
    name: 'Trung',
    class: 'Nodemy01',
    dateJoin: "05-02-2020",
    age: 20
}, {
    name: 'Phong',
    class: 'Nodemy01',
    dateJoin: "06-01-2020",
    age: 19
}, {
    name: 'Nam',
    class: 'Nodemy02',
    dateJoin: "25-01-2020",
    age: 20
}]

var persons1 = persons.sort(function(a, b) {
    return a.age - b.age
})
console.log(persons1);

// function date(string){
//     var a = string.split('-').reverse().join('-')
//     var b = new Date(a)
//     return b
// }

// var sort = persons.sort((a, b) => {
//     var date1 = date(a.dateJoin);
//     var date2 = date(b.dateJoin);
//     return date1 - date2
// })

// console.log(sort);

var persons2 = persons.map(function(value) {
    var total = value.dateJoin.split('-').reverse().join()
    value.dateJoin = total
    return persons
})
persons2.map(function(value1) {
    return value1.sort()
})
console.log(persons2);







