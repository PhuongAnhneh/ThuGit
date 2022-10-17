var sanPham = [
    {
        ten: "áo somi", gia: 100000,
        doanhSo: 100,
    },
    {
      ten: "áo khoác", gia: 400000,
      doanhSo: 50,
    },
    {
      ten: "áo phông", gia: 150000,
      doanhSo: 200,
    },
  ];
//   Hãy viết function để xử lý data trên 
//   a, function trả về tên hàng hóa có danh số cao nhất trong shop
//   b, function trả về tên hàng hóa có danh số thấp nhất trong shop
//   c, function trả về tổng doanh thu của shop, biết doanh thu = doanh so * gia ban


// B1: lay ra doanh so
// a
function revMax() {
    var max = 0
    var total;
    for (let i = 0; i < sanPham.length; i++) {
        if (sanPham[i].doanhSo > max) {
            max = sanPham[i].doanhSo
            total = sanPham[i].ten
        }
    }
    return total
}
console.log(revMax());

// c
// B1: Tinh dc doanh thu cua tung san pham
function revShop() {
    var revProduct = 0
    var revShop1 = 0
    for (let i = 0; i < sanPham.length; i++) {
        revProduct = sanPham[i].doanhSo * sanPham[i].gia
// B2: Cong cac san pham lai
        revShop1 += revProduct
    }
    return revShop1
}
console.log(revShop());

// Bài 1 : 
// ( price là giá ; store : số lượng còn lại ) 
// a ) Viết function tìm kiếm sản phẩm theo tên  . Nếu không tìm thấy thì thì in ra “Không tìm thấy “ 
// b ) Viết function tính tổng số sản phẩm có trong shop.
// c ) Viết function tính tiền sản phẩm và cập nhật số lượng sản phẩm còn lại trong shop . 
// đầu vào là chuỗi string tên sản phẩm , và số lượng mua . 
// Nếu số sản phẩm còn lại trong shop  =< 0 thì in ra “ Shop đã hết của bạn cần mua “

var shop = [
	{id: 1, product:'Dày da  ', price: 259000, store: 100},
	{id: 2, product: 'Dép lào', price: 129000, store: 230},
	{id: 3, product: 'Dày cao gót', price: 749000, store: 130},
	{id: 4, product: 'Dép tông', price: 499000, store: 240},
] 

function SearchProduct(a) {
    var b
    for (let i = 0; i < shop.length; i++) {
        if (a == shop[i].product) {
            b = shop[i].product
        }
        if (a != shop[i].product) {
            b = 'Khong co san pham'
        }
    }
    return b
}
console.log(SearchProduct('Dép tông'));

function SumSP() {
    var sum = 0
    for (let i = 0; i < shop.length; i++) {
        sum +=shop[i].store
    }
    return sum
}
console.log(SumSP());

// c ) Viết function tính tiền sản phẩm và cập nhật số lượng sản phẩm còn lại trong shop .  
// đầu vào là chuỗi string tên sản phẩm , và số lượng mua . 
// Nếu số sản phẩm còn lại trong shop  =< 0 thì in ra “ Shop đã hết của bạn cần mua “
// tinh tong => price * soLuong => 
// ton = store - soluong
// if (ton <= 0) {het}
function PaySP(tenSP, soLuong) {
    var sumMoney = 0
    var a
    for (let i = 0; i < shop.length; i++) {
        if (tenSP == shop[i].product) {
            sumMoney = shop[i].price * soLuong
            shop[i].store = shop[i].store - soLuong
            a = {TienPhaiTra: sumMoney, SoLuongHangTon: shop[i].store}
        }
        if (shop[i].store <= 0) {
            a = 'Khong co hang'
        }
    }
    return a
}
console.log(PaySP('Dày cao gót',140));


