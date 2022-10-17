var obj = [
    {name:'bam1',age:16},
    {name:'cam2',age:46},
    {name:'zam3',age:26},
    {name:'nam4',age:06},
    {name:'mam5',age:36},
    {name:'oam6',age:56},
]

var NewArr = obj.map(function(value,index) {
    value.address = "Ha Noi"
    return value
}) 
console.log(NewArr);

// for (let i = 0; i < obj.length; i++) {
//     obj[i].address = 'Ha Noi'
// }
// console.log(obj);

var obj1 = [1,2,3,4,5,6,7,8]
var newArr1 = obj1.map(function(value, index) {
    return value / 2
}) 
console.log(newArr1);

// var newArr2 = []
// for (let i = 0; i < obj1.length; i++) {
//     if (obj1[i] > 2) {
//         newArr2[newArr2.length] = obj1[i]
//     }
// }
// console.log(newArr2);

var newArr2 = obj1.filter(function(value, index) {
    return value > 2 && value < 8
})
console.log(newArr2);

arr = [1,2,5,15,10,25]
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 5 == 0) {
//         console.log('So dau tien chia het cho 5:', arr[i]);
//         break
//     }
// }

var newArr3 = arr.find(function(value) {
    return value % 5 == 0
})
console.log('So dau tien chia het cho 5:', newArr3);