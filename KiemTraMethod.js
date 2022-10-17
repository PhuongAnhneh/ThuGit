// B1,
// var data = [1,2,3,1,2,3,4,5,6,5,4,6, '1’, ‘2’ , ‘2’]	
// 1đ	viết function có dầu vào là array và return ra array mới chứa các phần tử 
// của array đầu vào không lặp lại (phân biệt cả string và number)
// 1đ	hãy cho biết các phần tử trong array trên lặp lại bao nhiêu lần
// ];

var data = [1,2,3,1,2,3,4,5,6,5,4,6, '1', '2' , '2']	
function Number(arr) {
    var data1 = []
    var data2 = []
    arr.map(function(value) {
        if (typeof value == 'number') {
            data1.push(value)
        }
        if (typeof value == 'string') {
            data2.push(value)
        }
    })
    var data3 = [...new Set(data1)]
    var data4 = [...new Set(data2)]
    var data5 = data3.concat(data4)
    return data5
}
console.log('Array khong lap lai:', Number(data));

var NewData = Number(data)
var data6 = NewData.map(function(value) {
    var count = 0
    data.map(function(value1) {
        if (value === value1) {
            count += 1
        }
    })
    if (count != 0) {
        return {
            So: value,
            lap_lai: count
        }
    }
})
console.log(data6);

// B2
// a, 1đ thêm trường tuổi cho từng nhân viên (để ý ngày tháng)
// b, 1đ thêm trường thâm niên cho từng nhân viên (để ý ngày tháng).
// c, 1đ thêm trường lương cho từng nhân viên biết lương năm sau tăng 'n'% so với năm trước

var nhanVien = [
	{ ngaySinh: "21/1/1968", chucVu: "truong phong", join: "12/2/2000" },
	{ ngaySinh: "20/10/1985", chucVu: "pho phong", join: "20/12/2015" },
	{ ngaySinh: "23/5/1990", chucVu: "leader", join: "6/6/2019" },
	{ ngaySinh: "23/5/1998", chucVu: "nhan vien", join: "6/7/2020" },
];  
var bangLuong = [
	{ chucVu: "truong phong", luongKhoiDiem: 1000, n: 10 },
	{ chucVu: "pho phong", luongKhoiDiem: 700, n: 7 },
	{ chucVu: "leader", luongKhoiDiem: 500, n: 5 },
	{ chucVu: "nhan vien", luongKhoiDiem: 400, n: 4 },
]

function birthday(str) {
    var Dao_nguoc = str.split('/').reverse().join('-')
    var date = new Date(Dao_nguoc)
    return date
}
var TuoiNV = nhanVien.map(function(value) {
    var Nam_nay = new Date()
    var Nam_sinh = birthday(value.ngaySinh)
    console.log(Nam_sinh);
    value.tuoi = Nam_nay.getFullYear() - Nam_sinh.getFullYear()
    if(Nam_nay.getMonth() > Nam_sinh.getMonth()) {
        value.tuoi -= 1
    }
    if(Nam_nay.getMonth() < Nam_sinh.getMonth()) {
        value.tuoi 
    }
    if(Nam_nay.getMonth() == Nam_sinh.getMonth()) {
        if (Nam_nay.getDate() > Nam_sinh.getDate()) {
            value.tuoi -= 1
        }
        if (Nam_nay.getDate() <= Nam_sinh.getDate()) {
            value.tuoi 
        }
    }
    return value
})
console.log(TuoiNV);

var ThamNien = nhanVien.map(function(value) {
    var Nam_nay = new Date()
    var Nam_lam_viec = birthday(value.join)
    var Tham_nien = Nam_nay.getFullYear() - Nam_lam_viec.getFullYear()
    value.ThamNien = Tham_nien
    return value
})


// console.log(ThamNien);

nhanVien.forEach(function(value) {
    bangLuong.forEach(function(value1) {
        if (value.chucVu == value1.chucVu) {
            a = value1.luongKhoiDiem
            for(var i = 0; i < value.ThamNien; i++) {
            a += value1.n * a / 100
            }
        value.Luong = a
        }
    })
})
console.log(nhanVien);

// B3 
// var user = ‘le thanh tung’
// a, 1đ	hãy dùng các method chuyển đổi tên user thành ‘Le Thanh Tung’
// b, 1đ	cho list user
// var list = [‘nguyen van linh’, ‘le hai duong’, ‘hoang cong huy’]
// Hãy viết hoa chữ cái đầu trong tên =>  [‘Nguyen Van Linh’, ‘Le Hai Duong’, ‘Hoang Cong Huy’]

var user = 'le thanh tung'

var a = user.split(' ')
var b = a.map(function(value) {
    return value[0].toUpperCase() + value.slice(1)
})
var c = b.join(' ')
// console.log(c);


var list = ['nguyen van linh', 'le hai duong', 'hoang cong huy']

var Name = list.map(function(value) {
    var a1 = value.split(' ')
    var a2 = a1.map(function(value1) {
        return value1[0].toUpperCase() + value1.slice(1)
    })
    var a3 = a2.join(' ')
    return a3
})
// console.log(Name);

// B4
// a, 1đ	Hãy viết function tìm kiếm sản phẩm theo giá
// function có đầu vào là price1 và price2 
// function trả về các sản phẩm trong khoảng giá đầu vào và đang còn hàng

// b, 1đ 	hãy viết function tìm kiếm sản phẩm theo tên
// function có đầu vào là 1 string
// function trả về các sản phẩm đang còn hàng có chứa string trong tên không phân biệt chữ hoa, thường

// c, 1đ	hãy viết function tìm kiếm theo yêu cầu người dùng
// function có đầu vào là object
// function trả về kết quả tìm kiếm theo các trường trong object
// VD 
// tìm theo object {product: ‘ip’, color: ‘blue’, max: 20000000, min: 15000000 }
// thì nhận về các sp có chữ ip trong tên không phân biệt chữ hoa, thường đồng thời có màu blue, giá trong khoảng 15 - 20tr và đang còn hàng
// )
// tìm theo object {product: ‘ip’, color: ‘blue’}

var  iphone= [
	{id: 1, product:'Iphone 12 ', price: 9990000, store: 120, color:'red'},
    {id: 2, product:'Iphone 12 ', price: 12590000, store: 121, color:'black'},
    {id: 3, product:'Iphone 12 ', price: 13590000, store: 120, color:'green'},
	{id: 4, product: 'iphone 13 Pro', price: 17900000, store: 230 , color:'black'},
    {id: 5, product: 'iphone 13 Pro', price: 19900000, store: 230 ,color:'red'},
    {id: 6, product: 'iphone 13 Pro', price: 14900000, store:0,color:'blue'},
	{id: 7, product: 'iphone 13', price: 12490000, store: 0,color:'black'},
    {id: 8, product: 'iphone 13', price: 24900000, store: 220,color:'while'},
    {id: 9, product: 'iphone 13', price: 24900000, store: 220,color:'blue'},
    {id: 10, product: 'Dell 321654', price: 24900000, store: 220,color:'blue'},
    {id: 11, product: 'Asus 1111', price: 20900000, store: 220,color:'blue'},
    {id: 12, product: 'Lenovo 5654', price: 21900000, store: 220,color:'blue'},
    {id: 13, product: 'Macbook 79', price: 24900000, store: 220,color:'white'},
    {id: 14, product: 'Ipad 654', price: 24900000, store: 220,color:'blue'}
] 

function SearchSP(price1, price2) {
    var gia = iphone.filter(function(value) {
        if (value.price >= price1 && value.price <= price2 && value.store > 0) {
            return value
        }
    })
    return gia
}
// console.log(SearchSP(12400000, 21000000));

function SearchT(str) {
    var ten = iphone.filter(function(value) {
        if (str.toLowerCase() == value.product.toLowerCase() && value.store > 0) {
            return value
        }
    })
    return ten
}
// console.log(SearchT('IpAD 654'));

// c, 1đ	hãy viết function tìm kiếm theo yêu cầu người dùng
// function có đầu vào là object
// function trả về kết quả tìm kiếm theo các trường trong object
// VD 
// tìm theo object {product: ‘ip’, color: ‘blue’, max: 20000000, min: 15000000 }
// thì nhận về các sp có chữ ip trong tên không phân biệt chữ hoa, thường đồng thời có màu blue, giá trong khoảng 15 - 20tr và đang còn hàng
// )
// tìm theo object {product: ‘ip’, color: ‘blue’}

function SearchY(obj) {
    var yeu_cau = iphone.filter(function(value) {
        if (value.color == obj.color && value.price < obj.max && value.price > obj.min) {
            return value
        }
    })
    return yeu_cau
}
// console.log(SearchY({color: 'blue', max: 200000000, min: 15000000}));