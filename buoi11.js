var count = 0
var time = setInterval(function() {
    count++;
    // console.log(count);
    if(count == 10) {
        clearInterval(time)
    }
},1000)

var hour = 0
var minute = 0
var second = 0
var time1 = setInterval(function() {
    second++
    if (second == 60) {
        second = 0
        minute++
    }
    if (minute == 60) {
        minute = 0
        hour++
    }
    if (minute == 1) {
        clearInterval(time1)
    }
    // console.log(hour+':'+minute+':'+second);
},500)

// Bài 2: 
// giả sử tải file nặng 500mb
// tốc độ tải mỗi giây biến động trong khoảng từ 1 - 10 mb/s
// hãy hiển thị % download mỗi giây 1 lần, đến 100% thì thông báo tải thành công và kết thúc
// Nâng cao bài 2 là mỗi lần hiển thị % download mới thì thời gian ngẫu nhiên từ 1 đến 3 giây

var count1 = 0
var time2 = setInterval(function() {
    var spend = Math.floor(Math.random()*10 + 1)
    var percent = spend/500 * 100
    count1 += percent
    if (count1 > 100) {
        clearInterval(time2)
    }
    console.log(Math.floor(count)+'%');
}, 100)


