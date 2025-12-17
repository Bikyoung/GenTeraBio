AOS.init({
    duration: 600, 
    easing: 'ease-in-out'
});


// GNB 기능
$(".header__hamburger").on("click", function() {
    $(".side-menu").stop().slideDown();
});

$(".side-menu").on("click", function() {
    $(".side-menu").stop().slideUp();
})




