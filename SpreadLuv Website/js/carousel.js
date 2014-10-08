var t = null;
index = 1;

$(document).ready(function(){

    $('#slide').attr("src", "images/galleries/latest/" + index + ".jpg");

	// Set the interval to be 7.5 seconds
    t = setInterval(MoveNext, 7500);
    var ww = document.body.clientWidth;
    
    function MoveNext() {
        $('#slide').stop().fadeOut('fast', function () {
            ++index;
            if (index == 7)
                index = 1;
            $('#slide').attr("src", "images/galleries/latest/" + index + ".jpg");
            $('#slide').stop().fadeIn('slow');
        });
    }

    function MovePrevious() {
        $('#slide').stop().fadeOut('fast', function () {
            --index;
            if (index == 0)
                index = 6;
            $('#slide').attr("src", "images/galleries/latest/" + index + ".jpg");
            $('#slide').stop().fadeIn('slow');
        });
    }
	
	var adjustEvents = function () {
	    if (ww < 800) {
	        $('#next').off("click");
	        $('#previous').off("click");
	        $("#carousel img").on("swipeleft", function (e) {
	            clearInterval(t);
	            MoveNext();
	            t = setInterval(MoveNext, 7500);
	        });

	        $("#carousel img").on("swiperight", function (e) {
	            clearInterval(t);
	            MovePrevious();
	            t = setInterval(MoveNext, 7500);
	        });
	    }
	    else {
	        $("#carousel img").off("swiperight");
	        $("#carousel img").off("swipeleft");
	        $('#next').on("click", function (e) {
	            clearInterval(t);
	            MoveNext();
	            t = setInterval(MoveNext, 7500);
	        }); $('#previous').on("click", function (e) {
	            clearInterval(t);
	            MovePrevious();
	            t = setInterval(MoveNext, 7500);
	        });
	    }
	}

	adjustEvents();

	$(window).bind('resize orientationchange', function () {
	    ww = document.body.clientWidth;
	    adjustEvents();
	});
	
});
