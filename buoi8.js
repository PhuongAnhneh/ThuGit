// Bài 9: 
// hãy cho biết các phần tử trong array trên lặp lại bao nhiêu lần
ketqua: [
    {phanTu: 1, lapLai: 2},
	{phanTu: 2, lapLai: 2},
	{phanTu: 3, lapLai: 3},
]
var data = [1,2,3,1,2,3,4,5,6,5,4,6,3]

var arr = data.sort(function(a, b) {
    return a - b
})
console.log(arr);
var count = 1
for (let i = 0; i < data.length; i++) {
    if (data[i] == data[i +1]) {
        count += 1
    }
    else {
        console.log('Phan tu:', data[i] +' lap lai '+ count +' lan');
        count = 1
    }
}

var arr1 = [1,2,3,4,5,6,0, 2]

console.log('So ban tim nam o vi tri:', arr1.indexOf(2));
console.log(arr1.lastIndexOf(2));

// Loc cac so trung nhau
var arr2 = [1,3,4,5,2,1,1,2,0,0,0]

var NewArr2 = arr2.filter(function(value, index) {
    return arr2.indexOf(value) == index
})
console.log(NewArr2);

// Cac so lap lai bao nhieu lan

var output = []
arr2.forEach(function(value) {
    if (output[value] == undefined) {
        output[value] = [value]
    } else {
        output[value].push(value)
    }
})
for (let i in output) {
    console.log('So', i +' xuat hien', output[i].length);
}

// Chuyen chuoi thanh arr
var str = '27-11-2002'

var newArr = str.split('-').reverse().join('')
console.log(newArr);

// Chuyen arr thanh chuoi
var arr3 = [1,2,3,4]

var newArr1 = arr3.join('')
console.log(newArr1);

// Cho 
//     2.2 Hãy in lại thông tin ngày sinh của mỗi người trong bảng thông tin đang từ dạng mm/dd/yyyy thành dd/mm/yyyy
//     2.3 Hãy sắp xếp lại data trong array thongTin theo thứ tự ngày sinh tăng dần
//     2.4 Hãy sắp xếp theo ngày sinh, nếu trùng ngày sinh thì xếp theo tên

thongTin = [
    {ten: 'dao linh huong', ngaySinh:'02/28/1998'},
    {ten: 'tran ngoc diep', ngaySinh:'02/12/1998'},
    {ten: 'nguyen duy minh', ngaySinh:'02/03/1998'},
    {ten: 'nguyen duy mạnh', ngaySinh:'02/03/1998'},
    {ten: 'le thanh tung', ngaySinh:'02/03/1998'},
    {ten: 'dao minh nguyet', ngaySinh:'02/20/1998'}
]

var arr4 = thongTin.map(function(value) {
    var month = value.ngaySinh.slice(0,3)
    var day = value.ngaySinh.slice(3,6)
    var year = value.ngaySinh.slice(6,10)
    var birthday = day + month + year
    value.ngaySinh = birthday 
    return value
})
console.log(arr4);

