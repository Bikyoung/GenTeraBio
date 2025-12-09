// ------------------------------ story ------------------------------
// .story__container--top와 .story__container--bottom이 스크롤에 따라 y축으로 이동하며, 중첩되어 있던 picture img가 등장
const $storyTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".story",
        start: "8% top",
        end: "bottom top",
        pin: true,
        anticipatePin: true,
        scrub: 1.5    }
});

$storyTimeline
    .to(".story__container--top", {
        y: "-100%"
    })
    .to(".story__container--bottom", {
        y: "100%"
    }, "<")
    .from("picture img", {
        scale: 0,
        autoAlpha: 0
    }, "-=0.5");

// ------------------------------ technology ------------------------------
// .technology-content__item에 마우스를 올리면(mouseenter) 보여지는 이미지와 텍스트가 변경됨 
$(".technology-content__item").on("mouseenter", function() {
    let index = $(this).index();

    $(".technology-content__item").removeClass("on");
    $(this).addClass("on");

    $(".technology-image__item").removeClass("on");
    $(".technology-image__item").eq(index).addClass("on");
});

// .technology-content__item에 마우스를 떼면(mouseleave) 보여지는 이미지와 텍스트가 변경됨 
$(".technology-content__item").on("mouseleave", function() {
    $(".technology-content__item").removeClass("on");
    $(".technology-content__item").eq(0).addClass("on");
    

    $(".technology-image__item").removeClass("on");
    $(".technology-image__item").eq(0).addClass("on");
});

// ------------------------------ facilities ------------------------------
let facilitiesSwiper = new Swiper(".facilities__Swiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    }
  });

