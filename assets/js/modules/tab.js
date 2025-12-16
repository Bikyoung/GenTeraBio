// 탭 클릭 시 활성(on)탭을 변경
export function tab() {
    $(".tab").on("click", function() {
        $(".tab").removeClass("on");
        $(this).addClass("on");
    });
}