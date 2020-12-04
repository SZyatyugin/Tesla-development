import $ from "jquery";

$(function () {
    $(".slider").slick({
        arrows: "false",
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: "linear",
        autoplay: "true",
        dots: true,
    });
});
