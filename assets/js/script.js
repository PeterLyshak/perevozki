
	
$('.tooltip').tooltipster({
	position: 'top',
	trigger:"custom",
	triggerOpen: {
		click: true,
		tap: true
	},
	triggerClose: {
		click: true,
		tap: true
	},
	maxWidth: 280,
	delay: 30,
	delayTouch: 30,
});
	
var vehicleBlock = $('#vehicle-block');
var maxRangeVehicleScroll = 100;
var maxRangeVehicleScrollMobile = 400;

$(window).scroll(function(event){
	var scrollPos = $(this).scrollTop();
	
	if ($(window).width() > 1199) {
		var percentageScroll = ((scrollPos * 100) / maxRangeVehicleScroll);
	} else {
		var percentageScroll = ((scrollPos * 100) / maxRangeVehicleScrollMobile);
	}

	$(vehicleBlock).css('transform', 'translateX(' + percentageScroll + 'px)');
});

$('[data-toggle="slide-message"]').click(function(e) {
	e.preventDefault();
	
	$(this).prev().addClass('active');
});

$('#trust').waypoint(function() {
	$('#trust').addClass('scrolled');
});


$('#reliably').waypoint(function() {
	$('#reliably').addClass('scrolled');
}, {
	offset: '200px'
});

$("[type = tel]").mask("+7 (999) 999 – 99 – 99");

$('.services__item .toggle-btn').click(function(e) {
	e.preventDefault();
	
	$(this).parent().addClass('active').siblings().removeClass('active');
});

$('#problems-count').countUp({
	'time': 2000,
	'delay': 10
});

$('.nice-select').niceSelect();


$('.transport-sel-slider').on('init', function() {
	
	$(this).find('.slick-dots').prepend('<a href="javascript:;" class="not-link-mixin transport-sel-arrow prev"><i class="icon-chevron"></a>').append('<a href="javascript:;" class="not-link-mixin transport-sel-arrow next"><i class="icon-chevron"></a>');
});

$('.transport-sel-slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	dots: true,
	infinite: true,
	adaptiveHeight: true

});



$('[data-toggle="slide-message"]').click(function(e) {
	e.preventDefault();
	
	$(this).toggleClass('active');
	
	$(this).next().slideToggle(200);
});


$('.transport-sel-arrow.prev').click(function(e) {
	e.preventDefault();
	
	$(this).parents('.transport-sel-slider').slick('slickPrev');
});

$('.transport-sel-arrow.next').click(function(e) {
	e.preventDefault();
	
	$(this).parents('.transport-sel-slider').slick('slickNext');
});

$('#promotions-slider').slick({
	lazyLoad: 'progressive',
	slidesToShow: 1,
	slidesToScroll: 1,
	initialSlide: 0,
	arrows: false,
	dots: true,
	appendDots: $('#promotions-dots'),
	infinite: true,
	adaptiveHeight: true,
	fade: true,
	adaptiveHeight: true

});


$('#promotions-slider').on('afterChange', function(index) {
	var currIndex = $(this).find('.slick-current').attr('data-slick-index');
	
	$('#promotions-current-number').text(parseInt(currIndex) + 1);
});

$('.promotions__arrow.prev').click(function(e) {
	e.preventDefault();
	
	$('#promotions-slider').slick('slickPrev');
});

$('.promotions__arrow.next').click(function(e) {
	e.preventDefault();
	
	$('#promotions-slider').slick('slickNext');
});

$('#reviews-slider').slick({
	lazyLoad: 'progressive',
	slidesToShow: 2,
	slidesToScroll: 1,
	initialSlide: 0,
	arrows: false,
	dots: true,
	appendDots: $('#reviews-dots'),
	infinite: true,
	adaptiveHeight: true,
	responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1
			}
		}
	]

});

$('.reviews__arrow.prev').click(function(e) {
	e.preventDefault();
	
	$('#reviews-slider').slick('slickPrev');
});

$('.reviews__arrow.next').click(function(e) {
	e.preventDefault();
	
	$('#reviews-slider').slick('slickNext');
});

$(".rating-block").rateYo({
	starWidth: "20px",
	normalFill: "#d8d8d8",
	ratedFill: "#ffc600",
	fullStar: true,
	readOnly: true,
	spacing: "2px"
});

$('.reviews__item .block-video').click(function() {
	var dataYoutubeID = $(this).attr('data-youtube-id');
	
	$(this).html('<iframe width="100%" height="100%" src="http://www.youtube.com/embed/'+ dataYoutubeID +'?autoplay=1" frameborder="0" allowfullscreen></iframe>');
});





