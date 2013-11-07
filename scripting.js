$(document).ready(function() {
	$('.tooltip').tooltipster();
});
$(function () {
	$.scrollUp({
		scrollName: 'scrollup',
		topDistance: '1100',
		topSpeed: 300,
		animation: 'fade',
		animationInSpeed: 200,
		animationOutSpeed: 200,
		scrollText: 'Scroll To Top',
		activeOverlay: false,
	});
});