﻿$(document).ready(function(){

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
		 moveElement(ulCarousel,-width);
	});
	$('#previous').click(function(){
		 var width = $("#carousel ul li").innerWidth;
		 var ulCarousel = $("#carousel ul");
		 moveElement(ulCarousel,width);
	});
	
	function moveElement(element,width){
		 element.css({ marginLeft: width });
		 moveFirstAfterLast(element);
	}
	function moveFirstAfterLast(unorderedList){
		$(unorderedList).find("li:last").after($(unorderedList).find("li:first"));
        $(unorderedList).css({ marginLeft: 0 });
	}
	
});
$( document ).on( "pagecreate", "#mobileslide", function() {
		$(document).on( "swipeleft swiperight", "#slides li", function( event ) {
			 var leftSwipeType = (event.type === "swipeleft");
			 var rightSwipeType = (event.type === "swiperight");
			 var width = $("#carousel ul li").innerWidth;
			 var ulCarousel = $("#carousel ul");
			 if(leftSwipeType){
				moveElement(ulCarousel,-width);
			 }
			 if(rightSwipeType){
				moveElement(ulCarousel,width);
			 }
		});
	});