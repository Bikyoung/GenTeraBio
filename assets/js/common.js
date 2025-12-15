gsap.registerPlugin("ScrollTrigger");

$(function() {
    // GNB 기능
    $(".header__hamburger").on("click", function() {
        console.log("눌");
        $(".side-menu").stop().slideDown();
    });
    
    $(".side-menu").on("click", function() {
        $(".side-menu").stop().slideUp();
    })
});