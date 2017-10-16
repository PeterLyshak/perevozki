
	
if ($(window).width() > 1199) {
	$('.tooltip').tooltipster({
		trigger: 'hover',
		maxWidth: 340,
		delay: 30,
		delayTouch: 30
	});
} else {
	$('.tooltip').tooltipster({
		position: 'bottom',
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
}
	

