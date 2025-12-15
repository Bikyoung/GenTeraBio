function removeControls() {
    var video = document.querySelector('video');
    video.removeAttribute('controls');
  }
  
  function addControlsMobile() {
    var video = document.querySelector('video');
    video.setAttribute('controls', 'controls');
  }
  
  const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  if (isMobile) {
    removeControls();
    addControlsMobile();
  }
  
// ------------------------------ index-hero ------------------------------
// .index-hero__title과 .index-hero__subtitle이 스크롤에 따라 fadeInUp
const $indexHeroTl = gsap.timeline();

$indexHeroTl
    .from(".index-hero__subtitle", {
        y: 100,
        autoAlpha: 0,
        duration: 1,
        ease: "power1.out"
    })
    .from(".index-hero__title", {
        y: 100,
        autoAlpha: 0,
        duration: 1,
        ease: "power1.out"
    },"-=0.35");

// ------------------------------ story ------------------------------
// .story__title과 .story__subtitle이 스크롤에 따라 fadeIn
gsap.from(".story__title, .story__subtitle", {
   scale: 0.5,
   autoAlpha: 0,
   duration: 1.2,
   scrollTrigger: {
        trigger: ".story",
        start: "top 40%",
        // once: true
   } 
});

// .story__container--top와 .story__container--bottom이 스크롤에 따라 y축으로 이동하며, 중첩되어 있던 picture img가 등장
const $storyTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".story",
        start: "8% top",
        end: "bottom top",
        pin: true,
        anticipatePin: true,
        scrub: 1.5   
    }
});

$storyTl
    .to(".story__container--top", {
        y: "-100%"
    },)
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

// .technology__container가 스크롤에 따라 fadeInUp
gsap.from(".technology__container", {
    y: 100,
    autoAlpha: 0,
    duration: 1,
    ease: "power1.out",
    scrollTrigger: {
        trigger: ".technology",
        start: "top 30%"
    }
});

// ------------------------------ facilities ------------------------------
// 화살표 버튼 클릭 및 스와이프 시, 슬라이드가 좌우로 이동
let facilitiesSwiper = new Swiper(".facilities__Swiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    }
});

// .swiper-slide의 제각각 높이를 하나로 통일함
function setFacilitiesSlideHeight() {
    let facilitiesSlideArray = $(".facilities .swiper-slide");

    /* 모든 .swiper-slide의 높이를 초기화
        반응형시 .swiper-slide의 기존 높이가 필요함 */
    facilitiesSlideArray.css("height", "auto");

    // .swiper-slide 중 높이가 제일 큰 첫 번째 요소의 높이를 가져옴
    let firstSlideHeight = facilitiesSlideArray.eq(0).outerHeight();

    facilitiesSlideArray.css("height", `${firstSlideHeight}px`);
}

setFacilitiesSlideHeight();

$(window).on("resize", () => {setFacilitiesSlideHeight()});


// .facilities__container가 스크롤에 따라 fadeInUp
gsap.from(".facilities__container", {
    y: 100,
    autoAlpha: 0,
    duration: 0.8,
    ease: "power1.out",
    scrollTrigger: {
        trigger: ".facilities",
        start: "top 45%"
    }
});

// ------------------------------ network ------------------------------
const networkVideo = $(".network video");
const networkImg = $(".network img");

// 비디오 재생이 불가할 시, 배경을 이미지로 대체
networkVideo.on("error", function() {
    networkVideo.css("display", "none");
    networkImg.css("display", "block");
});

// 비디오 재생이 가능할 시, 비디오 재생
networkVideo.on("play", function() {
    networkVideo.css("display", "block");
    networkImg.css("display", "none");
});

// .network__value-number의 숫자가 동시에 카운트 업
let networkList = $(".network__value-number");
let counter = {c1: 0, c2: 0, c3: 0, c4: 0, c5: 0, c6: 0 };

gsap.to(counter, {
    c1: 8491, 
    c2: 102,
    c3: 3000,
    c4: 570,
    c5: 4000,
    c6: 1200,
    scrollTrigger: {
        trigger: ".network",
        start: "top 25%",
        toggleActions: "play none none reset"
    },
    duration: 1.5,
    onUpdate() {
        networkList.eq(0).text(Math.floor(counter.c1)).toLocaleString();
        networkList.eq(1).text(Math.floor(counter.c2)).toLocaleString();
        networkList.eq(2).text(Math.floor(counter.c3)).toLocaleString();
        networkList.eq(3).text(Math.floor(counter.c4)).toLocaleString();
        networkList.eq(4).text(Math.floor(counter.c5)).toLocaleString();
        networkList.eq(5).text(Math.floor(counter.c6)).toLocaleString();
    }
});


// ------------------------------ partners ------------------------------
// .partners-slide가 무한 반복 자동 재생
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

// .swiper-slide의 제각각 높이를 하나로 통일함
function setPartnersSlideHeight() {
    let partnersSlideArray = $(".partners .swiper-slide");

    /* 모든 .swiper-slide의 높이를 초기화
        반응형시 .swiper-slide의 기존 높이가 필요함 */
    partnersSlideArray.css("height", "auto");

    // .swiper-slide 중 높이가 제일 큰 첫 번째 요소의 높이를 가져옴
    let firstSlideHeight = partnersSlideArray.eq(0).outerHeight();

    partnersSlideArray.css("height", `${firstSlideHeight}px`);
}

setPartnersSlideHeight();

$(window).on("resize", () => {setPartnersSlideHeight()});


// ------------------------------ contact ------------------------------

gsap.from(".contact__container", {
    scale: 0.2,
    autoAlpha: 0.2,
    duration: 1,
    ease: "power1.out",
    scrollTrigger: {
        trigger: ".contact",
        start: "top 50%",
    }
});

