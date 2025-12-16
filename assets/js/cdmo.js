$(function() {
    $(".manufacture__tab").on("click", function() {
        let idx = $(this).index();

        $(".manufacture__panel").removeClass("on");
        $(".manufacture__panel").eq(idx).addClass("on");
    });
});

