// 1. 
// a, hay viet function đăng ký tài khoản
// function có đầu vào là username và password
// nếu username khác rỗng, password >= 8 ký tự thì thêm vào data
// b, viet function đăng nhập có đầu vào là username và password
// nếu username, password khớp với data thì thông báo thành công
// nếu sai username thì báo sai username
// nếu sai password thì báo sai password 
// c, viet function changePass có đầu vào là username, password, newPass
// nếu username, password khớp với data thì đổi password thành newPass
// nếu sai username thì báo sai username
// nếu sai password thì báo sai password

var data = [
    {username: 'thanhTung', password: 'tung1234'},
    {username: 'tranganh', password: 'trang1234'},
]

function acc(username, password) {
    var data1 = {
        username: username,
        password: password
    }
    
    if (username != ' ' && password.length >= 8) {
        data.push(data1) 
    }
    return 9
}
 acc('gy','ujuijijijj')
console.log(data);

function dangnhap(taikhoan, matkhau, array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].username == taikhoan && array[i].password == matkhau) {
            return 'dang nhap thanh cong'
        }

        if (array[i].password !== matkhau) {
            if (array[i].username !== taikhoan) {
                return 'sai het'
            }
            return 'sai mk'
        }
        if (array[i].username !== taikhoan) {
            return 'sai tk'
        }
    }
}
var b = dangnhap('thnhTung', 'tung14', data)
console.log(b);

function changePass(username, password, newPass) {
    for (let i = 0; i < data.length; i++) {
        if (username == data[i].username && password == data[i].password) {
            data[i].password = newPass
        }
        if (username !== data[i].username) {
            return 'sai username'
        }
        if (password !== data[i].password) {
            return 'sai password'
        }
    }
}
(changePass('thanhTung', 'tung1234', 'asdadsa'));
console.log(data);

// 2.
// a, hãy update lại store của shop
// b, hãy thêm tổng tiền cho từng order 
//     // { id: 1, listProduct: [...], total: ...}

// c, hãy viết function có đầu vào là array danh sách các đơn hàng và array danh sách hàng hóa 
//     function trả về tổng doanh thu của shop dựa trên đầu vào 

// c, hãy viết function createOrder có đầu vào là danh sách hàng hóa cần mua
//     // VD [ {idSP: 1, buy: 2}, {idSP: 2, buy: 1}]

//     function trả ra object chứa thông tin của order vừa tạo
//     // { id: 1, listProduct: [...], total: ...}

//     function cũng ghi giảm lượng tồn kho tương ứng với order vừa tạo
//     function cũng cập nhật lại doanh thu cho shop

// d, Hãy viết function cancelOrder có đầu vào là id của order muốn hủy
    
//     Nếu id được tìm thấy
//         function sẽ loại bỏ order khỏi orderData 
//         function cập nhật lại doanh thu
//         function sẽ cập nhật lại tồn kho
//         function trả về thông báo hủy hàng thành công

//     Nếu id không khớp
//         thông báo đơn hàng k tồn tại

var orderData = [
    { id: 1, listProduct: [ {idSP: 1, buy: 2}, {idSP: 2, buy: 1}]}, 
    { id: 2, listProduct: [ {idSP: 1, buy: 1}, {idSP: 2, buy: 1}]},
]
var productData = [
    {idSP: 1, price: 500000, store: 100}, 
    {idSP: 2, price: 300000, store: 200},
    {idSP: 3, price: 200000, store: 300},
]
var income = 0

for (let i = 0; i < orderData.length; i++) {
    for(let k = 0; k < orderData[i].listProduct.length; k++) {
        for (let j = 0; j < productData.length; j++) {
            if(productData[j].idSP == orderData[i].listProduct[k].idSP) {
                productData[j].store = productData[j].store - orderData[i].listProduct[k].buy
            } 
        }
    }
}
console.log(productData);

for (let i = 0; i < orderData.length; i++) {
    var tong = 0
    for(let k = 0; k < orderData[i].listProduct.length; k++) {
        for (let j = 0; j < productData.length; j++) {
            if(productData[j].idSP == orderData[i].listProduct[k].idSP) {
                tong += productData[j].price * orderData[i].listProduct[k].buy
                orderData[i].total = tong
            } 
        }
    }
}
console.log(orderData);

// c, hãy viết function có đầu vào là array danh sách các đơn hàng và array danh sách hàng hóa 
//     function trả về tổng doanh thu của shop dựa trên đầu vào 





