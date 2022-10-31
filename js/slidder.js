$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:true,
		slidesToShow:1,
		autoplay:true,
		speed:1000,
		adaptiveHeight:true,
		autoplaySpeed:1900,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:3
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});



$(document).ready(function(){
	$('.sliderz').slick({
		arrows:true,
		dots:true,
		slidesToShow:5,
		autoplay:true,
		speed:1000,
		adaptiveHeight:true,
		autoplaySpeed:1900,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:3
				}
			},
			{
				breakpoint: 490,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});



// $('.slider-for').slick({
// 	slidesToShow: 1,
// 	slidesToScroll: 1,
// 	arrows: false,
// 	fade: true,
// 	asNavFor: '.slider-nav'
//   });
//   $('.slider-nav').slick({
// 	slidesToShow: 3,
// 	slidesToScroll: 1,
// 	asNavFor: '.slider-for',
// 	dots: true,
// 	centerMode: true,
// 	focusOnSelect: true
//   });