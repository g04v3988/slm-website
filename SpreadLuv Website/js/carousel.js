var t = null;

$(document).ready(function(){

	// Set the interval to be 7.5 seconds
    t = setInterval(MoveNext, 7500);
    var ww = document.body.clientWidth;
    
    function MoveNext() {
        var width = $("#carousel ul li").innerWidth;
        $("#carousel ul").animate({ marginLeft: -width }, 2500, function () {
            moveFirstAfterLast(this);
        })
    }

    function MovePrevious() {
        var width = $("#carousel ul li").innerWidth;
        $("#carousel ul").animate({ marginLeft: width }, 2500, function () {
            moveFirstAfterLast(this);
        })
    }
	
    function moveElement(element, width) {
		element.css({ marginLeft: width });
        //moveFirstAfterLast(element);
		//moveLastBeforeFirst(element);
	}
	
	function moveFirstAfterLast(unorderedList){
		$(unorderedList).find("li:last").after($(unorderedList).find("li:first"));
        $(unorderedList).css({ marginLeft: 0 });
	}

	function moveLastBeforeFirst(unorderedList) {
	    $(unorderedList).find("li:first").before($(unorderedList).find("li:last"));
	    $(unorderedList).css({ marginLeft: 0 });
	}
	
	var adjustEvents = function () {
	    if (ww < 800) {
	        $('#next').off("click");
	        $('#previous').off("click");
	        $("#carousel ul").on("swipeleft", function (e) {
	            clearInterval(t);
	            var width = $("#carousel ul li").innerWidth;
	            var ulCarousel = $("#carousel ul");
	            //moveElement(ulCarousel, -width);
	            moveFirstAfterLast(ulCarousel);
	            t = setInterval(MoveNext, 7500);
	        });

	        $("#carousel ul").on("swiperight", function (e) {
	            clearInterval(t);
	            var width = $("#carousel ul li").innerWidth;
	            var ulCarousel = $("#carousel ul");
	            //moveElement(ulCarousel, width);
	            moveLastBeforeFirst(ulCarousel);
	            t = setInterval(MoveNext, 7500);
	        });
	    }
	    else {
	        $("#carousel ul").off("swiperight");
	        $("#carousel ul").off("swipeleft");
	        $('#next').on("click", function (e) {
	            clearInterval(t);
	            var width = $("#carousel ul li").innerWidth;
	            var ulCarousel = $("#carousel ul");
	            //moveElement(ulCarousel, -width);
	            moveFirstAfterLast(ulCarousel);
	            t = setInterval(MoveNext, 7500);
	        }); $('#previous').on("click", function (e) {
	            clearInterval(t);
	            var width = $("#carousel ul li").innerWidth;
	            var ulCarousel = $("#carousel ul");
	            //moveElement(ulCarousel, width);
	            moveLastBeforeFirst(ulCarousel);
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
