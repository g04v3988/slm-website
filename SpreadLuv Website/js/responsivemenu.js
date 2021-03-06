﻿$(document).ready(function () {
    var ww = document.body.clientWidth;

    $(".nav li a").each(function () {
        if ($(this).next().length > 0) {
            $(this).addClass("parent");
        };
    });

    if (ww < 800) {
        $(".toggleMenu").click(function (e) {
            e.preventDefault();
            $(".nav").toggle();
        });
        $(".toggleMenu").css("display", "inline-block");
        $(".nav li a").click(function () {
            $(this).parent("li").toggleClass('hover');
        });
    } else {
        $(".toggleMenu").css("display", "none");
        $(".nav li").hover(function () {
            $(this).addClass('hover');
        }, function () {
            $(this).removeClass('hover');
        });
    }
});