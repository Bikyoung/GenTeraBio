$(function() {
    $(".manufacture__tab").on("click", function() {
        let idx = $(this).index();

        $(".manufacture__tab").removeClass("on");
        $(this).addClass("on");

        $(".manufacture__panel").removeClass("on");
        $(".manufacture__panel").eq(idx).addClass("on");
    });
});