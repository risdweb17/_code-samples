$(document).ready(function() {

//declaring some variables
  var x = 5; //data type number 
  var y = "5"; //data type string

  console.log(x==y); //true
  console.log(x===y); //false

  var z = 15;
  var s = 3;

//printing out the results in console
  console.log(x + z);
  console.log(x == y);
  console.log(x === y);
  console.log("String"+ x + "concatenation"); //strings go in quotation marks and should be separate from variables

  function getArea(width, height) {
    return width*height;
  }

  var area = getArea(9, 10);

//printing out the results in html
  $("#area").text(area);

// an array
  var carNames = [
          "Civic",
          "Prius",
          "Wrangler",
          "Cayenne",
          "GranTurismo",
          "Toyota"];

  console.log(carNames);
  console.log(carNames[5]);
  console.log(carNames.length);

//conditionals
  function checkArray() {
     console.log(carNames.length < 3);
     
     if(carNames.length < 3){
        console.log("We have less than 10 cars.");
     }
     else{
        console.log("We have more than 10 cars.")
     }
  }

  checkArray();

//loops

  var n = 0;
  while(n < carNames.length){
    console.log(carNames[n]);
    n = n+1;
  }

  for(var m = 0; m < 6; m++){
    console.log(carNames[m]);
  }

  var bar = "<div class='bar'></div>"
  var i = 0; // initialize counter
  function delayedLoop(){        //  declare the function
    setTimeout(function () { 
        $("body").append(bar);   
        i++;                     //  increment the counter
        if (i < 500) {           //  if the counter < 500, call the loop function 
           delayedLoop()         
        }                        
     }, 800); // 800ms delay
  }

  delayedLoop();                //  call the function





});

