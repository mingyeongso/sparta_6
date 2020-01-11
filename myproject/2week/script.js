// 이름, 수량, 주소, 휴대폰번호 중 하나라도 입력되어 있지 않으면, alert이 뜨고,
// 입력 안한 곳에 포커스가 맞춰지도록 해보세요.(JQuery의 .focus()를 이용하면 굿!)


//1. 이름 인풋 값 정의
//2. 이름 인풋 값이 비어있다면, alert "이름을 입력하세요" 띄우기.
//3. 이름 인풋에 포커스 띄우기


function check() {
	let name = $("#inputName").val();
	let amount = $("#inputAmount").val();
	let address = $("#inputAddress").val();
	let contact = $("#inputContact").val();
	let phonecheck = /^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$/;

	if (name == "") {
		alert('이름을 입력하세요');
		$("#inputName").focus();
	} 

	else if(amount == "수량을 선택하세요"){
		alert('수량을 선택하세요');
		$("#inputAmount").focus();
	} 

	else if(address == ""){
		alert('주소를 입력하세요');
		$("#inputAddress").focus();
	} 

	else if(contact == ""){
		alert('전화번호를 입력하세요');
		$("#inputContact").focus();
	} 

	//만약 번호 양식을 틀렸을 경우
	else if(!phonecheck.test( $('#inputContact').val() )){
		alert('잘못된 전화번호입니다. 확인 후 다시 입력해 주세요.');
		$("#inputContact").focus();
	} 

	else{
		alert('구매 완료')
	}

}
