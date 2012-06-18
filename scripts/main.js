//if (typeof window.console === "undefined") {
//    window.console = {
//        log: function () { },
//        info: function () { },
//        warn: function () { },
//        error: function () { }
//    };
//};
var app = {
	scrn : ['scrn-home', 'scrn-picture'],
	currentScrn : 'scrn-home',
	gotoScrn: function(strScrnname){
			$('#'+app.currentScrn).hide();
			app.currentScrn = strScrnname;
			$('#'+app.currentScrn).show();			
	},
	pictures: [],
	waitScreen: {
		show: function(){
			$('.waitScreen').show();
		},
		hide: function(){
			$('.waitScreen').hide();
		},
		toggle: function(){
			$('.waitScreen').toggle();	
		}
	}
};
document.addEventListener("deviceready", deviceReady, false);
$(document).ready(function(){
		console.log('document ready');
});

$(window).load(function(){
	
	console.log('window load');
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

function deviceReady(){
		console.log('deviceready');
    document.addEventListener("pause", function(){
        console.log('application pause');
    }, false);

    document.addEventListener("resume", function(){
        console.log('application resume');
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

		$('#btn-photo-send').on('click', function(){
			app.waitScreen.show();
			$.post("http://192.168.1.102/aseq/php/save.php",  {json: JSON.stringify(app.pictures)}, function(data){ app.waitScreen.hide(); alert(data); });	
		});
		
    $('#btn-take-picture').on('click', function(){
    		console.log('btn-take-picture click');
        navigator.camera.getPicture(
            function(imageData){
                console.log('cameraSuccess');
                var src = "data:image/jpeg;base64," + imageData;
                $('body').append('<img src="'+src+'" width="100" />');
                app.pictures.push(src);
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
    		console.log('btn-photo-gallery click');
        navigator.camera.getPicture(
            function(imageData){
                console.log('cameraSuccess');
                console.log(imageData);
                 var src = "data:image/jpeg;base64," + imageData;
                $('body').append('<img src="'+src+'" width="100" />');
                app.pictures.push(src);
            },
            function(){
                console.log('cameraError');
            },
            {
               	quality: 50,
                destinationType: Camera.DestinationType.DATA_URL,
                sourceType : Camera.PictureSourceType.PHOTOLIBRARY
            }
        );
    });
};