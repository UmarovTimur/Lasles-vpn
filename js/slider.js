if($('.happy__slider').length>0){
	$('.happy__slider').slick({
		autoplay: false,
		infinite: true,
		dots: true,
		arrows: true,
		accessibility: false,
		slidesToShow: 3,
		adaptiveHeight:false,
  		slidesToScroll: 1,
  		speed: 300,
		// autoplaySpeed: 5000,
		responsive:[
			{
				breakpoint: 1050,
				settings: {
					slidesToShow:2,
				}
			},{
				breakpoint: 690,
				settings: {
					slidesToShow:1,
				}
			},
		]
	});
}
