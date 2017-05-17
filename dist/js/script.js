$(document).ready(function() {
	$('.banner__slider').slick({
		nextArrow: '.banner__slider__next',
		prevArrow: '.banner__slider__prev',
dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  
	});
	
	$('.plan__button').hover( function(){
		$(this).parent('.plans__item').find('.plans__item__heading').css({'backgroundColor' : '#49cbcd'})
	},
		function(){
			$(this).parent('.plans__item').find('.plans__item__heading').css({'backgroundColor' : '#485460'});
});
	$('.main-menu--mobile').click( function(){
		$(this).toggleClass('active');
		$('.main-menu__list').toggleClass('active');
	});

});