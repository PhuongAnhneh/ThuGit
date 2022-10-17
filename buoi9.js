var year = 2022
var month = 1
var day = 1
var date = new Date()
console.log(date.getDay());

date.setDate(30)
console.log(date);

console.log(Math.floor(Math.random() * 101));

var demo = {
    name: 'PA',
    age: 19,
}
var {name, age} = demo
console.log(name, age);

var arr = [1,2,3,4]
var [a, b] = arr
console.log(a, b);

var [a, ...rest] = arr
console.log(rest);

var arr1 = [1,2,3]
var arr2 = [...arr1]
console.log(arr2 == arr1);

