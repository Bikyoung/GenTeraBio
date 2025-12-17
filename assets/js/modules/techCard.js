export function setHeightTechCard(page=$(document)) {
    let cardArr = $(page).find(".tech__card");

    /* 카드의 높이를 초기화 
       (리사이즈 시, 이전 해상도에서의 높이 설정을 해제하여 최신 콘텐츠 높이를 정확히 측정) */
    cardArr.css("height", "auto");

    let maxHeight = cardArr.eq(0).outerHeight();


    cardArr.each(function(idx, card) {
        let height = $(card).outerHeight();

        if(maxHeight < height) {
            maxHeight = height;
        }
    });

    cardArr.css("height", `${maxHeight}px`);
    console.log("높이", maxHeight);
}