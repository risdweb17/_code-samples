$(document).ready(function() {
 
  var triangles = "$";

  function drawTriangle() {
	  for(var index=0; index<7; index++){
	    // console.log(index);
	    // console.log("before: " + triangles);
	    triangles = triangles + "#";
	    console.log(triangles);
	    $("#pyramid").append(triangles + "<br>");
	  }
  }


  var fruits = ["apples", "bananas", "coconut", "dragonfruit"];
  var allFruits = "";

  console.log(fruits[1]);

  for(var j=0; j<fruits.length; j++){
  	console.log(fruits[j]);
    allFruits = allFruits + " " + fruits[j]; // this is method 2, outputing it all at once
    // $("#pyramid").append(fruits[j] + " "); <---this is method 1, similar to above
  }

  $("#pyramid").append(allFruits);
 
  

});