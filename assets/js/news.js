$(function(){
    $(".news__tab-menu li").on("click", function(){
        let idx = $(this).index();

        $(".news__tab-menu li").removeClass("news__tab-menu--active");
        $(this).addClass("news__tab-menu--active");

        $(".news__contents > div").hide();
        $(".news__contents > div").eq(idx).show();
        return false;
    });
})

$(function(){
    $(".pagination__btn-num").on("click", function(){

        $(".pagination__btn-num").removeClass("pagination__btn-num--active");
        $(this).addClass("pagination__btn-num--active");

    });
})