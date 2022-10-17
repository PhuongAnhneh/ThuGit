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

function search(b) {
    var a
    for (let i = 0; i < shop.length; i++) {
        if (b == shop[i].product) {
            a = shop[i]
        }
        if (b != shop[i].product) {
            a = 'khong tim thay'
        }
    }
    return a
}
console.log(search('Dép  tông'));

function tongSp() {
    var sum = 0
    for (let i = 0; i < shop.length; i++) {
        sum += shop[i].store
    }
    return sum
}
console.log('Tong san pham cua shop:', tongSp());

var shop = [
	{id: 1, product:'Dày da  ', price: 259000, store: 100},
	{id: 2, product: 'Dép lào', price: 129000, store: 230},
	{id: 3, product: 'Dày cao gót', price: 749000, store: 130},
	{id: 4, product: 'Dép tông', price: 499000, store: 240},
] 
function tienSp(ten, soLuong) {
    var a 
    for (let i = 0; i < shop.length; i++) {
        if (ten == shop[i].product) {
            tien = soLuong * shop[i].price
            shop[i].store = shop[i].store - soLuong
            a = {TienSP: tien, SPconlai: shop[i].store}
        }
        if (ten != shop[i].product) {
            a = 'Khong co san pham'
        }
        if (soLuong <= 0) {
            a = 'Shop het san pham ban can mua'
        }
    }
    return a
}
console.log(tienSp('Dép tông', 10));

// Bai 2:
// a ) Viết function tìm sản phẩm tìm kiếm sản phẩm theo tên . nếu không tìm thấy thì in ra “ Không tìm thấy “
// b ) viết function tìm kiếm sản phẩm theo tên và theo màu .   nếu không tìm thấy thì in ra “ không tìm thấy  “ .
// c ) Viết function tìm kiếm sản phẩm theo khoảng giá .10-15tr , 
// Ví dụ người dùng tìm kiếm sản phẩm từ 10 đến 15 tr thì in ra các sản phẩm từ 10 đến 15 tr .. 

var  iphone= [
	{id: 1, product:'Iphone 12 ', price: 9990000, store: 120, color:'red'},
    {id: 2, product:'Iphone 12 ', price: 12590000, store: 121, color:'black'},
    {id: 3, product:'Iphone 12 ', price: 13590000, store: 120, color:'green'},
	{id: 4, product: 'iphone 13 Pro', price: 17900000, store: 230 , color:'black'},
    {id: 5, product: 'iphone 13 Pro', price: 19900000, store: 230 ,color:'red'},
    {id: 6, product: 'iphone 13 Pro', price: 14900000, store: 230,color:'blue'},
	{id: 7, product: 'iphone 13', price: 12490000, store: 220,color:'black'},
    {id: 8, product: 'iphone 13', price: 24900000, store: 220,color:'white'},
    {id: 9, product: 'iphone 13', price: 24900000, store: 220,color:'blue'}
] 

function Search(ten) {
    var a 
    var arr = []
    for (let i = 0; i < iphone.length; i++) {
        if (ten == iphone[i].product) {
            a = iphone[i]
            arr[arr.length] = iphone[i]
        }
        if (ten != iphone[i].product) {
            arr = 'Khong tim thay'
        }
    }
    return arr
}
console.log(Search('ipho13'));

function Search1(ten, mau) {
    var a 
    for (let i = 0; i < iphone.length; i++) {
        if (ten == iphone[i].product && mau == iphone[i].color) {
            a = iphone[i]
        }
        if (ten != iphone[i].product && mau != iphone[i].color) {
            a = 'Khong tim thay'
        }
    }
    return a
}
console.log(Search1('iphone 13', 'white'));

function Search2(gia1, gia2) {
    var a 
    var arr1 = []
    for (let i = 0; i < iphone.length; i++) {
        if (gia1 <= iphone[i].price && iphone[i].price <= gia2) {
            a = iphone[i]
            arr1[arr1.length] = iphone[i]
        }
        if (gia1 >= iphone[i].price && iphone[i].price >= gia2) {
            arr1 = 'k'
        }
    }
    return arr1
}
console.log(Search2(10000000, 15000000));

// Bai 3:
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

function SearchT(ten) {
    var a 
    for(let i = 0; i < TFT.length; i++) {
        if (ten == TFT[i].name) {
            a = TFT[i]
        }
        if (ten != TFT[i].name) {
            a = 'Khong tim dc tuong cua ban'
        }
    }
    return a
}
console.log('Tim tuong theo ten:', SearchT('Diana'));

function SearchG(gia) {
    var a1
    var arr2 = []
    kt=false;
    for(let i = 0; i < TFT.length; i++) {
        if (gia == TFT[i].price) {
            console.log('TFT');
            arr2[arr2.length] = TFT[i].name
            kt=true
        }
      
    }
    if ( kt==true){
        return arr2
    }
    if( kt==false){
        return 'k co'
    }
}
console.log('Tim tuong theo gia:', SearchG(51));
    

// Bai 5:
// a ) Viết function truy vấn điểm vùng . theo mã Vùng . 
// b ) Viết function truy vấn điểm vùng theo tên của học Sinh .
// c ) Viết function tính điểm thi. theo tên của học sinh .
// Biết rằng điểm tổng = Điểm Toán + Điểm Văn + Điểm Anh + Điểm Vùng.
// d ) Viết function cho biết học sinh đỗ tốt nghiệp hay không. 
// Biết rằng để tốt nghiệp  điểm tổng > = 15 và không có môn nào < = 1.. 
// e ) Viết function cho biết học sinh đã đỗ trường nào  . theo tên của học sinh. 

var  hocSinh = [
    { name:'A', age:18,queQuan:'Hà Nội',maVung:'V001'},
    { name:'B', age:18,queQuan:'Tây Bắc',maVung:'V002'},
    { name:'C', age:19,queQuan:'Hưng Yên',maVung:'V003'},
    { name:'D', age:18,queQuan:'Thái Bình',maVung:'V003'},
    ]
    
var diemVung = [
    {maVung:'V001',ten:['Hà Nội'],diem:2},
    {maVung:'V002',ten:['Hà Giang','Tây Bắc','Mù Cang Trải'],diem:2.5},
    {maVung:'V003',ten:['Thái Bình','Hưng Yên'],diem:1},
    ]
    
var diemThi= [
    {name:'A', Toan:9, Van:6,anh:7},
    {name:'B', Toan:10, Van:8,anh:9},
    {name:'C', Toan:7, Van:6,anh:5},
    {name:'D', Toan:7, Van:10,anh:7},
    ]
var truong = [
    {ten:'Chu Văn An',diemChuan:25},
    {ten:'Amsterdam',diemChuan:27},
    {ten:'Nguyễn Du',diemChuan:23},
    ]
// a
function Diem(MaV) {
    var a
    for (let i = 0; i < hocSinh.length; i++) {
        for (let j = 0; j < diemVung.length; j++) {
            if (MaV == diemVung[j].maVung) {
                a = diemVung[j].diem
                return a
            }
        }
    }
    a = 'Khong co thong tin'
    return a
}
console.log('Diem vung theo ma vung:', Diem('V002'));

// b
function Diem1(Ten) {
    var a 
    for (let i = 0; i < hocSinh.length; i++) {
        for (let j = 0; j < diemVung.length; j++) {
            if (Ten == hocSinh[i].name) {
                if (hocSinh[i].maVung == diemVung[j].maVung) {
                    a = diemVung[j].diem
                    return a
                }
            }
        }
    }
    a = 'Khong thay hoc sinh nay'
    return a
}
console.log('Diem vung theo ten:', Diem1('R'));

// c cach 1
function Diem2(tenn) {
    var a 
    for (let i = 0; i < hocSinh.length; i++) {
        for (let j = 0; j < diemVung.length; j++) {
            for (let k = 0; k < diemThi.length; k++) {
                if (tenn == diemThi[k].name) {
                    if (hocSinh[i].maVung == diemVung[j].maVung) {
                        if (hocSinh[i].name == diemThi[k].name) {
                            a = diemVung[j].diem + diemThi[k].Toan + diemThi[k].Van + diemThi[k].anh
                            return a
                        }
                    }
                }
            }
        }
    }
    a = 'Khong co hoc sinh nay'
    return a
}
console.log('Diem cua hoc sinh:', Diem2('V'));

// c Cach 2
function Diem3(ten) {
    var a 
    for (let i = 0; i < diemThi.length; i++) {
        if (ten == diemThi[i].name) {
            a = diemThi[i].Toan + diemThi[i].Van + diemThi[i].anh + Diem1(ten)
        }
    }
    return a
}
console.log('Diem cua hoc sinh:', Diem3('C'));

// d 
function Graduate(name) {
    var a 
    for (let i = 0; i < diemThi.length; i++) {
        if (name == diemThi[i].name) {
            if (Diem3(name) >= 15 && diemThi[i].Toan > 1 && diemThi[i].Van > 1 && diemThi[i].anh > 1) {
                a = 'Do tot nghiep'
                return a
            }
        }
    }
    a = 'Khong do'
    return a
}
console.log('Hoc sinh:', Graduate('B'));
  
// e ) Viết function cho biết học sinh đã đỗ trường nào  . theo tên của học sinh. 

function School(ten) {
    var a 
    for (let i = 0; i < diemThi.length; i++) {
        for (let j = 0; j < truong.length; j++) {
            if (ten == diemThi[i].name) {
                if (Diem3(ten) >= 23 && Diem3(ten) < 25) {
                    a = truong[2].ten
                    return a
                }
                else if (Diem3(ten) >= 25 && Diem3(ten) < 27) {
                    a = truong[0].ten
                    return a
                }
                else if (Diem3(ten) >= 27) {
                    a = truong[1].ten
                    return a
                }
            }
        }
    }
    a = 'khong co truong'
    return a  
}
console.log('Ten truong:', School('D'));

// Bài 6: 
// -) Hãy viết 1 function in ra dãy các số nguyên tố và vị trí của nó trong array  
// -) Tính tổng các số nguyên tố trong array  và trung bình cộng của các số trong array 
// -) Viết function để tính tích của các số nguyên tố trong dãy array

var array = [1,4,3,2,5,7,10,5,9,11,23,35,71,43] 

function check(n) {
    for (let i = 2; i <= Math.sqrt(n);i++) {
        if (n % i == 0) return false;
    }
    return n > 2;
}
let arrPrimeNum = []
let arrPrime = []
for (let i = 0; i < array.length; i++) {
    if (check(array[i])) {
        arrPrime[arrPrime.length] = i
        arrPrimeNum[arrPrimeNum.length] = array[i]
    }
}
console.log('cac so nguyen to trong array la:', arrPrimeNum)
console.log("vi tri cua cac so nguyen to la : ",arrPrime);

