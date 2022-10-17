// Bài 1: cho array = [1,5,6,8,7,9]	
// hãy copy array trên ra array mới newArr
// trong newArr hãy thêm số 100 vào cuối sao cho array không bị thay đổi

// array = [1,5,6,8,7,9,1,2,3,4]
// newArr = [...array]
// var new1 = newArr.pop()
// console.log(new1);

// for(var i = 10; i < 20; i++){
// }
// console.log(i);

// Bài 3: 
// -) Cho array1 = [1,2,3,4,[123]]
// Hãy tạo ra string từ array1 và biến đổi lại thành kiểu dữ liệu ban đầu
// Hãy tạo ra array2 là copy của array1 và thêm 10 giá trị bất kỳ trong khoảng từ 0 đến 20 vào array2

// var array1 = [1,2,3,4,[123]]
// // var x = JSON.stringify(array1)
// // console.log(x);
// // var y = JSON.parse(x)
// // console.log(y);

// var array2 = [...array1]
// for(let i = 0; i < 10; i++) {
//     array2.push(Math.floor((Math.random() * 5)+3))
// }
// console.log(array2);

// Bài 4: 
// obj1 = [
//     {ten: 'nam', soDiem: 10, vung: 1},
//     {ten: 'linh', soDiem: 6, vung: 3},
//     {ten: 'phan', soDiem: 7, vung: 2},
//     {ten: 'pham', soDiem: 8, vung: 1},
// ]

// vung = [
//     {vung: 1, cong: 0},
//     {vung: 2, cong: 1},
//     {vung: 3, cong: 2},
// ]
// // Hãy tạo danh sách điểm thi sau khi cộng điểm vùng sao cho dữ liệu ở obj1 không thay đổi

// for(let i = 0; i < obj1.length; i++) {
//     for(let j = 0; j < vung.length; j++) {
//         if(obj1[i].vung == vung[j].vung) {
//             if (vung[j].vung == 1) {
//                 obj1[i].diemThi = obj1[i].soDiem 
//             }
//             if (vung[j].vung == 2) {
//                 obj1[i].diemThi = obj1[i].soDiem + 1
//             }
//             if (vung[j].vung == 3) {
//                 obj1[i].diemThi = obj1[i].soDiem + 2
//             }
//         }
//     }
// }
// console.log(obj1);

// Bài 7:
var array = [1,3,2,4,4,1,2,3,5,7,9,4,1,2,3]

// hãy tạo array mới cho biết số lần lập lại của các phần tử

// => [{value: 1, rep : 3}, {value: 2, rep: 3}, ....]

array.sort(function(a, b) {
    return a - b
})
// console.log(array);
let count = 1
for (let i = 0; i < array.length; i++) {
    if (array[i] === array[i + 1]) {
        count++
    }
    else {
        console.log(`so ${array[i]} xuat hien ${count} lan`)
        count = 1
    }
}
