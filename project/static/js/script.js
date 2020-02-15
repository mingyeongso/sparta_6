$(document).ready(function(){
  suntime();
});





function suntime() {
	$.ajax({
		type: "GET",
		url: "https://api.sunrise-sunset.org/json?lat=37.532600&lng=127.024612&date=today",
		data: {},
		success: function(response){
			let sunrise = response['results']['sunrise'];
			let sunset = response['results']['sunset'];
			$('#sunrise').text(sunrise);
			$('#sunset').text(sunset);
		}

	})
}