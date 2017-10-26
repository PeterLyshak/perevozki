// Detect ios 11_0_x affected 
// NEED TO BE UPDATED if new versions are affected
var ua = navigator.userAgent,
	iOS = /iPad|iPhone|iPod/.test(ua),
	iOS11 = /OS 11_0_1|OS 11_0_2|OS 11_0_3/.test(ua);

// ios 11 bug caret position
if ( iOS && iOS11 ) {

	// Add CSS class to body
	$("body").addClass("iosBugFixCaret");
}

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
	var scrollPos = $(this).scrollTop(),
		percentageScroll;
	
	if ($(window).width() > 1199) {
		percentageScroll = ((scrollPos * 100) / maxRangeVehicleScroll);
	} else {
		percentageScroll = ((scrollPos * 100) / maxRangeVehicleScrollMobile);
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

$('#promo-count, #promo-count-2').countUp({
	'time': 2000,
	'delay': 10
});

$('.nice-select').niceSelect();



// TRANSPORT SLIDER

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

$('.transport-sel-arrow.prev').click(function(e) {
	e.preventDefault();
	
	$(this).parent().prev().slick('slickPrev');
});

$('.transport-sel-arrow.next').click(function(e) {
	e.preventDefault();
	
	$(this).parent().prev().slick('slickNext');
});

// --------------

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
});

$('[data-toggle="slide-faq"]').click(function(e) {
	e.preventDefault();
	
	$(this).toggleClass('active');
	
	$(this).next().slideToggle(200);
});





// PROMOTIONS SLIDES

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


// REVIEWS SLIDER

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


// BENEFITS SLIDER

$('#benefits-slider').on('afterChange', function(index, slide) {

	var prevText = $(this).find('.slick-current').prev().find('.title').text();
	var nextText = $(this).find('.slick-current').next().find('.title').text();
	
	$('#benefits-prev-arrow').find('.arrow-text').text(prevText);
	$('#benefits-next-arrow').find('.arrow-text').text(nextText);
});


$('#benefits-prev-arrow').click(function(e) {
	e.preventDefault();
	
	$('#benefits-slider').slick('slickPrev');
});

$('#benefits-next-arrow').click(function(e) {
	e.preventDefault();
	
	$('#benefits-slider').slick('slickNext');
});

$('#benefits-slider').slick({
	lazyLoad: 'progressive',
	slidesToShow: 1,
	slidesToScroll: 1,
	initialSlide: 0,
	arrows: false,
	dots: true,
	appendDots: $('#benefits-dots'),
	infinite: true,
	adaptiveHeight: true,
});

// -------------

// TEAM SLIDER

var teamSliderAutoPlaySpeed = 2000;

$('#team-slider .team__item').each(function(index, value) {
	
	var dataIdentifier = 'teamItem-' + index;
	
	$(this).attr('data-ident', dataIdentifier);
	
	if (index === 0) {
		$('#team-timelines').append('<div class="item active" data-target="' + dataIdentifier + '"></div>');
	} else {
		$('#team-timelines').append('<div class="item" data-target="' + dataIdentifier + '"></div>');
	}
});

$('#team-slider').on('afterChange', function(index, slide) {

	var prevText = $(this).find('.slick-current').prev().find('.name').text();
	var nextText = $(this).find('.slick-current').next().find('.name').text();
	
	$('#team-prev-arrow').find('.arrow-text').text(prevText);
	$('#team-next-arrow').find('.arrow-text').text(nextText);
});

$('#team-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
	var timeIndent = $(slick.$slides.eq(nextSlide)).attr('data-ident');
	
	
	$('#team-timelines .item[data-target=' + timeIndent + ']').addClass('active').siblings().removeClass('active');
});

$('#team-prev-arrow').click(function(e) {
	e.preventDefault();
	
	$('#team-slider').slick('slickPrev');
});

$('#team-next-arrow').click(function(e) {
	e.preventDefault();
	
	$('#team-slider').slick('slickNext');
});

$('#team-slider').slick({
	lazyLoad: 'progressive',
	slidesToShow: 1,
	slidesToScroll: 1,
	initialSlide: 0,
	arrows: false,
	dots: true,
	appendDots: $('#team-dots'),
	infinite: true,
	adaptiveHeight: true,
	autoplay: true,
	autoplaySpeed: teamSliderAutoPlaySpeed
});

// -------------

$('#whatelse-slider').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	initialSlide: 0,
	arrows: true,
	dots: false,
	infinite: true,
	adaptiveHeight: true,
	prevArrow: '<a href="javascript:;" class="whatelse__arrow prev"><i class="icon-long-arrow"></i></a>',
	nextArrow: '<a href="javascript:;" class="whatelse__arrow next"><i class="icon-long-arrow"></i></a>',
	responsive: [
		{
			breakpoint: 768, 
			settings: {
				slidesToShow: 1
			}
		}
	]
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
	$('.tariffs__tab').removeClass('mobile-active');
	
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

// MODAL SCRIPT

function openModal(hrefModal) {
//	$('body, html').css('overflow', 'hidden');
	
	$('body, html').addClass('modal-opened');
	$(hrefModal).fadeIn(300);
}

function closeModals() {
//	$('body, html').css('overflow', '');
	
	$('body, html').removeClass('modal-opened');
	$('.popup-block:not(:hidden)').fadeOut(300);
}

function showThanksModal() {
	$('.popup-block:not(:hidden)').fadeOut(300);
	
	$('#thanks-popup').fadeIn(300);
}

$(document).off('click', '[data-toggle="modal"]').on('click', '[data-toggle="modal"]', function(e) {
	e.preventDefault();
	
	var hrefModal = $(this).attr('data-target');
	
	openModal(hrefModal);
});

$(document).off('click', '.popup-block__overlay').on('click', '.popup-block__overlay', function(e) {
	var closeButton = $(this).children('.popup-block__close');
	
	if (e.target != this) {
//		return false;
	} else {
		closeModals();
	}
});

$(document).off('click', '.popup-block__close, .popup-block__close-btn').on('click', '.popup-block__close, .popup-block__close-btn', function(e) {
	e.preventDefault();
	
	closeModals();
});


$(".basic-ajax-form").submit(function () {
	var formNm = $(this);
	$.ajax({
		type: "POST",
		url: 'mail-basic.php',
		data: formNm.serialize(),
		success: function (data) {
			showThanksModal();
			formNm[0].reset();
		},
		error: function (jqXHR, text, error) {
			// Вывод текста ошибки отправки
			$(formNm).html(error);  
		}
	});
	return false;
});

$(".services-ajax-form").submit(function () {
	var formNm = $(this);
	$.ajax({
		type: "POST",
		url: 'mail-services.php',
		data: formNm.serialize(),
		success: function (data) {
			showThanksModal();
			formNm[0].reset();
		},
		error: function (jqXHR, text, error) {
			// Вывод текста ошибки отправки
			$(formNm).html(error);  
		}
	});
	return false;
});

$(".promotions-ajax-form").submit(function () {
	var formNm = $(this);
	$.ajax({
		type: "POST",
		url: 'mail-promotions.php',
		data: formNm.serialize(),
		success: function (data) {
			showThanksModal();
			formNm[0].reset();
		},
		error: function (jqXHR, text, error) {
			// Вывод текста ошибки отправки
			$(formNm).html(error);  
		}
	});
	return false;
});

$(".calc-ajax-form").submit(function () {
	var formNm = $(this);
	$.ajax({
		type: "POST",
		url: 'mail-calculation.php',
		data: formNm.serialize(),
		success: function (data) {
			showThanksModal();
			formNm[0].reset();
		},
		error: function (jqXHR, text, error) {
			// Вывод текста ошибки отправки
			$(formNm).html(error);  
		}
	});
	return false;
});

$('.services__options-block .submit-button').click(function(e) {
	e.preventDefault();
	
	var choosenServices = [];
	$('#services-choosen-text').text('');
	
	$(this).parent().find('input[type="checkbox"]').each(function() {
		if ($(this).is(':checked')) {
			choosenServices.push($(this).next().children('.name').text());
		}
	});
	
	openModal('#services-popup');
	
	if (choosenServices.length > 0) {
		for (var i = 0; i < choosenServices.length; i++) {
			var curText;
			
			if (i < choosenServices.length - 1) {
				curText = choosenServices[i] + '\, ';
			} else {
				curText = choosenServices[i];
			}
			
			$('#services-choosen-text').append(curText);
		}
		
		$('#services_list').val($('#services-choosen-text').text());
		
	} else {
		$('#services-choosen-text').text('Не выбрано ничего');
		$('#services_list').val('Не выбрано ничего');
	}
	
	
});

$('[data-toggle="promotions-modal"]').click(function(e) {
	e.preventDefault();
	
	$('#services-choosen-text').text('');
	
	var choosenPromotion = $(this).parent().find('.heading').text();
	
	$('#promotion-choosen-name').text(choosenPromotion);
	$('#promotion-choosen-input').val(choosenPromotion);
	
	openModal('#promotions-popup');
});

$('#calc-transport-sel-tabs .tab').click(function(e) {
	e.preventDefault();
	
	var thisHref = $(this).attr('data-target');
	
	$(thisHref).addClass('active').siblings().removeClass('active');
	$(this).addClass('active').siblings().removeClass('active');
	
	$(thisHref).find('.transport-sel-slider').slick('setPosition');
});

$('#calc-submit').click(function(e) {
	e.preventDefault();
	
	var calcBlock = $('#calculation');
	
	$('#route-from, #route-to').removeClass('error');
	
	var hrefModal = $(this).attr('data-target');
	
	var routeFromVal = $('#route-from').val();
	var routeToVal = $('#route-to').val();
	
	var choosenRentTime = $('#select-rent-time option:checked').text();
	var choosenRentTimeVal = $('#select-rent-time').val();
	
	var choosenCuriersCount = $('#select-curiers-quant').val();
	
	var choosenTransport = $('#calc-transport-items .active .slick-current');
	var choosenTransportPrice = $('#calc-transport-items .active .slick-current').attr('data-price');
	
	var choosenTimeDay = $('#calc-time-day').val();
	var choosenTimeHour = $('#calc-time-hour').val();
	var choosenTimeMinute = $('#calc-time-min').val();
	
	// Валидация полей адресов
	
	if (routeFromVal === '') {
		$('#route-from').addClass('error');
		
		var calcBlockTop = calcBlock.offset().top;
		
		$('html,body').animate({
		  scrollTop: calcBlockTop
		}, 400);
		return;
	} 
	
	if (routeToVal === '') {
		$('#route-to').addClass('error');
		
		var calcBlockTop = calcBlock.offset().top;
		
		$('html,body').animate({
		  scrollTop: calcBlockTop
		}, 400);
		return;
	} 
	
	$('#calc-route').text(routeFromVal + ' - ' + routeToVal);
	$('#calc-form-address-value').val(routeFromVal + ' - ' + routeToVal);
	
	// Выбор времени аренды
	
	$('#calc-rent-time').text(choosenRentTime);
	$('#calc-form-time-rent').val(choosenRentTime);
	
	// Выбор машины
	
	$('#calc-transport').text($(choosenTransport).find('.car-name').text());
	$('#calc-form-transport-name').val($(choosenTransport).find('.car-name').text());
	
	// Время подачи
	
	if (choosenTimeDay != '0') {
		$('#calc-arrive-time').text(choosenTimeDay + ' в ' + choosenTimeHour + ':' + choosenTimeMinute);
		$('#calc-form-time-arrive').val(choosenTimeDay + ' в ' + choosenTimeHour + ':' + choosenTimeMinute);
	} else {
		$('#calc-arrive-time').text('Не выбрано');
		$('#calc-form-time-arrive').val('Не выбрано');
	}
	
	// Грузчики
	
	$('#calc-curiers').text(choosenCuriersCount);
	$('#calc-form-curiers-count').val(choosenCuriersCount);
	
	// Расчет стоимости
	
	var curiersResultPrice = choosenCuriersCount * (300 * parseInt(choosenRentTimeVal));
	
	var transportResultPrice = choosenTransportPrice * parseInt(choosenRentTimeVal);
	
	$('#result-price, #calc-form-result-price').text(curiersResultPrice + transportResultPrice + ' руб.');
	$('#calc-form-result-price').val(curiersResultPrice + transportResultPrice + ' руб.');
	
	openModal(hrefModal);
});


$('.calculation__popup-submit-btn').click(function(e) {
	e.preventDefault();
	
	$('#calculation-popup').fadeOut(300);
	
	$('#order-calc-popup').fadeIn(300);
});






