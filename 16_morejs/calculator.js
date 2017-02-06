$(document).ready(function(){
	$("#input").focus();

	var input = 0;
	var unitIn = 72;
	var unitOut = 12;
	var answer = 0;
	var ratio = 1;



	$("#from span").click(function(){
		$("#from span").removeClass('selected');
		$(this).addClass('selected');
		convert();
      });

	$("#to span").click(function(){
		$("#to span").show().removeClass('selected');
		$(this).addClass('selected');
		convert();
  	});

	$('#converter').keyup(function(){
		convert();}
	);

	$('#converter').click(function(){
		convert();}
	);


	function getInputs(){
		input = $("#input").val();
		unitIn = $('#from span.selected').attr('data-unit');
		unitOut = $('#to span.selected').attr('data-unit');
	}

	function convert(){
		getInputs();
	  	ratio = unitIn / unitOut;
	  	answer = (input * ratio).toFixed(3).replace(/[.,]00$/, "");
		$("#answer").text(answer);
	}

});
