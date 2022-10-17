var a = 'mua';
if (a == 'mua') {
    console.log('Hom nay mua');
} else {
    console.log('Hom nay khong mua');
}

var SanPham = 25;
if (SanPham >= 1 && SanPham <= 20) {
    console.log("San pham co gia:", SanPham * 10);
} else if (SanPham <= 50) {
    console.log('San pham co gia:', SanPham * 8);
} else if (SanPham <= 100) {
    console.log('San pham co gia:', SanPham * 7);
} else if (SanPham >  100) {
    console.log('San pham co gia:', SanPham * 6);
}

for (let i = 1; i <= 5; i++) {
    console.log(i);
}
for (let i = 5; i >= 1; i--) {
    console.log(i);
}

var arr = [0,1,2,3,4,5,6,7,8,9]
for (let i = 0; i < arr.length; i++) { 
    console.log(arr[i]);
}

for (let i = arr.length-1; i >= 0; i--) {
    console.log(arr[i]);
}

var a = []
for (let i = arr.length-1; i >= 0; i--) {
    a[a.length] = arr[i];
}
console.log(a);
