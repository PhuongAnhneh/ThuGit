// Bài 1 :   
// ( price là giá ; store : số lượng còn lại ) 
// a ) Viết function tìm kiếm sản phẩm theo tên  . Nếu không tìm thấy thì thì in ra “Không tìm thấy “ 
// b ) Viết function tính tổng số sản phẩm có trong shop.
// c ) Viết function tính tiền sản phẩm và cập nhật số lượng sản phẩm còn lại trong shop . 
// đầu vào là chuỗi string tên sản phẩm , và số lượng mua . 
// Nếu số sản phẩm còn lại trong shop  =< 0 thì in ra “ Shop đã hết SP bạn cần mua “ 

var shop = [
	{id: 1, product:'Dày da  ', price: 259000, store: 100},
	{id: 2, product: 'Dép lào', price: 129000, store: 230},
	{id: 3, product: 'Dày cao gót', price: 749000, store: 130},
	{id: 4, product: 'Dép tông', price: 499000, store: 240},
] 
function Search(ten) {
    var a 
    for (let i = 0; i < shop.length; i++) {
        if (ten == shop[i].product) {
            a = shop[i]
            return a
        }
    }
    a = 'Khong tim thay san pham'
    return a
}
console.log('Tim san pham theo ten:', Search('Dép tông'));

// Bài 3  : 
// a ) Viết function tìm tướng theo Tên . Nếu không tìm thấy thì in ra “ Không tìm thấy tướng bạn cần “ 
// b ) Viết function theo giá tiền .  Nếu không tìm thấy thì in ra “ Không tìm thấy tướng bạn cần “ 
// c ) Viết function tìm kiếm tướng theo tộc . “ Không tìm thấy in ra không tìm thấy  “ 

var TFT= [
    { name:'yasuo', price: 5, toc:['Độc hành','Anh em']},
    { name:'yone', price: 5, toc:['Độc hành','Anh em']},
    { name:'lux', price: 7, toc:['Học giả','Tối thượng']},
    { name:'Braum', price: 4, toc:['Vệ sĩ','Băng đảng']},
    { name:'chogat', price: 3, toc:['Khổng lồ','Đột biến']},
    { name:'Galio', price: 5, toc:['Khổng lồ','vệ sĩ']},
    { name:'Ahri', price: 4, toc:['Pháp sư','Băng đảng']},
    { name:'Diana', price: 1, toc:['Băng đảng','Sát thủ']},
    ]

function Search1(ten) {
    var a 
    for (let i = 0; i < TFT.length; i++) {
        if (ten == TFT[i].name) {
            a = TFT[i]
            return a
        }
    }
    a = 'Khong tim dc tuong' 
    return a
}
console.log('Tim tuong theo ten:', Search1('Diana'));

function Search2(gia) {
    var a 
    var arr = []
    var count = 0
    for (let i = 0; i < TFT.length; i++) {
        if (gia == TFT[i].price) {
            count += 1
            a = TFT[i]
            arr[arr.length] = TFT[i]
        }
    }
    if (count > 0) {
        return arr 
    }
    else {
        return 'Khong tim thay'
    }
} 
console.log('Tim tuong theo gia:', Search2(2));

function Search3(toc) {
    var a 
    var arr = []
    var count = 0
    for (let i = 0; i < TFT.length; i++) {
        for (let j = 0; j < TFT[i].toc.length; j++) {
            if (toc == TFT[i].toc[j]) {
                count += 1
                a = TFT[i]
                arr.push(a)
            }
        }
    }  
    if (count > 0) {
        return arr
    } else {
        return 'Khong tim thay'
    }
}
console.log('Tim kiem tuong theo toc:', Search3('Độc hành'));

// Bài 4 :  
// a ) Viết function tìm tướng theo tên .  Nếu không tìm thấy thì in ra “ Không tìm thấy tướng của bạn  “ 
// b ) Viết function tìm tướng theo Vị trí .  Nếu không tìm thấy thì in ra “ Không tìm thấy tướng của bạn  “ 
// c ) Viết function tính tổng sức mạnh của 2 tướng bất kỳ  . 
// d ) Viết function tính tổng sức mạnh của một đội 5 tướng. 

var LOL =[
{ name:'yasuo', power: 50000,viTri:'Mid'},
{ name:'aphelios', power: 43000,viTri:'ADC'},
{ name:'Yone', power: 45000,viTri:'Mid'},
{ name:'Vayle', power: 12000,viTri:'ADC'},
{ name:'Nasus', power: 30000,viTri:'Top'},
{ name:'Jayce', power: 20000,viTri:'Top'},
{ name:'LeeSin', power: 41000,viTri:'Jungle'},
{ name:'Nunu', power: 15000,viTri:'Jungle'},
{ name:'Threst', power: 23000,viTri:'SP'},
{ name:'Lulu', power: 25000,viTri:'SP'},
]

function Sum() {
    var a 
    a = LOL[0].power + LOL[1].power 
    return a
}
console.log('tổng sức mạnh của 2 tướng bất kỳ:', Sum());

function Sum1() {
    var a 
    for (let i = 0; i < LOL.length; i++) {

    }
}

let newArr = []
let newArr1 = []
for (let i = 0; i < LOL.length; i++) {
    if(newArr1.length > 0) {
        for (let j = 0; j < newArr1.length; j++) {
            if (LOL[i].viTri !== newArr1[j]) {
                newArr.push(LOL[i])
                newArr1.push(LOL[i].viTri)  
            }
        }
    }else {
        newArr1.push(LOL[i].viTri)
        newArr.push(LOL[i])
    }
}

// var total = 0;
// for (let i = 0; i < newArr.length - 1;i++) {
//     for (let j = 0; j < LOL.length;j++) {
//         if (newArr[i] !== newArr[i + 1]) {
//             total += LOL[j].power
//         }
//     }
// }