/*
=======================================================

** Week 4 - Project 2**
*** jQuery Mania ***


=======================================================
*/

// Add your JS here.


$(document).ready(function() {


//1.
$( ".alertme" ).click(function() {
    alert("jQuery seems easy so far!");
});


//2.

    $( ".clickme" ).click(function() {
        $(".clickme").html("I was clicked");
      });


//3.

$("button").click(function() {
    $("button").addClass("buttonStyle");
});


//4.
$("button").click(function() {
    $(".addDifferentStyle").addClass("addUniqueStyle");
});



//5.
$("button").click(function() {
  $(".addStyle, .addDifferentStyle").removeClass();
});


//6.
$(".clickToggle").click(function() {
  $(".clickToggle").toggle(2000);
});



//7.
$(".squareBtn").click(function() {
  $(".square").hide();
});




//8.
$(".circle").click(function() {
  $(".circle").hide();
});



//9.
$(".toggleRedSquare").click(function() {
  $(".redSquare").toggle(1.5);
});






});  // Close: $(document).ready(function() {
