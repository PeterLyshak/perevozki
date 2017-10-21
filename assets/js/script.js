	
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
	
	if ($(window).width() < 768) {
		var target = $(this);
		var top = target.offset().top - 50;
		
		$('html,body').animate({
		  scrollTop: top
		}, 50);
	}
});

$('#problems-count').countUp({
	'time': 2000,
	'delay': 10
});

$('#advantages-count').countUp({
	'time': 2000,
	'delay': 10
});

$('.nice-select').niceSelect();


$('.transport-sel-slider').on('init', function() {
	
	$(this).find('.slick-dots').prepend('<a href="javascript:;" class="not-link-mixin transport-sel-arrow prev"><i class="icon-chevron"></a>').append('<a href="javascript:;" class="not-link-mixin transport-sel-arrow next"><i class="icon-chevron"></a>');
});

$('.transport-sel-slider').each(function() {

	$(this).slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		initialSlide: 0,
		arrows: false,
		dots: true,
		infinite: true,
		adaptiveHeight: true,
		appendDots: $(this).next().children('.slick-dots-wrap')

	});
	
});

$('.advantages__item').hover(function() {
	var thisTarget = $(this).attr('data-target');
	
	$('#' + thisTarget).addClass('active');
	
}, function() {
	var thisTarget = $(this).attr('data-target');
	
	$('#' + thisTarget).removeClass('active');
});

$('[data-fancybox]').fancybox({
	mobile : {
		clickSlide : function( current, event ) {
			return current.type === 'image' ? 'toggleControls' : "close";
		}
	},
})

$('[data-toggle="slide-faq"]').click(function(e) {
	e.preventDefault();
	
	$(this).toggleClass('active');
	
	$(this).next().slideToggle(200);
});


$('.transport-sel-arrow.prev').click(function(e) {
	e.preventDefault();
	
	$(this).parent().prev().slick('slickPrev');
});

$('.transport-sel-arrow.next').click(function(e) {
	e.preventDefault();
	
	$(this).parent().prev().slick('slickNext');
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

$('.tariffs__tab').click(function(e) {
	e.preventDefault();
	
	var thisTarget = $(this).attr('data-target'),
		thisLeftBG = $(this).attr('data-left-bg');
	
	$(this).addClass('active').siblings().removeClass('active');
	$('#tariffs-left').removeClass('opened-curiers opened-vehicle').addClass(thisLeftBG);
	
	
	$(thisTarget).addClass('active opened-mobile').siblings().removeClass('active opened-mobile');
	
	if ($(window).width() > 767) {
		$(thisTarget).addClass('active').siblings().removeClass('active');
		
		if (!$('#tariffs-block').hasClass('opened')) {
			$('#tariffs-block').addClass('opened');
		}
	}
});

$('.tariffs__close-btn').click(function(e) {
	e.preventDefault();
	
	$(this).addClass('active').siblings().removeClass('active');
	
	
	$('#tariffs-block').removeClass('opened');
	$('#tariffs-left').removeClass('opened-curiers opened-vehicle');
	$('.tariffs__tab').removeClass('active');
});



