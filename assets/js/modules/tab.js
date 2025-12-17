/* 각 페이지의 각 섹션별 탭 클릭 시 활성(on)탭을 변경
   탭 기능이 다른 페이지의 탭에게 영향을 주는 것을 방지 */
export function tab($page = $(document)) {  // 페이지 구분
    $page.find(".tab").each(
        function() {
            let $sec = $(this).closest("section");  // 페이지 내 섹션 구분
            
            $sec.find(".tab").on("click", function() {
                $sec.find(".tab").removeClass("on");
                $(this).addClass("on");
            });
        }
    );
}