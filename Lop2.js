// Bài 1: In ra tất cả số chẵn từ 1 đến 100.

var arr = []
for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        arr.push(i)
    }
}
console.log('In cac so chan tu 1 - 100:', arr)

// Bài 2: Cho mảng arr2 = [1, 4, 5, 2, 7, 9, 4].
// Hãy sắp xếp mảng theo thứ tự tăng dần và giảm dần

var arr2 = [1, 4, 5, 2, 7, 9, 4]
for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
        if (arr2[i] < arr2[j]) {
            var temp = arr2[i]
            arr2[i] = arr2[j]
            arr2[j] = temp
        }
    }
}
console.log('sắp xếp mảng theo thứ tự tăng dần:', arr2);

for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
        if (arr2[i] > arr2[j]) {
            var temp = arr2[i]
            arr2[i] = arr2[j]
            arr2[j] = temp
        }
    }
}
console.log('sắp xếp mảng theo thứ tự giảm dần:', arr2);

// Bài 3: Cho chuỗi str = ‘dotimraduockytucantim’
// Hãy kiểm tra xem chuỗi có chứa ký tự ‘k’ không. 
// Nếu có in ra + vị trí của ký tự trong mảng

var str = 'dotimraduockytucantim'
for (let i = 0; i < str.length; i++) {
    if (str[i] == 'k') {
        console.log('Vi tri cua chu k trong mang:', i);
    }
}

// Bài 4: Cho 1 số tự nhiên n. Viết chương trình kiểm tra n là số lẻ hay chẵn.
// Nếu number là số chẵn , In ra "Even number" và "Done".
// Ngược lại, in "Done" ra màn hình.

var n = 10
if (n % 2 == 0) {
    console.log('Even Number');
} else {
    console.log('Done');
}

// Bài 5: Cho 3 số a, b và c. hoàn thành chương trình để in ra số lớn nhất.

var a = 1
var b = 2
var c = 3
if (a > b && a > c) {
    console.log('So lon nhat la:', a);
} else if (b > a && b > c) {
    console.log('So lon nhat la:', b);
} else {
    console.log('So lon nhat la:', c);
}

var d = [1,2,8]
var max = 0
for (let i = 0; i < d.length; i++) {
    if (max < d[i]) {
        max = d[i]
    }
}
console.log('So lon nhat la:', max);

// Bài 6: Viết chương trình, người dùng nhập một năm bất kỳ và in ra năm đó có phải là năm nhuận hay không.

var year = 2021
if (year % 4 == 0 && year % 100 != 0) {
    console.log('La nam nhuan');
} else {
    console.log('Khong la nam nhuan');
}

// Bài 7: Cho 1 số từ 0 đến 6. Viết chương trình để in ra thứ trong tuần

var i = 1
if (i == 0) {
    console.log('Sunday');
} else if (i == 1) {
    console.log('Monday');
} else if (i == 2) {
    console.log('Tuesday');
} else if (i == 3) {
    console.log('Wednesday');
} else {
    console.log('Khong');
}

// Bài 9: Cho 1 số n . Viết một chương trình để tính toán và in ra màn hình giai thừa của số đã nhập (n!)

var n = 5
var tich = 1
for (let i = 1; i <= n; i++) {
    tich *= i
}
console.log('Giai thua cua so da nhap:', tich);

// Bài 10: Cho 1 mảng các số tự nhiên. In ra các số trong mảng đó với điều kiện :
// Bỏ qua số đó nếu số đó chia hết cho 4
// Thoát vòng lắp nếu số đó chia hết cho cả 4 và 3

var arr = [1, 2, 3, 4, 5, 6, 7, 8,12, 24] 
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 4 == 0) {
        continue;
    }
    if (arr[i] % 4 == 0 && arr[i] % 3 == 0) {
        break
    } 
    console.log(arr[i]);
}

// Bài 11: Cho 1 chuỗi str_input. Viết chương trình đảo ngược chuỗi và in ra kết quả

var str = 'anh'
var Nstr = ''
for (let i = str.length-1; i >= 0; i--) {
    Nstr += str[i]
}
console.log('Dao nguoc chuoi:', Nstr);






