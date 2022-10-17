// var dihoc = false
// var promise = new Promise(function(resolve, reject) {
//     setTimeout(function(){
//         if (dihoc) {
//             resolve('Da di hoc')
//         } else {
//             reject('Nghi hoc')
//         }
//     },1000)
// })

// .then(function(data) { // tra ve ket qua cua resolve
//     console.log(data);
// })
// .catch(function(error) { // tra ve ket qua cua reject
//     console.log(error);
// })

// .then(function(data) {
//     return new Promise(function(res,rej) {
//         rej(data)
//     })
//     .catch(function(err){
//         // console.log(23, err);
//     })
// })

// var promise1 = new Promise(function(resolve,reject) {
//     setTimeout(function() {
//         resolve (2)
//     })
// }, 1000)
// .then(function(data1) {
//     return new Promise(function(res,rej) {
//         setTimeout(function() {
//             res(data1)
//         }, 1000)
//     })
//     .then(function(data2) {
//         return new Promise(function(res,rej) {
//             if(data2 > 10) {
//                 res(true)
//             } else {
//                 rej(false)
//             }
//         })
//     })
// })
// .then(function(data3) {
//     console.log(data3);
// })
// .catch(function(err) {
//     console.log(err);
// })

// B6: áp dụng hợp lý, promise1 xử lý 2s retrun 3. promise2 xử lý 5s return 7
// 	Bài toán Cần data của 2 tác vụ trên, biết prmise1 vs promise2 không phụ thuộc nhau. 
// Viết chương trình sao cho kết quả trả về 3+7=10 trong thời gian ngắn nhất

var promise1 = new Promise(function(resolve,reject) {
    setTimeout(function() {
        resolve(3)
    })
},200)
var promise2 = new Promise(function(resolve,reject) {
    setTimeout(function() {
        resolve(7)
    })
},500)

Promise.all([promise1, promise2])
.then(function(data) {
    let sum = 0
    data.map((value) => {
        sum += value
        return sum 
    })
    console.log(sum);
})
