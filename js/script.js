//event pada saat link di klik

$('.page-scroll').on('click', function(e){


//ambil isi href
var Tujuan=$(this).attr('href');

//tangkap elemen ybs
var elemenTujuan = $(Tujuan);


//pindahkan scroll
$('body').animate({

	scrollTop: elemenTujuan.offset().top - 50
}, 1000);

    //e.preventDefault();
});






//paralax
$(window).scroll(function(){
var wScroll = $(this).scrollTop();


$('.jumbotron img').css({
	'transform' : 'translate(0px, '+ wScroll/4+'%)'
});



$('.jumbotron h1').css({
	'transform' : 'translate(0px, '+ wScroll/2+'%)'
});

$('.jumbotron p').css({
	'transform' : 'translate(0px, '+ wScroll/1,2+'%)'
});
});





















