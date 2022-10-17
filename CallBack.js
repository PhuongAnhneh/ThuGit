var arr = [1,2,3,4,5];
function DieuKien(array, callback) {
    var newArr = []
    for(let i = 0; i < array.length; i++) {
        if(callback(array[i])) {
            newArr[newArr.length] = array[i]
        }
    }
    return newArr
}
var ketQua = DieuKien(arr, function(value) {
    return value > 2 
})
// console.log(ketQua);

var arr = [1,2,3,4,5,5,5,5];
function Dem(array, callback) {
    var count = 0
    for(let i = 0; i < array.length; i++) {
        if(callback(array[i])) {
            count++
        }
    }
    return count
}
var ketQua1 = Dem(arr, function(value) {
    return value == 5
})
// console.log(ketQua1);

// ======================================================================================
// Bất đồng bộ: setTimeout, setInterval