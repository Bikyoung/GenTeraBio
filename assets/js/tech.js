import {tab} from "./modules/tab.js";
import {setHeightTechCard} from "./modules/techCard.js";

tab();
setHeightTechCard();

$(".mechanism__tab").on("click", function() {
    let idx = $(this).index();
    $(".mechanism__panel").removeClass("on");
    $(".mechanism__panel").eq(idx).addClass("on");
});

$(".difference__card").on("click", function() {
    $(".difference__card").removeClass("expand");
    $(this).addClass("expand");
})


$(window).on("resize", () => {
    setHeightTechCard();
});


