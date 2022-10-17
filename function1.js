// 1. Viết function có đầu vào là 1 array
// a, Function trả ra tổng các phần tử trong array
// b, Function trả ra tích các phần tử trong array

function Tong(arr) { // tham so 
    var sum = 0
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}
var a = Tong([1, 2, 3, 4, 5]) // doi so
console.log('Tong day:', a);

function Tich(arr1) {
    var mul = 1
    for (var i = 0; i < arr1.length; i++) {
        mul *= arr1[i]
    }
    return mul
}
var b = Tich([1,2,3,4,5])
console.log('Tich day:', b);

// 2. viết function có đầu vào là 1 array chứa các số
// 	a, Function trả ra số lớn nhất trong array 
// 	b, Function trả ra số bé nhất trong array 

function Max(arr) {
    var max = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i]
        }
    }
    return max
}
var c = Max([1,2,3,4,5]) 
console.log('So lon nhat:', c);

function Min(arr) {
    var min = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i]
        }
    }
    return min
}
var c = Min([1,2,3,4,5]) 
console.log('So be nhat:', c);

// 3	viết function có đầu vào là 1 array
// 	Function trả ra array mới với thứ tự ngược lại với array ban đầu

function Dao(arr) {
    var arr1 = []
    for (let i = arr.length-1; i >= 0; i--) {
        arr1[arr1.length] = arr[i]
    }
    return arr1
}
var d = Dao([1,2,3,4,5])
console.log(d);

// 4 	viết function có đầu vào là số number và 1 array chứa số
// 	Function trả ra số lần number lặp lại trong array

function Head(a, arr) {
    var count = 0
    for (let i = 0; i < arr.length; i++) {
        if (a == arr[i]) {
            count += 1
        }
    }
    return count
}
var e = Head(1,[1,2,3,4,5,5,5]) 
console.log(e);

// 5. Viết function có đầu vào là 1 string
// 	function trả ra string mới sau khi đã loại bỏ khoảng trống thừa ở đầu và ở cuối string
// 	ví dụ: string = ‘     hello mọi người     ‘  => newString = ‘hello mọi người’

var string = '     phuong anh    '
var a = string.trim()
console.log(a)

// 6. viết function có đầu vào là 1 string
// 	Thay thế tất cả dấu cách ‘ ‘ trong string bằng dấu ‘-‘ và trả ra string mới
// 	VD 20 05 2015 => 20-05-2015
function string1 (a) { 
    var b = ''
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== ' ') {
            b += a[i]
        } else {
            b+= '-'
        }
    }
    return b
}
console.log(string1('20 05 2020'));

// 7. Viết function có đầu vào là 1 array
// Function trả ra đoạn string chứa các giá trị bên trong array đầu vào
// arr = ['1',2,3,4,5]
// arr = 12345  

function array(arr) {
    var a = []
    for (let i = 0; i < arr.length; i++) {
        a.push(arr[i] + '')
    }
    return a
}
console.log(array([1,2,3,4,5]));

function array1(arr1) {
    var a = ''
    for (let i = 0; i < arr1.length; i++) {
        a += arr1[i]
    }
    return a
}
console.log(array1([1,2,3,4,5]));

// 8. viết function có đầu vào là 1 array chứa các số
// 	Function trả ra số lớn nhất trong array 

function array2(arr2) {
    var max1 = 0
    for (let i = 0; i < arr2.length; i++) {
        if (max1 < arr2[i]) {
            max1 = arr2[i]
        }
    }
    return max1
}
console.log('So lon nhat:',array2([1,2,3,4,5]));

// 9. viết function có đầu vào là 1 array
// 	Function trả ra array mới với thứ tự ngược lại với array ban đầu

function array3(arr3) {
    var arr3N = []
    for (let i = arr3.length-1; i >= 0; i--) {
        arr3N.push(arr3[i])
    }
    return arr3N
}
console.log('Day voi thu tu nguoc lai:', array3([1,2,3,4,5]));

// 10. viết function có đầu vào là số number và 1 array chứa số
// 	Function trả ra số lần number lặp lại trong array

function array4(number, arr4) {
    var count = 0
    for (let i = 0; i < arr4.length; i++) {
        if (number == arr4[i]) {
            count += 1
        }
    }
    return count
}
console.log('Number lap lai:', array4(2, [1, 2, 2, 2, 2]),'lan');

// 11. viết function có đầu vào là 1 string
// 	Thay thế tất cả dấu cách ‘ ‘ trong string bằng dấu ‘-‘ và trả ra string mới 

function string2(str) {
    var a = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            a += str[i]
        } else {
            a += '-'
        }
    }
    return a
}
console.log(string2('phuong anh ne'));















