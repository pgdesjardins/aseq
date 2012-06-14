var app = {};
$(document).ready(function(){
});
$(window).load(function(){
	$('.carousel').carousel({interval:false});
	$('.carousel').bind('swipeleft',function(){$('.carousel').carousel('next');}).bind('swiperight',function(){$('.carousel').carousel('prev');});
	
	
	/*.bind('swipeleft', function(evt, touch) {
    	console.log(this, evt, touch);
    	$('.carousel').carousel('next');
  	}).bind('swiperight', function(evt, touch) {
    	$('.carousel').carousel('prev');
  	})*/
});