$(function(){
    $(".news__tab--menu li").on("click", function(){
        let idx = $(this).index();

        $(".news__tab--menu li").removeClass("on");
        $(this).addClass("on");

        $(".news__contents > div").hide();
        $(".news__contents > div").eq(idx).show();
        return false;
    });
})

$(function(){
    $(".pagination__btn--num").on("click", function(){

        $(".pagination__btn--num").removeClass("on");
        $(this).addClass("on");

    });
})