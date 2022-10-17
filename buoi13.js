var heading = document.querySelector('.heading')
heading.innerHTML = 'youtube'
console.log(heading.innerHTML);


var input = document.querySelector('input');
console.log(input.value);

var img = document.querySelector('img');
img.setAttribute('src', 'https://i.pinimg.com/564x/f4/9d/21/f49d217cae2f110e8acee4ed1f120483.jpg')
console.log(img.getAttribute('src'));

var pass = document.querySelector('input');
pass.setAttribute('type', 'password')

    // C1
// function changeColor() {
//     var p = document.querySelector('p');
//     p.setAttribute('style', 'font-size: 32px')
//     p.style.backgroundColor = 'pink'
// }

    //C2
// var btn = document.querySelector('button');
// btn.onclick = function() {
//     var p = document.querySelector('p');
//     p.setAttribute('style', 'font-size: 32px')
//     p.style.backgroundColor = 'pink'
// }

    // C3
// var btn = document.querySelector('button');
// btn.addEventListener('click', function() {
//     var p = document.querySelector('p');
//     p.setAttribute('style', 'font-size: 32px')
//     p.style.backgroundColor = 'pink'
// })

// var button = document.querySelector('button'); 
// button.onclick = function() {
//     var p = document.querySelector('p');
//     p.style.fontFamily = 'Tahoma'
//     p.style.color = 'pink'
// }

// function alertP() {
//     var p = document.querySelector('p');
//     alert('Hi PA')
// }

var p = document.querySelector('p');
p.addEventListener()