var Space = document.querySelector('.space')
var Button = document.querySelectorAll('button')

for (let i = 0; i < Button.length; i++) {
    Button[i].onclick = function() {
        var a = Button[i].innerHTML
        switch(a) {
            case ('=') :
                Space.innerHTML = eval(Space.innerHTML )
                break
            case ('C') :
                Space.innerHTML = ''
                break
            case ('%') :
                Space.innerHTML = Space.innerHTML / 100
                break
            case ('@') :
                if(Space.innerHTML.length < 4) {
                    Space.innerHTML = Space.innerHTML.slice(0,1) + Space.innerHTML.slice(2,Space.innerHTML.length)
            }
                Space.innerHTML = Space.innerHTML.slice(0,Space.innerHTML.length-1)
                break
            default:
                Space.innerHTML += a
        }
        if(Space.innerHTML.length == 4) {
            Space.innerHTML = Space.innerHTML.slice(0,1) +','+ Space.innerHTML.slice(1,Space.innerHTML.length)
        }
    }
}

