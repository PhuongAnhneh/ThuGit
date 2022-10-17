// var p = document.createElement('p');
// p.innerHTML = 'Hom nay la thu hai';
// p.setAttribute('class', 'para');
// document.querySelector('.container').append(p);

var container = document.querySelector('.container')
// for (let i = 0; i < 1000; i++) {
//     var square = document.createElement('div');
//     square.setAttribute('class', 'square');
//     container.prepend(square)
// }

// var container = document.querySelector('.container')
// var tBody = document.querySelector('.t-body')
// var product = [
//     {id: 0, name: 'Name', age: 19, address:'Ha Noi'},
//     {id: 1, name: 'Name', age: 19, address:'Ha Noi'},
//     {id: 2, name: 'Name', age: 19, address:'Ha Noi'},
//     {id: 3, name: 'Name', age: 19, address:'Ha Noi'},
//     {id: 4, name: 'Name', age: 19, address:'Ha Noi'},
//     {id: 5, name: 'Name', age: 19, address:'Ha Noi'}
// ]
// var html = ''
// for (let i = 0; i < product.length; i++) {
//     html = `
//         <tr>
//             <td>${product[i].id}</td>
//             <td>${product[i].name}</td>
//             <td>${product[i].age}</td>
//             <td>${product[i].address}</td>
//         </tr>
//     `
//     tBody.innerHTML += html
// }

var listItem = ['Ao phong', 'Quan sooc', 'Ao so mi', 'Ao dai']
var list = document.querySelector('.list_item')
var item = ''
for (let i = 0; i < listItem.length; i++) {
    item = `
        <li>${listItem[i]}</li>
    `
    list.innerHTML += item
}