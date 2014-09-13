$(document).ready(function(){
	// Set the interval to be 7.5 seconds
    var t = setInterval(MoveNext, 7500);

    //$("#carousel ul li").on("swipe", MoveNext);

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
	
	$('#next').click(function(){
		 var width = $("#carousel ul li").innerWidth;
		 var ulCarousel = $("#carousel ul");
		 ulCarousel.css({ marginLeft: -width });
		 moveFirstAfterLast(ulCarousel);
	});
	$('#previous').click(function(){
		 var width = $("#carousel ul li").innerWidth;
		 var ulCarousel = $("#carousel ul");
		 ulCarousel.css({ marginLeft: width });
		 moveFirstAfterLast(ulCarousel);
	});
	
	function moveFirstAfterLast(unorderedList){
		$(unorderedList).find("li:last").after($(unorderedList).find("li:first"));
        $(unorderedList).css({ marginLeft: 0 });
	}
	
});