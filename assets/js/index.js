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