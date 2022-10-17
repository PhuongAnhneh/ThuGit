var Content = document.querySelector('.content')
console.log($('.content').html('Hello World'));
console.log($('.input').val('000'));
$('.content').css({"color":"pink", "background-color":"beige"});
$('.content').prepend('<p class="para">World</p>')