function submitLibraryForm(){
	
	var searchText = $("#libSearchBox").val()
	var searchDB = $("#quickSearchDB").val()
	var critCHAR = $('input[name=searchCRIT]:checked', '#searchCRIT').val();
	var searchURL ="http://librarycat.risd.edu/search/" + critCHAR + "?SEARCH=" + searchText + "&searchscope=4";

	window.open(searchURL);
}

$(document).ready(function() {
    //auto focus search box
    function inputFocus(){
      setTimeout(function(){ $(".active input.form-control").focus(); }, 0);
    }

    inputFocus();
    
    //carry over inputs between search tabs
    var input="";
    var typingTimer;              
    var getInputInterval = 200;  

    function getInput () {
      input = $('.active input[type="text"]').val();
    }

    //get input after typing
    $('input[type="text"]').keyup(function(){
        clearTimeout(typingTimer);
        if ($('input[type="text"]').val) {
            typingTimer = setTimeout(getInput, getInputInterval);
        }
    });

    //show reset button upon input
    function showReset(){
      $('input[type="text"]').keydown(function () {
          $(".reset").fadeIn(200);
          $(this).off("keydown");
      });
    }
    
    showReset();

    $("#searchArea .nav-tabs li, .options label").click( function(){
      inputFocus();
      $('input[type="text"]').val(input);
    });


    //submit search
      $("#libSearch").on("click", submitLibraryForm);

      $("#libSearchBox").keypress(function (e) {
      if (e.which == 13) {
        submitLibraryForm();
        return false; 
      }
    });

    //clear search input
    $('.reset').click(function(){
      $('input[type="text"]').val('');
      inputFocus();
      getInput();
      $(".reset").fadeOut(200);
      $('input[type="text"]').on("keydown", showReset);
    });

	//down button
	$("a.down").click(function(){
	    $('html, body').animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top - 90
	    }, 200);
	    return false;
	});

  
  //Populate live hours

     //Load LibCal hours API
    function getData(){
      return $.ajax({
            type: 'GET',
            url: 'https://api3.libcal.com/api_hours_grid.php?iid=618&format=json&weeks=1',
            dataType: 'jsonp'
        }); 
    }    

    /* dataType: jsonp is ued for cross-domain request, meaning you are requesting the data from to a different domain 
      dataType: json  is used for same domain-same origin request. */

    getData().done(buildTable);

    //Highlight Today
    var today = new Date();

    function getToday(){  
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();

    if(dd<10) {
        dd='0'+dd
    } 

    if(mm<10) {
        mm='0'+mm
    } 
    today = yyyy+"-"+mm+"-"+dd;
    }

    function buildTable(data) {
        var locationName = $('body').attr("id");
        var loc;

        switch(locationName) {
            case "circulation":
                loc = 1;
                break;
            case "research":
                loc = 2;
                break;
            case "picture":
                loc = 3;
                break;
            case "archives":
                loc = 4;
                break;
            case "special":
                loc = 5;
                break;
            case "tech":
                loc = 6;
                break;
            default:
                loc = 2;
        }


        getToday();
        var tr;

        $.each(data["locations"][loc].weeks[0], function(index, value){
             var day = "<td>" + index + " ";
             var date = value.date.substring(5).replace("-", "/"); + "</td>";
             var times = "<td>" + value.rendered + "</td>";
             if(value.date===today){
                tr+= "<tr class='today'>" + day + date + times + "</tr>";
             }
             else{
                tr+= "<tr>" + day + date + times + "</tr>";
             }             
        });

        $("table.hours").append(tr);
    }

    // function buildDefault(){

    //   $("table.hours").append(
    // }

});

//external links
$(window).load(function(){
    $("a[href^='http://']").attr("target","_blank");
});

