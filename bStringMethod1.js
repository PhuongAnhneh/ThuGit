// Bài 0: 
// Hãy đổi các ‘em’ thành EM 
// Đoạn văn trên có bao nhiêu ký tự
// Lấy ra câu “đáng lẽ Bé Còi nhà ta phải là con trai mới đúng’’. đưa về mảng chứ từng ký tự.
// kiểm tra xem đoạn văn trên bắt đầu bằng “Hôm”. Nếu đúng thay thế thành “Ngày”

var str = 'Hôm nào chán tụi em lại rủ nhau đi đánh đáo, đánh khăng. Trong nhà em toàn bi, ảnh, quay, không thể kiếm đâu ra một con búp bê hay một bộ đồ hàng cả. Ba thường vừa cười vừa trêu em “đáng lẽ Bé Còi nhà ta phải là con trai mới đúng”.'

var chu = str.split(' ')
kq = chu.map(function(value) {
    if (value == 'em') {
        value= value.toUpperCase()
    }
    return value
})
console.log(kq.join(' '));

a = str.split('')
var count = 0
a.filter(function(value) {
    if(value != ' ') {
        count += 1
    }
})
console.log(count);

b = str.indexOf('đáng lẽ Bé Còi nhà ta phải là con trai mới đúng')
c = str.indexOf('đúng',182) + 4
d = str.slice(b,c)
e = d.split('')
f = e.filter(function(v){
    return v != ' '
})
console.log(f);

Nstr = str.indexOf('Hôm')
if(Nstr == 0) {
    var h = str.replace('Hôm', 'NGAY')
}
console.log(h);

// Bài 1:
// hãy tạo danh sách có tên viết hoa chữ đầu [‘Thai’,’Linh’,...]

var arr = ['thai', 'linh', 'tung', 'quan', 'khang']

var arr1 = arr.map(function(value) {
     a=value[0].toUpperCase()
     return a+value.slice(1,value.length)
})
console.log(arr1);
