$(document).ready(function () {
    $("#hamburger").click(function () {
        $(this).toggleClass("active");
        $(".header-menu").toggleClass("show");
        $("header").toggleClass("menu-show");
    });
});