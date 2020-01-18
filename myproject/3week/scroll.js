//1. 스크롤 값을 받아오기
//2. 만약 스크롤 값이 320px 이상으로 넘어가면
//3. #product-img-warp의 position을 static으로 변경하기

$(window).scroll(function () {
	var scrollValue = $(document).scrollTop();
	// console.log(scrollValue);
	if (scrollValue > 320) {
		$('#product-img-warp').addClass('scroll-stop')
	}
});