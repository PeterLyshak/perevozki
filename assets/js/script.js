
	
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
var maxRangeVehicleScroll = 50;
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




