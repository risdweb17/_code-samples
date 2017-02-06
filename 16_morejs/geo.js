$(document).ready(function(){
	function getLocation() {
	    if (navigator.geolocation) {
	        navigator.geolocation.getCurrentPosition(showPosition);
	         console.log("geo");
	    } else {
	        $("#geo").text("Geolocation is not supported by this browser.");
	    }

	    function showPosition(position) {
	    	$("#geo>p").html("Latitude: " + position.coords.latitude + "<br> Longitude: " + position.coords.longitude); 

	    	var img_url = "https://maps.googleapis.com/maps/api/staticmap?center="+position.coords.latitude + "," + position.coords.longitude +"&zoom=14&size=400x300&sensor=false";
	    	$("#map").html("<img src='"+img_url+"'>");
	    }
	}

	getLocation();

	

});
