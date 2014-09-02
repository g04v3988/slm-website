$(document).ready(function(){
	// Set the interval to be 5 seconds
    var t = setInterval(function () {
        var width = $("#carousel ul li").innerWidth;
		$("#carousel ul").animate({marginLeft:width},2500,function(){
			$(this).find("li:last").after($(this).find("li:first"));
			$(this).css({marginLeft:0});
		})
	},7500);
});