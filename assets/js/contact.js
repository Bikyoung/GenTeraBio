$(document).ready(function(){
    $(".file-name").on('click',function(e){
        e.preventDefault();
        $("#fileInput").click();
    });

    // 파일 선택 후 파일명 표시
        $("#fileInput").on("change", function(){
            let fileName = this.files.length > 0 ? this.files[0].name : "파일 선택";
            $("#filename").text(fileName);
            $("#filename").css("color", "#1c1c1c");
        });

        // 보내기 버튼 클릭 시 유효성 검사
        $(".contact__inquiry--btn").on("click", function(){
            let isValid = true;

            // 모든 필수 입력란 검사
            $(".contact__inquiry--input[required], .contact__inquiry--inquiry[required], #fileInput[required]").each(function(){
                if($(this).val() === "") {
                    isValid = false;
                    return false; // 하나라도 비어있으면 반복 중단
                }
            });

            // 체크박스 검사
            let isChecked = $(".contact__inquiry--check input[type=checkbox]").is(":checked");

            if(isValid && isChecked){
                alert("문의가 성공적으로 전송되었습니다.");
            } else if(!isValid){
                alert("필수 입력란을 모두 작성해주세요.");
            } else if(!isChecked){
                alert("개인정보 수집 및 이용에 동의해주세요.");
            }
        });
});