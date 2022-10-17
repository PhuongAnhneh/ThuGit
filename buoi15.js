var Input = document.querySelector('.input')
var List = document.querySelector('.list-item')
const list = []
var html = ''
function render() {
    for (let i = 0; i < list.length; i++) {
        html = `
            <div>
            ${list[i]}
            <button class="btn-danger" onclick = "editItem(${i})">Edit</button>
            <button class="btn-infor" onclick = "deleteItem(${i})">Delete</button>
            </div>
        `
        List.innerHTML += html
    }
}
render()
function addItem() {
    var Input = document.querySelector('.input').value;
    // console.log(Input);
    if (Input !== '') {
        if (!list.includes(Input)) {
            list.push(Input)
            List.innerHTML = ''
            render()
        }
    }
    Input = '';
    Input.focus()
    // list.push(Input)
    // console.log(list);
    // render()
}

function deleteItem(index) {
    list.splice(index,1)
    List.innerHTML = ''
    render()
}

// function editItem(index) {
//     document.querySelector('.input').value = list[index]
//     var Btn = 
// }