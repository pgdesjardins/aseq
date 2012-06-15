//if (typeof window.console === "undefined") {
//    window.console = {
//        log: function () { },
//        info: function () { },
//        warn: function () { },
//        error: function () { }
//    };
//};
var app = {};
$(document).ready(function(){
});

$(window).load(function(){
	$('.carousel').carousel({interval:false}).swipe({
		threshold:0,
		swipe: function(event, direction){
			if (direction === 'left') {
				$('.carousel').carousel('next');
			}
			else if (direction === 'right') {
				$('.carousel').carousel('prev');
			}}
	});
});

document.addEventListener("deviceready", function(){
    console.log('deviceready');
    document.addEventListener("pause", function(){
        console.log('application pause');
    }, false);

    document.addEventListener("resume", function(){
        console.log('application pause');
    }, false);

    document.addEventListener("online", function(){
        console.log('application online');
    }, false);

    document.addEventListener("offline", function(){
        console.log('application offline');
    }, false);

    document.addEventListener("backbutton", function(){
        // NOT IN IOS
        console.log('application backbutton');
    }, false);

    $('#btn-take-picture').on('click', function(){
        navigator.camera.getPicture(
            function(imageData){
                console.log('cameraSuccess');
                var src = "data:image/jpeg;base64," + imageData;
                $('body').append('<img src="'+src+'" width="100" />');
            },
            function(){
                console.log('cameraError');
            },
            {
                quality: 50,
                destinationType: Camera.DestinationType.DATA_URL,
                sourceType : Camera.PictureSourceType.CAMERA,
                encodingType: Camera.EncodingType.JPEG
            }
        );
    });
    $('#btn-photo-gallery').on('click', function(){
        navigator.camera.getPicture(
            function(imageData){
                console.log('cameraSuccess');
                console.log(imageData);
                var src = imageData;
                $('body').append('<img src="'+src+'" width="100" />');
            },
            function(){
                console.log('cameraError');
            },
            {
                quality: 60,
                destinationType: Camera.DestinationType.FILE_URI,
                sourceType : Camera.PictureSourceType.PHOTOLIBRARY
            }
        );
    });
}, false);