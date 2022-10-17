// Bài 1: 
// a,  tạo ra số random từ 1 - 10, 1-100, 50 - 100
// b, làm tròn số 7.434345 (.round) , làm tròn lên ( .ceil) , làm tròn xuống ( .floor)
// c,  lấy sau số thập phân 2 đơn vị :  ví dụ 7.434345 = 7.43
// d, cho string ‘8’ và  ‘5’. Dùng parseInt để tính tổng ( kết quả = 13)
// 7.5 tính 2^10

console.log('Random so tu 1 - 100:', Math.floor(Math.random() * 10));
console.log('Random so tu 50 - 100:', Math.floor(Math.random() * 50 + 50));

var so = 7.434345
console.log('Lam tron theo quy tac:', Math.round(so));
console.log('Lam tron len:', Math.ceil(so));
console.log('Lam tron xuong:', Math.floor(so));
console.log('Lam tron lay 2 so cuoi:', so.toFixed(2));

console.log('Ket qua:', parseInt('8.7')+parseInt('5'));

// Bài 2:
// a, In ra số bất kỳ từ 1 tới 10
// b, In ra số bất kỳ từ 1 tới 101
// c, Biết mã màu trong CSS là rgb() , tạo ra mã màu bất kỳ mỗi khi in ra

console.log(Math.random() * 100 + 1);

