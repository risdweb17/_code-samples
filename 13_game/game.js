$(document).ready(function(){

	//declare variables
	var choice1="";
	var choice2="";
	var score = 0;


	$('img').click(function(){ 				//instructions when <img> is clicked
		$("img").removeClass('selected');   //remove class "selected"
		choice1 = $(this).attr('class');	//get class name of clicked element
		console.log(choice1); 				//check it on the console
		$(this).addClass('selected');		//add class="selected" on clicked element to give it a border
	});

	$('.palette').click(function(){ 		//instructions when <div class="palette"> is clicked
		choice2 = $(this).attr('id'); 		//get id of clicked element
		console.log(choice2); 				//check it on the console

		if(choice1===choice2){ 			//check if first choice is the same as second choice
			$("img").removeClass('selected');//remove class "selected"
	   		score++; 						//add 1 to the score
	   		if (score===3){ 				//if this is the last match (i.e. the score becomes 3), end the game
	   			endGame(); 						//see function named endGame below
	   		} else { 						//if they match and this isn't the last one
	   			console.log(score); 			//check the score on console
	   			console.log("correct"); 		//output "correct" on console
	   			$("#message").text("Correct!").fadeIn().delay(300).fadeOut(); //put "Correct" in <div id="#message"></div>, then fade it in and out
	   			$("#score").text(score); 		//output the value of the variable score in <span id="#score"></span>
	   		}			   		
		}
	   	else { 							//otherwise, i.e. if first choice is NOT the same as second choice
	   			console.log("wrong");			//output "wrong" on console
	   			$("#message").text("Wrong!").fadeIn().delay(300).fadeOut();	//put "Wrong" in <div id="#message"></div>, then fade it in and out
	   	}	
		
	});


	function endGame(){
		console.log("end game"); 		//output "end game" on console
		$("#score").text(score);		//output the value of the variable score in <span id="#score"></span>
	   	$("#message").text("Yay! You've beat the game.").fadeIn(); //put "Yay! You've beat the game." in <div id="#message"></div>, then fade it in
	   	$('img, .palette').unbind();	//clears event handlers attached to those elements, i.e. the .click events
	}
});