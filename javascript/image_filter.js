
$("document").ready( function(){
//assign event bindings to all images
	$("img").on("click", flipImage);
	
	//assign TWO event types to the images in the same line
	$("img").on("mouseover mouseleave", highlightImage);
	
	//setup buttons for click
	$("#robots").on("click", filterRobotsFn);
	$("#no-figures").on("click", filterFiguresFn);
	$("#plus-3").on("click", filterPlus3Fn);
	$("#clear").on("click", clearFilterFn);
	//create a global variable for all images
	
	function clearFilterFn(evt)
	{
		var selection = $("#drawing img, #water-color img, #oil img");
		//clear all filters
		TweenMax.to(selection, 1, {alpha:1});
	}
	
	function filterRobotsFn(evt)
	{
		//clear out any possible filter already in place
		clearFilterFn();
		
		//console.log(evt.target);
		var selection = $("#drawing img, #water-color img, #oil img").not(".robots");
		TweenMax.staggerTo(selection, 1, {alpha:.25}, .01);
	}
	function filterFiguresFn(evt)
	{
		//clear out any possible filter already in place
		clearFilterFn();
		
		var selection = $("#drawing img, #water-color img, #oil img").not(".no-figure");
		TweenMax.staggerTo(selection, 1, {alpha:.25}, .01);
	}
	
	function filterPlus3Fn(evt)
	{
		//clear out any possible filter already in place
		clearFilterFn();
		
		var selection = $("#drawing img, #water-color img, #oil img").not(".plus-3");
		TweenMax.staggerTo(selection, 1, {alpha: .25, ease:Bounce.easeOut}, .01);
	}
	
	
	function highlightImage(evt)
	{
		// var currentImage = evt.target;
		// console.log("yes the function is working");
		// $(currentImage).toggleClass("highlightImage");
	}
	
	

	function flipImage(evt)
	{
		//console.log(evt.target);
		var currentImage = evt.target; 
		
		//flip the image
		TweenMax.to(currentImage, 1, 
			{scaleY:-1, scaleX: -1, alpha: 0} );
 	}
	
	
	
	
});
