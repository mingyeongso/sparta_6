$(document).ready(function(){
    newOrder();
    });


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
		$.ajax({
          type: "POST",
          url: "/order",
          data: { name_give:name, count_give:amount, address_give:address, phone_give:contact },
          success: function(response){
            if(response['result'] == 'success'){
                alert('주문 완료!');
                window.location.reload();
            }
          }
        })
	}
}

function newOrder() {
    alert("get")
    $.ajax({
          type: "GET",
          url: "/orderlist",
          data: {},
          success: function(response){
              let orderList = response['order'];
              console.log(orderList);

              for (let i = 0; i < orderList.length; i++) {
                 makeList(orderList[i]['name'],orderList[i]['count'],orderList[i]['address'],orderList[i]['phone'])
               }
          }
    })
}


function makeList(name,amount,address,contact) {
      let temp_html = '<tr><td>'+ name +'</td><td>'+ amount + '</td><td>' + address + '</td><td>' + contact + '</td></tr>';
      $('#table-body').append(temp_html);
}