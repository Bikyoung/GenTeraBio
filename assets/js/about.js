// --------------about-map----------------
$(function () {
    // 지도를 표시할 div
    let $mapContainer = $('#map')[0];

    let mapOption = {
        center: new kakao.maps.LatLng(37.450356, 126.702780), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

    // // 지도를 생성합니다
    let map = new kakao.maps.Map($mapContainer, mapOption);
    let markerPosition = new kakao.maps.LatLng(37.450356, 126.702780);

    // // 마커 생성
    let marker = new kakao.maps.Marker({
        position: markerPosition
    });

    // // 지도에 마커 표시
    marker.setMap(map);

});
