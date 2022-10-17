// var arr = [1,2,3,4,5]
// // Tao array moi so chan * 10, so le * 5

// let newArr = arr.map(function(value, index) {
//     if (value % 2 == 0) {
//         return value * 10
//     } else {
//         return value * 5
//     }
// })
// console.log('Day moi:',newArr);

// var array = [
//     {name: 'PA', age: 19},
//     {name: 'PA', age: 29},
//     {name: 'PA2', age: 19},
//     {name: 'PA3', age: 19},
//     {name: 'PA4', age: 19}
// ]
// var count = 0
// var data = array.find(function(value, index) {
//     if(value.name == 'PA' & count == 1) {
//         return true
//     } 
//     if(value.name == 'PA') {
//         return count++
//     }
// })
// console.log(data);

// var array1 = [
//     {name:'Ao', password: 'aaa'},
//     {name:'Quan', password: 'bbb'},
//     {name:'Vay', password: 'ccc'}
// ]
// var username = 'PA'
// var pass = 'paa'
// var data2 = array1.find(function(value) {
//     return value.name === username
// })

// if(data2) {
//     console.log('Da có tk');
// } else {
//     array1.push({user: username, pass})
// }
// console.log(array1);

// var data = [1,2,3,3]
// console.log(data.lastIndexOf(3));

// var array2 = [
//     {name:'Ao', password: 'aaa'},
//     {name:'Quan', password: 'bbb'},
//     {name:'Vay', password: 'ccc'}
// ]

// var data3 = array2.findIndex(function(index) {
//     return index.name == 'Ao'
// })
// console.log(data3);

// var array3 = [
//     {name:'Ao', quantity: 10},
//     {name:'Quan', quantity: 20},
//     {name:'Vay', quantity: 30}
// ]
// var sum = array3.reduce(function(oldValue, value, index){
//     return oldValue + value.quantity
// }, 0)
// console.log('Tong quantity:',sum);

// var array4 = [
//     {name:'Ao', quantity: 10, price: 11000},
//     {name:'Quan', quantity: 20, price: 12000},
//     {name:'Vay', quantity: 30, price: 13000}
// ]

// var sum = array4.reduce(function(oldValue, value) {
//     return oldValue + (value.quantity * value.price)
// }, 0)
// console.log(sum);

// var array5 = [1,7,3,5,0,2]
// array5.sort(function(a,b) {
//     return a - b
// })
// console.log('Sap xep tang dan', array5);

// array5.sort(function(a,b) {
//     return b - a 
// })
// console.log('Sap xep giam dan', array5);

var array6 = [
    {name:'PA', diem: 10},
    {name:'Luan', diem: 7},
    {name:'Trung', diem: 4},
    {name:'Dung', diem: 9}
]

array6.sort(function(a, b) {
    return a.diem - b.diem
})
console.log(array6);


