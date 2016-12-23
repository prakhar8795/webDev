$(document).ready(function() {
	$(".panel-heading").click(function() {
		var classes = ["toggle glyphicon glyphicon-triangle-top","toggle glyphicon glyphicon-triangle-bottom"];
		//console.log(this) ;
		//console.log($(this).find(".toggle")) ;
		$($(this).find(".toggle")).each(function(){
  			//console.log(this) ;
    		this.className = classes[($.inArray(this.className, classes)+1)%classes.length];
 		 });
	});

	$(".btn-group>.btn").click(function() {
		console.log("I'm") ;
		if($(this).hasClass("btn-default")) {
			console.log("Here") ;
			console.log($(".btn-group").find(".btn-primary").text()) ;
			
			var currentActive = $(".btn-group").find(".btn-primary").text() ;
			if(currentActive=="Post Graduate") {
				$("#postgraduate").addClass("hidden") ;
			}
			else if(currentActive=="Under Graduate") {
				$("#undergraduate").addClass("hidden") ;
			}
			else {
				$("#phd").addClass("hidden") ;
			}
			
			var clickedElement = $(this).text() ;
			if(clickedElement=="Post Graduate") {
				$("#postgraduate").removeClass("hidden") ;
			}
			else if(clickedElement=="Under Graduate") {
				$("#undergraduate").removeClass("hidden") ;
			}
			else {
				$("#phd").removeClass("hidden") ;
			}
			
			$(".btn-group").find(".btn-primary").removeClass("btn-primary").addClass("btn-default") ;
			$(this).removeClass("btn-default").addClass("btn-primary") ;

		}
	});

	$(".btn-group-vertical>.btn").click(function() {
		console.log("I'm") ;
		if($(this).hasClass("btn-default")) {
			console.log("Here") ;
			console.log($(".btn-group-vertical").find(".btn-primary").text()) ;
			
			var currentActive = $(".btn-group-vertical").find(".btn-primary").text() ;
			if(currentActive=="Post Graduate") {
				$("#postgraduate").addClass("hidden") ;
			}
			else if(currentActive=="Under Graduate") {
				$("#undergraduate").addClass("hidden") ;
			}
			else {
				$("#phd").addClass("hidden") ;
			}
			
			var clickedElement = $(this).text() ;
			if(clickedElement=="Post Graduate") {
				$("#postgraduate").removeClass("hidden") ;
			}
			else if(clickedElement=="Under Graduate") {
				$("#undergraduate").removeClass("hidden") ;
			}
			else {
				$("#phd").removeClass("hidden") ;
			}
			
			$(".btn-group-vertical").find(".btn-primary").removeClass("btn-primary").addClass("btn-default") ;
			$(this).removeClass("btn-default").addClass("btn-primary") ;

		}
	});
});