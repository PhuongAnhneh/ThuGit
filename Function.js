function Cong() {
    var sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    return sum
}
var kq = Cong(1,2,3,4,5)
var kq1 = Cong(1,2,3,4,5)
var total = Cong(kq, -kq1)
console.log(total);

// Viet Function dau vao la 1 array -> tra ra 1 array da sap xep

var arr = [1,2,5,4,8,9]
function Up(array) {
    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array.length; j++) {
            if (array[i] < array[j]) {
                var tg = array[i]
                array[i] = array[j]
                array[j] = tg
            }
        }
    }
    return array
}
console.log(Up(arr));

var kq2 = arr.sort(function(a,b) {
    return a - b
})
console.log(kq2);