// Bat dong bo
// setTimeout(function() {
//     console.log(3);
// },(3))
// setTimeout(function() {
//     console.log(8);
// },(1))
// console.log(7);

// Callback
function test(value, callback) {
    console.log(value);
    callback()
}
test(4, function(){
    console.log(2);
})

function calculator(a, b, callback) {
    return callback(a, b)
}
var result = calculator(1, 3, function(c, d) {
    return c + d
})
var result1 = calculator(1, 3, function(c, d) {
    return c - d
})
var result2 = calculator(1, 3, function(c, d) {
    return c * d
})
// console.log(result);

var arr = [1,2,3,4]
function myMap(array, callback) {
    var newArr = []
    for (let i = 0; i < array.length; i++) {
        newArr.push(callback(array[i]))
    }
    return newArr
}
var res = myMap(arr, function(value) {
    return value + 1
})
var res1 = myMap(arr, function(value) {
    return value * 1
})
console.log(res);

function myFilter(array, callback) {
    var newArr1 = []
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i]) == true) {
            newArr1.push(array[i])
        }
    }
    return newArr1
}
var res2 = myFilter(arr,function(value) {
    return value % 2 == 0
}) 
console.log(res2);

function myFind(array, callback) {
    var newArr2 = []
    for (let i in array) {
        if (callback(array[i]) == true) {
            newArr2.push(array[i])
            break
        }
    }
    return newArr2
}
var res3 = myFind(arr, function(value) {
    return value % 2 != 0
})
console.log(res3);
