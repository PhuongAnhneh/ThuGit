var Tien = document.querySelector('.Tien')
var Choose = document.querySelector('select')
var Number = document.querySelector('.Number')
var Button = document.querySelector('button')

Choose.onchange = function() {
    Choose.value
}
Button.onclick = function OutPut() {
    Button.value = (Tien.value * (Choose.value / 100)) / Number.value
    alert(`Tong tien tip moi nguoi phai tra la: ${Button.value}`)
}