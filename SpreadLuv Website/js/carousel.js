$(document).ready(function(){
	// Set the interval to be 7.5 seconds
    var t = setInterval(MoveNext, 7500);

    //$("#carousel ul li").on("swipe", MoveNext);

    function MoveNext() {
        var width = $("#carousel ul li").innerWidth;
        $("#carousel ul").animate({ marginLeft: -width }, 2500, function () {
            $(this).find("li:last").after($(this).find("li:first"));
            $(this).css({ marginLeft: 0 });
        })
    }

    function MovePrevious() {
        var width = $("#carousel ul li").innerWidth;
        $("#carousel ul").animate({ marginLeft: width }, 2500, function () {
            $(this).find("li:last").after($(this).find("li:first"));
            $(this).css({ marginLeft: 0 });
        })
    }
});