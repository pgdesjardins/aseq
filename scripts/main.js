var app = {};
$(document).ready(function(){
});
$(window).load(function(){
	$('.carousel').carousel({interval:false}).bind('touchy-swipe', function(event, phase, $target, data){
			var direction = data.direction;
			if (direction === 'left') {
				$('.carousel').carousel('next');
			}
			else if (direction === 'right') {
				$('.carousel').carousel('prev');
			}
	});
});