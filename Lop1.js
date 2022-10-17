// Bài 1: cho array = [1,5,7,8,9,15,8]
// 1.1 in ra các số chẵn của mảng
// 1.2 in ra các số lẻ của mảng
// 1.3 in ra các số lớn hơn hoặc bằng 5 của mảng
// 1.4 Cộng tổng các số chia hết cho 5 của mảng
// 1.5 Tìm ra tích 3 số đầu của mảng array
// 1.6 Tính tổng 3 phần tử cuối của mảng
// 1.7 Tìm xem trong array có phần tử nào là số 5 không?
// 1.8 Đếm số phần tử = 8 trong mảng

var arr = [1, 5, 3, 7, 1, 2, 15, 8, 9, 5, 0, 8, 7, 9, 7]
var obj = {}
var newArr = []
for (let i = 0; i < arr.length; i++) {
    if ((obj[arr[i]] == undefined) && arr[i] % 2 == 0) { 
        obj[arr[i]] = 1
        newArr[newArr.length] = arr[i]
    }
}
console.log('Cac so chan:', newArr);
console.log(obj);

var arr1 = []
for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] == undefined && arr[i] % 2 != 0 ) {
        obj[arr[i]] = 1
        arr1[arr1.length] = arr[i]
    }
}
console.log('Cac so le:', arr1);

var obj2 = {}
var arr2 = []
for (let i = 0; i <= arr.length; i++) {
    if (obj2[arr[i]] == undefined && arr[i] >= 5) {
        arr2[arr2.length] = arr[i]
        obj2[arr[i]] = 1
    }
}
console.log('Cac so lon hon hoac bang 5:', arr2);

var obj3 = {}
var arr3 = []
var sum = 0
for (let i = 0; i < arr.length; i++) {
    if (obj3[arr[i]] == undefined && arr[i] % 5 == 0) {
        sum += arr[i]
        obj3[arr[i]] = 1
        arr3[arr3.length] = arr[i]
    }
}
console.log('Tong cac so chia het cho 5:', sum);

var tich = 1
for (let i = 0; i <=2; i++) {
    tich *= arr[i]
}
console.log('Tich 3 so dau:', tich);

var tich1 = 1
for (let i = arr.length-1; i >= arr.length-3; i--) {
    tich1 *= arr[i]
}
console.log('Tich 3 so cuoi:', tich1);

for (i in arr) {
    if (arr[i] == '5') {
        console.log('Co so 5');
        break
    }
}
b = ''
var count = 0
for (i in arr) {
    if (arr[i] == '8') {
        count += 1
        b += i + ' '
    }
}
console.log('So luong so 8 la:', count,', o vi tri:', b);

// Bài 2: cho var data = [3,2,4,1,8,7,1,10,1,2]
// a, tính tổng các phần tử trong array
// b, tính tích các phần từ trong array
// c, tính tổng các số lẻ trong array
// d, tính tích các số chẵn trong array
// e, có mấy số 1 trong array, ở những vị trí nào
// f, số 1 đầu tiền và số 1 cuối cùng ở vị trí nào trong array

var data = [3,2,4,1,8,7,1,10,1,2]
var sum = 0
for (let i = 0; i < data.length; i++) {
    sum += data[i]
}
console.log('Tổng các phần tử trong array:', sum);

var tich = 1
for (let i = 0; i < data.length; i++) {
    tich *= data[i]
}
console.log('Tích các phần tu trong array:', tich);

var sum = 0
for (let i = 0; i < data.length; i++) {
    if (data[i] % 2 != 0) {
        sum += data[i]
    }
}
console.log('Tong cac so le:', sum);

var sum = 0
for (let i = 0; i < data.length; i++) {
    if (data[i] % 2 == 0) {
        sum += data[i]
    }
}
console.log('Tong cac so chan:', sum);

var count = 0
var a = ''
for (i in data) {
    if (data[i] == '1') {
        count += 1
        a += i + ' '
    }
}
console.log('So luong so 1 la:', count,', o vi tri:', a);

console.log('So 1 o vi tri dau la:', a[0],', So 1 o vi tri cuoi la:', a[a.length-2]);

// Bài 3: cho var data = [3,2,4,'5',1,8,7,'9']
// a, tính tổng các phần tử trong array trên
// b, hãy tạo ra array2 chứa các phần tử có giá trị lẻ của data
// c, hãy tạo ra array3 chứa các phần tử của data theo thứ tự đảo ngược 
// kết quả [ '9', 7, 8, 1, '5', 4, 2, 3]

var data = [3,2,4,'5',1,8,7,'9','10']
var sum = 0
for (i in data) {
    sum += data[i]
}
console.log('tong cac phan tu:', sum);

var arr2 = []
for (var i = 0; i < data.length; i++) {
    if (data[i] % 2 !== 0 && typeof(data[i]) === 'number') {
        arr2[arr2.length] = data[i]
        console.log(1);
    }
}
console.log('Day so le:', arr2);

var data1 = []
for (var i = data.length-1; i >= 0; i--) {
    data1[data1.length] = data[i]
}
console.log('Day so dao nguoc:', data1);

// Bai 4: Cho array = [1,3,25,41,3,2,2,66,22,5,1,1,2,651,51,5,2];
// a, hãy tạo ra array chỉ chứa các số có đuôi là 1 trong array trên 
// // [1, 41,....]
// b, hãy tìm vị trí của phần tử = 2 xuất hiện lần thứ 3 trong array trên
// c, hãy tìm vị trí của phần tử chứa ký tự 2 thứ 4 trong array 
// (25 chứ 1 ký tự 2,   22 chứa 2 ký tự 2)
// d, phần tử 5 lặp lại mấy lần trong array trên
// e, phần tử nào lặp lại nhiều nhất trong array trên
// f, hãy tìm số lớn nhất trong array trên
// g, hãy tìm số chẵn lớn nhất trong array
// h, hãy lọc trùng array trên sao cho các phần tử chỉ xuất hiện 1 lần duy nhất

var array = [1,3,25,41,3,2,2,66,22,5,1,1,2,651,51,5,2];

var arr1 = []
var obj = {}
for (let i = 0; i < array.length; i++) {
    if (obj[array[i]] == undefined && array[i] % 10 == 1) {
        arr1[arr1.length] = array[i]
        obj[arr1[i]] = 1
    }
}
console.log(arr1);

var arr = []
for (let i = 0; i <= array.length; i++) {
    if (array[i] == 2) {
        arr[arr.length] = i
    }
}
console.log(arr[2]);

var count = 0
for (let i = 0; i < array.length; i++) {
    if (array[i] == 5) {
        count += 1
    }
}
console.log('So 5 co trong mang:', count);

var obj = {}
for (let i = 0; i < array.length; i++) {
    obj[array[i]] = obj[array[i]] ? obj[array[i]] + 1 : 1   
}
console.log(obj)

var max = -1;
for (let key in obj) {
    if (max < obj[key]) {
        max = obj[key]
    } 
}
for (let key in obj) {
    if (obj[key] === max) {
        console.log('So lap lai nhieu lan nhat:', key);
        break;
    }
}

var max1 = array[0]
for (let i = 0; i < array.length; i++) {
    if (array[i] > max1) {
        max1 = array[i]
    }
}
console.log('So lon nhat:', max1);

var max2 = array[0] 
for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0 && array[i] > max2) {
        max2 = array[i]
    }
}
console.log('So chan lon nhat:', max2);

var obj1 = {}
var arr = []
for (let i = 0; i < array.length; i++) {
    if (obj1[array[i]] == undefined) {
        obj1[array[i]] = 1
        obj1[arr[i]] = array[i]
        arr[arr.length] = array[i]
    }
}
console.log(arr);

var arr1 = []
for( let key in obj) {
    arr1[arr1.length] = key - ""
}
console.log(arr1)

// Bài 5: cho array = [1,5,7,6,4,9, 5, 7 , 5, 1]
// a, array trên thiếu những số nào trong khoảng từ phần tử lớn nhất đến phần tử nhỏ nhất 
// (lớn nhất trên array là 9, nhỏ nhất là 1, từ 1 - 9 thiếu các số [2, 3, 8])
// b, trong array trên số nào có tổng lặp lại lớn nhất 
// (số 5 lặp lại 3 lần => tổng = 5 * 3 = 15
// số 7 lặp 2 lần => tổng = 14,....
// => số 5 có tổng lặp lại lớn nhất)

var array = [1,5,7,6,4,9, 5, 7 , 5, 20, 1]

var Max = array[0]
var Min = array[0]
for (let i= 0; i < array.length; i++) {
    if (Max < array[i]) {
        Max = array[i]
    }
}
console.log('So lon nhat:', Max);

for (let i= 0; i < array.length; i++) {
    if (Min > array[i]) {
        Min = array[i]
    }
}
console.log('So nho nhat:', Min);

var arr = []
for (let i = Min; i <= Max; i++) {
    var count = 0
    for (let j = 0; j < array.length; j++) {
        if (i == array[j]) {
            count++
        }
    }
    if (count == 0) {
        arr.push(i)
    }
}
console.log('Nhung so con thieu:', arr)

var obj = {}
for (let i = 0; i < array.length; i++) {
    obj[array[i]] = obj[array[i]] ? obj[array[i]] + 1 : 1   
}
console.log(obj)

// Cach 1 y b
var max = 0
for (let key in obj) {
    if (max < key * obj[key]) {
        max = key * obj[key]
    }
}
console.log('So co tong lap lai lon nhat la:', max)

// Cach 2 y b
var sum = 0
var max3 = 0
for (let key in obj) {
    sum = key * obj[key]
    if (max3 < sum) {
        max3 = sum
        k = sum / obj[key]
    }
}
console.log('So co tong lap lai lon nhat la:', k);
 









