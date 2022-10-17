// Bài 1: 
// Hãy viết 1 function có tham só đầu vào là 1 array và 1 callback trong đó kết quả trả về
// là trong array nhập vào có các giá trị nào xuất hiện và giá trị đó được lặp lại mấy lần.

var arr = [1,3,3,3,4,4,44,5,2]
function Loop(array, callback) {
    var obj = {}
    for (let i = 0; i < array.length; i++) {
    //    obj[arr[i]]  =  obj[arr[i]] ? obj[arr[i]] + 1 : 1
        if(obj[array[i]] == true) {
            obj[array[i]] = obj[array[i]] + 1
        } else {
            obj[array[i]] = 1
        }
    }
    return callback(obj)
}
let ketQua = Loop( arr,function(value){
    return value
})
// console.log(ketQua);

// Bài 2: 
// giả sử tải file nặng 500mb
// tốc độ tải mỗi giây biến động trong khoảng từ 1 - 10 mb/s
// hãy hiển thị % download mỗi giây 1 lần, đến 100% thì thông báo tải thành công và kết thúc
// Nâng cao bài 2 là mỗi lần hiển thị % download mới thì thời gian ngẫu nhiên từ 1 đến 3 giây

var file = 500
var sum = 0
var time = setInterval(function() {
    var toc_do_tai = Math.floor(Math.random() * 10 + 1)
    var phan_tram = Math.floor(toc_do_tai / file * 100)
    sum += phan_tram
    // console.log('Dang tai', sum +'%');
    if (sum > 99) {
        sum = 100
        // console.log('Da tai hoan tat')
        clearInterval(time)
    }
}, 0)

//Bài 3:
// giả sử tải file nặng 500mb,1500mb
// tốc độ tải mỗi giây biến động trong khoảng từ 10 - 20 mb/s
// Mỗi file nhận được bằng, khi có 1 file tải xong, file còn lại nhận tất cả lư lượng
// hãy hiển thị % download mỗi giây 1 lần, đến 100% thì thông báo tải thành công và kết thúc
// Nâng cao bài 2 là mỗi lần hiển thị % download mới thì thời gian ngẫu nhiên từ 1 đến 3 giây

var file1 = 1500
var toc_do_tai1 = Math.floor(Math.random() * 20 + 10)

// Bài 1: 
// -) Hãy viết 1 funtion in ra dãy các số nguyên tố và vị trí của nó trong array  
// -) Tính tổng các số nguyên tố trong array  và trung bình cộng của các số trong array
// -) Viết funtion để tính tích của các số nguyên tố trong dãy array

var array = [1,4,3,2,5,7,10,5,9,11,23,35,71,43]

function So_nguyen_to(n) {
    if (n < 2) return false
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            return false
        }
    }
    return true
}
let newArr = []
for (let j = 0; j < array.length; j++) {
    if (So_nguyen_to(array[j]) == true) {
        newArr.push(array[j])
    } 
}
console.log(newArr);

var sum = 0
for (let k = 0; k < newArr.length; k++) {
    sum += newArr[k]
    TB_Cong = sum / newArr.length
}
console.log(sum);

console.log(TB_Cong);

function Tich(m) {
    var tich = 1
    for (let k = 0; k < m.length; k++) {
        tich *= m[k]
    }
    return tich
}
console.log(Tich(newArr));

// Bài 3: 
// Viết function Tính tích của các phần tử từ đầu đến vị trí số 2 xuất hiện lần thứ 3
// Viết function tính tích , tính tổng , tính trung bình cộng của dãy array2 là x số cuối của dãy array1
// Viết function Tính tích, tính tổng của các phần tử từ vị trí số 2 xuất hiện lần đầu đến vị trí số 2 xuất hiện lần thứ 4

var array1 = [1,5,2,6,2,8,9,4,6,2,3,5,7,9,3,2,75,6,4,3,2,4,12];

let a 
var count = 0
for (let i in array1) {
    if (array1[i] == 2) {
        count++
    }
    if (count == 3) {
        // console.log(i);
        a = i
        break
    }
}
console.log(a);

// var arr2 = array1.forEach(function(value) {

// })
a++
var arr = array1.slice(0,a)
console.log(arr);

var tich = 1
arr.map(function(value) {
    return tich *= value
})
console.log('tích của các phần tử từ đầu đến vị trí số 2 xuất hiện lần thứ 3:', tich);
