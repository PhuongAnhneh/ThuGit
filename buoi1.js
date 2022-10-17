var array = [1,6,8,7,6,9]

console.log(array.length)

console.log(array[0], array[5])

array[array.length] = 5
console.log(array[array.length-1])

array[array.length] = 5
console.log(array)

array[0] = 10;
array[array.length] = 10
console.log(array);