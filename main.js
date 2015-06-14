$(function() {

var beginClick = function() {
	$(".begin").addClass("inactive");
	$("#qone").removeClass("inactive");
};

var nextClick = function() {
	var clicked = $(this).parent().prop('id');
	
 	if (clicked == "qone") {
 		$("#qone").addClass("inactive");
 		$("#qtwo").removeClass("inactive");
 	} else if (clicked == "qtwo") {
 		$("#qtwo").addClass("inactive");
 		$("#qthree").removeClass("inactive");
 	} else if (clicked == "qthree") {
 		$("#qthree").addClass("inactive");
 		$("#qfour").removeClass("inactive");
 	} else if (clicked == "qfour") {
 		$("#qfour").addClass("inactive");
 		$(".submit").removeClass("inactive");
 	}
};

var submitClick = function() {
	$(".submit").addClass("inactive");
	$(".results").removeClass("inactive");
}

$(".begin").click(beginClick);
$(".next").click(nextClick);
$(".submit").click(submitClick);
});