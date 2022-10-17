// Bài 1
// Tạo function myEvery dựa trên every method ( chủ động tra mạng every method)
// Tạo function myFind dựa trên find method
// Tạo function mySome dựa trên some method ( chủ động tra mạng some method)
// Tạo function mySplice dựa trên splice method
// Tạo function mySlice dựa trên slice method
// Tạo function myReverse dựa trên reverse method
// Tạo function myFilter dựa trên filter method
// Tạo function myIndexOf dựa tên indexOf method

// Sử dụng những hàm vừa tạo ở trên thực hiện những bài ở dưới đây
// (Nếu gặp bài chưa tạo hàm thì dùng array method)

arr = [1, 4, 5, 7,2]
function myEvery(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if(callback(array[i]) == false) {
            return false
        }
    }
    return true;
}
var ketQua = myEvery(arr, function(value) {
    return value > 2
})
// console.log(ketQua);

function myFind(array, callback) {
    for (let i in array) {
        if (callback(array[i]) == true) {
            return array[i]
        }
    }
}
var ketQua1 = myFind(arr, function(value) {
    return value > 2
})
// console.log(ketQua1);

function mySome(array, callback) {
    for (let i in array) {
        if (callback(array[i]) == true) {
            return true
        }
    }
    return false
}
var ketQua2 = mySome(arr, function(value) {
    return value < 1
})
// console.log(ketQua2);

function myFilter(array, callback) {
    var newArr = [] 
    for (let i in array) {
        if (callback(array[i]) == true) {
            newArr[newArr.length] = array[i]
            // newArr.push(array[i])
        }
    }
    return newArr
}
var ketQua3 = myFilter(arr, function(value) {
    return value > 3
})
// console.log(ketQua3);

// Bài 2: 
// a. Lấy ra phần tử thứ 2 tới thứ 6.
// b. In ra vị trí của các phần tử trùng nhau
// c. Tìm số đầu tiên là số nguyên tố

var arr2 = [ 8,3,4,1,3,6,4,3,0, 8, 25, 7, 13, 23]

var arr3 = arr2.slice(2,7)
// console.log('Lấy ra phần tử thứ 2 tới thứ 6:', arr3);

// for (let i = 0;i <arr2.length;i++) {
//     var count = 0 
//     for (let j = 1; j <= arr2[i]; j++) {
//         if (arr2[i] % j == 0) {
//             count++
//         }
//         if (count == 0) {
//             console.log('La so nguyen to', arr2[i]);
//             break
//         } 
//     }
// }

// Bài 3 :   
// áp dụng array.sort  sắp xếp array trên theo thứ tự tăng dần . 
// áp dụng array.map  , Tạo ra một array mới với các giá trị gấp 2 array cũ . 
// cho array3= [1,2,3,5,1] hãy thêm array3 vào phía trước của array và in ra kết quả . 
// cho array3= [1,2,3,5,1] hãy thêm array3 vào vị trí số 5 của array và in ra kết quả (ÁP dụng mySplice )

var array = [1 ,3,7,8,9,0,10,3,2]

var arr4 = array.sort(function(a, b) {
    return a - b
})
// console.log('Sắp xếp theo thứ tự tăng dần:', arr4);

var arr5 = array.map(function(value) {
    return value * 2
})
// console.log('Array mới với các giá trị gấp 2 array cũ:', arr5);

var array3= [1,2,3,5,1]
var arr6 = array3.concat(array)
// console.log('Them array3 vào phía trước của array', arr6);

array.splice(5,0,array3)
// console.log('Thêm array3 vào vị trí số 5 của array:', array);

// Bài 4: 
// Xóa phần tử cuối cùng và in lại array
// Thêm giá trị 12 vào đầu của array và in ra dãy array sau khi thêm 
// Hãy xóa phần tử ở vị trí thứ 2 đến vị trí thứ 5 của array và in ra kết quả
// Hãy in ra các giá trị tại vị trí từ thứ 3 đến thứ 7 của array

var array2 = [1,4,2,4,5,7,8,3,6,4,9,1,6,5]

// array2.pop()
// console.log('Xóa phần tử cuối cùng:', array2);

// array2.unshift(12)
// console.log('Thêm giá trị 12 vào đầu của array:', array2);

// array2.splice(2,5)
// console.log('Xóa phần tử ở vị trí thứ 2 đến vị trí thứ 5:', array2);

var arr = array2.slice(3,7)
// console.log('In ra các giá trị tại vị trí từ thứ 3 đến thứ 7:', arr);

// Bài 5:
// Hãy in ra vị trí đẩu tiên xuất hiện số 7
// Hãy in ra vị trí cuối cùng xuất hiện số 7
// Hãy sắp xếp array1 theo thứ tự tăng dần và giảm dần
// Sử dụng hàm filter để tạo ra array2 từ array1 chứa các phần tử có giá trị lớn hơn 5
// Sử dụng hàm filter để tạo ra 1 array3 chứa các giá trị thỏa mãn các điều kiện sau: là lớn hơn 5 
// và phần tử đó cộng 2 chia hết cho 3

var  array1 = [1,5,2,6,2,8,9,4,6,2,3,5,7,9,3,2,75,6,4,3,7,5,2,4,13]

console.log(array1.indexOf(7));

console.log(array1.lastIndexOf(7));

var arr7 = array1.filter(function(value) {
    return value > 5
})
// console.log(arr7);

var arr8 = array1.filter(function(value) {
    return value > 5 && (value + 2) % 3 == 0
})
// console.log(arr8);




