$(document).ready(function(){

	var choice1="";
	var choice2="";
	var score = 0;

	$('img').click(function(){
		choice1 = $(this).attr('class');
		console.log(choice1);
	});

	$('.palette').click(function(){
		choice2 = $(this).attr('id');
		console.log(choice2);
		if(choice1===choice2){
	   		score++;
	   		if (score===3){
	   			endGame();
	   		} else {
	   			console.log(score);
	   			console.log("correct");
	   			$("#message").text("Correct!");
	   			$("#score").text(score);
	   		}			   		
		}
	   	else {
	   			console.log("wrong");
	   			$("#message").text("Wrong!");
	   	}	
		
	});

	function endGame(){
		console.log("end game");
		$("#score").text(score);
	   	$("#message").text("Yay! You've beat the game.");
	}
});