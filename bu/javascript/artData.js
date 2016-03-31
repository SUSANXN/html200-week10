	$("document").ready(function(){
		//console.log("hello from data.js");
		//hook onto the ul...
	var drawingDiv = document.getElementById("drawing");
	var watercolorDiv = document.getElementById("water-color");
	var oilDiv = document.getElementById("oil");
		
	var drawingObj = {};
	var watercolorObj = {};
	var oilObj = {};
	
	drawingObj = {
		drawing1 : {
			link : "#",
			img : "images/artwork/drawing/thumbs/drawing_1.jpg",
			fullName : "Drawing 1",
			years : "1748 - 1845"
		},
		drawing2 : {
			link : "#",
			img : "images/artwork/drawing/thumbs/drawing_2.jpg",
			fullName : "Orazio Gentileschi",
			years : "1563 - 1639"
		}
	};
	
	watercolorObj = {
		watercolor1 : {
			link : "#",
			img : "images/artwork/waterColor/thumbs/watercolor_1.jpg",
			fullName : "Watercolor 1",
			years : ""
		},
		watercolor2 : {
			link : "#",
			img :  "images/artwork/waterColor/thumbs/watercolor_2.jpg",
			fullName : "Watercolor 1",
			years : ""
		}
	};
	
	oilObj = {
		oil1 : {
			link : "#",
			img :  "images/artwork/oil/thumbs/oil_1.jpg",
			fullName : "oil 1",
			years : ""
		},
		oil2 : {
			link : "#",
			img :  "images/artwork/oil/thumbs/oil_2.jpg",
			fullName : "oil 1",
			years : ""
		}
	};
	
	function buildListItems(myObject, targetElement)
	{
		//start a variable to build up a list with
		var output = "";
		
		for(i in myObject)
		{
			output += '<img src="' + myObject[i].img + '" />';
		}
		//put the built object list to the element that was passed into the function...
		targetElement.innerHTML = output;
		
	}
	//console.log(watercolorObj);
	
	buildListItems(drawingObj, drawingDiv);
	buildListItems(watercolorObj, watercolorDiv);
	buildListItems(oilObj, oilDiv);
	
	//add imgActive to the first oil when the page loads
	$("#oil img:first-child").attr("class", "imgActive");
	//fade out img elements so they start that way
	//EXCEPT! the one with the imgActive class
	var allImages = $("#water-color img,#drawing img, #oil img").not(".imgActive");
	TweenMax.staggerTo(allImages, .7, {alpha:.5}, .05);
	
	//setup buttons on the images in the divs...
	$("#water-color img, #oil img, #drawing img").on("mouseover", onFadeIn);
	$("#water-color img, #oil img, #drawing img").on("mouseout", onFadeOut);
	$("#water-color img, #oil img, #drawing img").on("click", selectedImg);

	function onFadeIn(evt)
	{
		//console.log(evt.currentTarget);
		TweenMax.to(this, .7, {alpha: 1});
	}
	function onFadeOut(evt)
	{
		console.log(evt.currentTarget);
		var currentImg = $(evt.currentTarget);
		
		if(currentImg.attr("class") == "imgActive")
		{
			//console.log("class present");
			
		}else{
			TweenMax.to(this, .7, {alpha: .5});
		}
	}
	
	function selectedImg(evt)
	{
		//fade out the selected thumb image
		TweenMax.to("#water-color img.imgActive, #drawing img.imgActive, #oil img.imgActive", .7, {alpha:.5});
		$("#oil img").removeClass("imgActive");
		var imgTarget = $(evt.currentTarget);
		imgTarget.addClass("imgActive");
		TweenMax.to(imgTarget, .7, {alpha: 1});
		
		//get the src attr
		var source = imgTarget.attr("src");
		var path = source.replace("thumbs/", "");
		
		//CHANGE THE MAIN IMAGE!!.
		console.log(path);
		var main = $("#placeholder");
		main.attr("src", path);
	}

});//closing document.ready
