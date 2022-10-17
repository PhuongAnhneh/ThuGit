function changeColor() {
    var body = document.querySelector('body')
    var r = Math.floor(Math.random() * 256)
    var g = Math.floor(Math.random() * 256)
    var b = Math.floor(Math.random() * 256)

    body.setAttribute('style', `background-color:rgb(${r},${g},${b})`)
}