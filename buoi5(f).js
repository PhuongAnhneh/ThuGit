// Cho arr bat ki
// Tinh tong cac phan tu trong arr
// Dao nguoc cac phan tu trong arr

var arr = [1,2,3,4,5,6,7,8,9]  
var sum = 0;
for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log('Tong cac phan tu:', sum);

var arr1 = [];
for (let i = arr.length-1; i >= 0; i--) {
    arr1[arr1.length] = arr[i]
}
console.log('Dao nguoc cac phan tu:', arr1);

// In ra vi tri cua phan tu

var arr2 = [1,9,3,10,4,6,7]  // for ... in
for (let i in arr2) {
    console.log('Vi tri cua cac phan tu la:', i);
}

var obj = {
    name: 'PA',
    age: 19
}
for (let i in obj) {
    console.log(i);
    console.log(obj[i]);
}

for (let i of arr2) {        // for ... of
    console.log(i);
}

temp = arr2[0];
arr2[0] = arr2[arr2.length-1];
arr2[arr2.length-1] = temp;
console.log(arr2);

for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
        if (arr2[i] > arr2[j]) {
            var temp = arr2[i];
            arr2[i] = arr2[j];
            arr2[j] = temp;
        }
    }
}
console.log(arr2);
for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
        if (arr2[i] < arr2[j]) {
            var temp = arr2[i];
            arr2[i] = arr2[j];
            arr2[j] = temp;
        }
    }
}
console.log(arr2);

for (let i = 0; i < arr2.length; i++) {
    for (let j = i + 1; j < arr2.length; j++) {
        if (arr2[i] > arr2[j]) {
            var temp = arr2[i];
            arr2[i] = arr2[j];
            arr2[j] = temp;
        }
    }
}
console.log(arr2);

for (let i = 0; i < arr2.length; i++) {
        if (arr2[i] < arr2[i + 1]) {
            var temp = arr2[i];
            arr2[i] = arr2[i + 1];
            arr2[i + 1] = temp;
            i = -1;
        }
}
console.log(arr2);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function SumNumber(a, b) {
    // console.log(a + b);
    return a + b;
}
var result = SumNumber(1, 2)
console.log(result);
