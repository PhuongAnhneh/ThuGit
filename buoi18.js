// var count = 0
// $('.btn').on('click', function() {
//     count++
//     if (count % 2 == 1) {
//         $('.para').hide()
//     } else {
//         $('.para').show()
//     }
// })

// Bài 2: Giao diện gồm 2 nút nhấn và một đoạn văn bản bất kỳ, nhấn nút một tăng kích cỡ văn bản, nhấn nút 2 đoạn văn thay đổi màu sắc

$('.btn-1').click(function() {
    $('.PA').css('color', 'pink')
})
$('.btn-2').click(function() {
    $('.PA').css('font-size', '24px')
})
