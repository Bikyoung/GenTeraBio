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
$(function() {
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

// .facilities .swiper-slide의 제각각 높이를 하나로 통일함
$(function() {

    function setFacilitiesSlideHeight() {
        let facilitiesSlideArray = $(".facilities .swiper-slide");
    
        /* 모든 .facilities .swiper-slide의 높이를 초기화
           반응형시 .facilities .swiper-slide의 기존 높이가 필요함 */
        facilitiesSlideArray.css("height", "auto");

        // .facilities .swiper-slide 중 높이가 제일 큰 첫 번째 요소의 높이를 가져옴
        let firstSlideHeight = facilitiesSlideArray.eq(0).outerHeight();
    
        facilitiesSlideArray.css("height", `${firstSlideHeight}px`);
    }

    setFacilitiesSlideHeight();

    $(window).on("resize", () => {setFacilitiesSlideHeight()});
});


// ------------------------------ partnership ------------------------------
let partnersSwiper = new Swiper(".partnersSwiper", {
    slidesPerView: 1.2,
    centeredSlides: true,
    spaceBetween: 14,
    loop: true,
    autoplay: {
        delay: 900,
    },

    breakpoints: {
        // 화면 너비가 481px 이상일 때 적용
        480: {
            slidesPerView: 1.4
        },
        // 화면 너비가 560px 이상일 때 적용
        561: {
            slidesPerView: 1.8
        },
        // 화면 너비가 768px 이상일 때 적용
        768: {
            slidesPerView: "auto",
            spaceBetween: 26
        }
    }
});

// .partners .swiper-slide의 제각각 높이를 하나로 통일함
$(function() {

    function setPartnersSlideHeight() {
        let partnersSlideArray = $(".partners .swiper-slide");
    
        /* 모든 .partners .swiper-slide의 높이를 초기화
           반응형시 .partners .swiper-slide의 기존 높이가 필요함 */
        partnersSlideArray.css("height", "auto");

        // .partners .swiper-slide 중 높이가 제일 큰 첫 번째 요소의 높이를 가져옴
        let firstSlideHeight = partnersSlideArray.eq(0).outerHeight();
    
        partnersSlideArray.css("height", `${firstSlideHeight}px`);
    }

    setPartnersSlideHeight();

    $(window).on("resize", () => {setPartnersSlideHeight()});
});

