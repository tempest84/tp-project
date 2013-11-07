$(document).ready(function() {
	$('.tooltip').tooltipster();
});
$(document).ready(function () {
	$('#contactform').validate({
		errorLabelContainer: $("#errors"),
		rules: {
			name: {
				required: true,
				minlength: 2
			},
			message: {
				required: true,
				minlength: 5
			},
		},	
		messages: {
		name: "Please enter your name. ",
		message: "Please enter a message.",
		}
	});
});