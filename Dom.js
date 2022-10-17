// Bài 1: Giao diện gồm một nút nhấn và một ô input. Nhập vào số bất kỳ, 
// nếu số đó là số chẵn thì thông báo “...là số chẵn”, ngược lại

// var Input = document.querySelector('.input')
// var Button = document.querySelector('.btn')

    // C1
// function Click() {
//     if (Input.value % 2 == 0) {
//         alert(`${Input.value} la so chan`)
//     }
//     else {
//         alert(`${Input.value} la so le`)
//     }
// }
// Button.addEventListener('click',Click)

    // C2
// Button.onclick =  function Click() {
//     if (Input.value % 2 == 0) {
//         alert(`${Input.value} la so chan`)
//     }
//     else {
//         alert(`${Input.value} la so le`)
//     }
// } 

// Bài 2: Giao diện gồm một nút nhấn và đoạn văn có nội dung bất kỳ. 
// Nhấn lần 1 đoạn văn ẩn, lần 2 đoạn văn hiện. 

// var Button = document.querySelector('.btn')
// var Text = document.querySelector('.PA')

// var count = 1
// Button.onclick = function Click() {
//     count++
//     if (count % 2 == 0) {
//         Text.style.display = 'none'
//     } else {
//         Text.style.display = 'block'
//     }
// }

// Bài 3: Giao diện có 2 nút nhấn và hình vuông, nhấn nút 1 hình vuông
//  to lên gấp đôi, nhấn nút 2, hình vuông nhỏ gấp đôi  

var Button1 = document.querySelector('.btn-1')
var Button2 = document.querySelector('.btn-2')
var Square = document.querySelector('.square')

Button1.onclick = function Click() {
    Square.style.transform = 'scale(2)'
    Square.style.transition = 'transform 2s ease'
}
Button2.onclick = function Click() {
    Square.style.transform = 'scale(0.5)'
    Square.style.transition = 'transform 2s ease'
}

// Bài 1:Giao diện gồm một nút nhấn và 2 ô input, tính chỉ số BMI của mỗi người dựa vào
// chiều cao và cân nặng. Biết công thức: bmi = cân nặng / ( chiều cao ^ 2 ) và các phần loại như sau:
// BMI <16: Gầy độ III
// 16 ≤ BMI < 17: Gầy độ II
// 17 ≤ BMI < 18.5: Gầy độ I
// 18.5 ≤ BMI < 25: Bình thường
// 25 ≤ BMI < 30: Thừa cân
// 30 ≤ BMI < 35: Béo phì độ 1
// 35 ≤ BMI < 40: Béo phì độ II
// BMI > 40: Béo phì độ III

// var Button = document.querySelector('.btn');
// var Input1 = document.querySelector('.input-1');
// var Input2 = document.querySelector('.input-2');

// Button.onclick = function Click() {
//     var BMI = ((Input1.value*100) / (Input2.value ** 2)) * 100
//     if (BMI < 16) {
//         alert('Gay do III');
//     } else if (BMI >= 16 && BMI < 17) {
//         alert('Gay do II');
//     } else if (BMI >= 17 && BMI < 18.5) {
//         alert('Gay do I');
//     } else if (BMI >= 18.5 && BMI < 25) {
//         alert('Binh thuong');
//     } else if (BMI >= 25 && BMI < 30) {
//         alert('Thua can');
//     } else if (BMI >= 30 && BMI < 35) {
//         alert('Beo phi do I');
//     } else if (BMI >= 35 && BMI < 40) {
//         alert('Beo phi do II');
//     } else {
//         alert('Beo phi do III');
//     }
// }

// Bài 2: Giao diện một nút nhấn và một đoạn văn, nhần nút đoạn văn thay đổi nội dung bất kỳ,
//  nhấn lần 2 quay lại lại nội dung cũ

// var Button = document.querySelector('.btn');
// var PA1 = document.querySelector('.PA-1');
// var PA2 = document.querySelector('.PA-2');

// Button.onclick = function Click() {
//     PA1.innerHTML = PA2.innerHTML
//     PA2.style.display = 'none'
// }

// Bài 3: cho giao diện có button left , button right và 1 thẻ div chứa ảnh bất kỳ, 
// mỗi khi click button left thì thẻ div di chuyển 100px sang trái, mỗi khi click 
// button right thì thẻ div di chuyển 100px sang phải

var Button1 = document.querySelector('.btn-l');
var Button2 = document.querySelector('.btn-r');
var Image = document.querySelector('.image');

Button1.onclick = function Click() {
    Image.style.marginLeft = '100px'
}
Button2.onclick = function Click1() {
    Image.style.marginLeft = '900px'
}

