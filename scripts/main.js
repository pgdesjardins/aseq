var app = {};
$(document).ready(function(){
});
$(window).load(function(){
	$('.carousel').carousel({interval:false});
	$('.carousel img').on('touchy-swipe', function(event, $target, data){
			var direction = data.direction;
			//console.log(direction);
			if (direction === 'left') {
				$('.carousel').carousel('next');
			}
			else if (direction === 'right') {
				$('.carousel').carousel('prev');
			}
	});
});