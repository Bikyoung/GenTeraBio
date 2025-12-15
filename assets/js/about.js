// ------------------------------ about-hero ------------------------------
// .index-hero__title과 .index-hero__subtitle이 스크롤에 따라 fadeInUp
const $aboutHeroTl = gsap.timeline();

$aboutHeroTl
    .from(".about__hero--mintitle", {
        y: 100,
        autoAlpha: 0,
        duration: 1,
        ease: "power1.out"
    })
    .from(".about__hero--title", {
        y: 100,
        autoAlpha: 0,
        duration: 1,
        ease: "power1.out"
    },"-=0.35");

// --------------about-map----------------

$(function() {
    // 지도를 표시할 div
    let $mapContainer = $('#map')[0]; 
    
    let mapOption = {
        center: new kakao.maps.LatLng(37.450356, 126.702780), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

    // 지도를 생성합니다
    let map = new kakao.maps.Map($mapContainer, mapOption);

    // 마커 이미지 설정
    let imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png', 
        imageSize = new kakao.maps.Size(64, 69), 
        imageOption = { offset: new kakao.maps.Point(27, 69) };

    let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
        markerPosition = new kakao.maps.LatLng(37.450356, 126.702780);

    // 마커 생성
    let marker = new kakao.maps.Marker({
        position: markerPosition,
        image: markerImage
    });

    // 지도에 마커 표시
    marker.setMap(map);
});
