var Input = document.querySelector('.input')
var Button = document.querySelector('.btn')
var Ul = document.querySelector('.list-item')
const List = []
var html =''

function render() {
    for (let i = 0; i < List.length; i++) {
        html = `
            <li>
                ${List[i]}
                <button onclick="btn_delete(${i})">Delete</button>
                <button onclick="btn_edit(${i})">Edit</button>
            </li>
        `
        Ul.innerHTML += html
    }
}
render()

function addItem() {
    if (Input.value !== '') {
        if (!List.includes(Input.value)) {
            List.push(Input.value)
            Ul.innerHTML = ''
            render()
            Input.value = ''
            Input.focus()
        }
    }
}

function btn_delete(index){
    List.splice(index,1)
    Ul.innerHTML = ''
    render()
} 

function btn_edit(index) {
    Input.value = List[index]
    Ul.innerHTML = ''
    render()
    Button.innerHTML = 'Update'
    Button.setAttribute('onclick', 'Update()')
    Input.focus()
}
function Update(index) {
    List.splice(index,1,Input.value)
    Ul.innerHTML = ''
    render()
    Button.innerHTML = 'Add'
    Button.setAttribute('onclick', 'addItem()')
}


