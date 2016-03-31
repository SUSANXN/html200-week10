	$("document").ready(function(){
		
	//hook onto the art divs
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
		},
		drawing3 : {
			link : "#",
			img : "images/artwork/drawing/thumbs/drawing_3.jpg",
			fullName : "Bob Ross",
			years : "1942 - 1995"
		},
		drawing4 : {
			link : "#",
			img : "images/artwork/drawing/thumbs/drawing_4.jpg",
			fullName : "Pablo Picasso ",
			years : "1881 - 1973"
		},
		drawing5 : {
			link : "#",
			img : "images/artwork/drawing/thumbs/drawing_5.jpg",
			fullName : "Jacques-Louis David",
			years : "1853 - 1890"
		},
		drawing6 : {
			link : "#",
			img : "images/artwork/drawing/thumbs/drawing_6.jpg",
			fullName : "Mark Ryden",
			years : "1963 - present"
		},
		drawing7 : {
			link : "#",
			img : "images/artwork/drawing/thumbs/drawing_7.jpg",
			fullName : "Leonardo da Vinci",
			years : "1452 - 1519"
		},
		drawing8 : {
			link : "#",
			img : "images/artwork/drawing/thumbs/drawing_8.jpg",
			fullName : "William Cumming",
			years : "1917 - 2010"
		},
		drawing9 : {
			link : "#",
			img : "images/artwork/drawing/thumbs/drawing_9.jpg",
			fullName : "Norman Rockwell",
			years : "1894 - 1978"
		},
		drawing10 : {
			link : "#",
			img : "images/artwork/drawing/thumbs/drawing_10.jpg",
			fullName : "Michelangelo Merisi da Caravaggio",
			years : "1571 - 1610"
		},
		drawing11 : {
			link : "#",
			img : "images/artwork/drawing/thumbs/drawing_11.jpg",
			fullName : "Artemisia Gentileschi",
			years : "1593 - 1656"
		},
		drawing12 : {
			link : "#",
			img : "images/artwork/drawing/thumbs/drawing_12.jpg",
			fullName : "Jean-Honoré Fragonard",
			years : "1732 - 1806"
		},
		drawing13 : {
			link : "#",
			img : "images/artwork/drawing/thumbs/drawing_13.jpg",
			fullName : "Jean-Baptiste-Camille Corot",
			years : "1796 - 1875"
		},
		drawing14 : {
			link : "#",
			img : "	",
			fullName : "Jan van Eyck",
			years : "1390 - 1441"
		},
		drawing15 : {
			link : "#",
			img : "images/artwork/drawing/thumbs/drawing_15.jpg",
			fullName : "Jean-Michel Basquiat",
			years : "1748 - 1845"
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
		},
		watercolor3 : {
			link : "#",
			img :  "images/artwork/waterColor/thumbs/watercolor_3.jpg",
			fullName : "Watercolor 1",
			years : ""
		},
		watercolor4 : {
			link : "#",
			img :  "images/artwork/waterColor/thumbs/watercolor_4.jpg",
			fullName : "Watercolor 1",
			years : ""
		},
		watercolor5 : {
			link : "#",
			img :  "images/artwork/waterColor/thumbs/watercolor_5.jpg",
			fullName : "Watercolor 1",
			years : ""
		},
		watercolor6 : {
			link : "#",
			img :  "images/artwork/waterColor/thumbs/watercolor_6.jpg",
			fullName : "Watercolor 1",
			years : ""
		},
		watercolor7 : {
			link : "#",
			img :  "images/artwork/waterColor/thumbs/watercolor_7.jpg",
			fullName : "Watercolor 1",
			years : ""
		},
		watercolor8 : {
			link : "#",
			img :  "images/artwork/waterColor/thumbs/watercolor_8.jpg",
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
		},
		oil3 : {
			link : "#",
			img :  "images/artwork/oil/thumbs/oil_3.jpg",
			fullName : "oil 1",
			years : ""
		},
		oil4 : {
			link : "#",
			img :  "images/artwork/oil/thumbs/oil_4.jpg",
			fullName : "oil 1",
			years : ""
		},
		oil5 : {
			link : "#",
			img :  "images/artwork/oil/thumbs/oil_5.jpg",
			fullName : "oil 1",
			years : ""
		},
		oil6 : {
			link : "#",
			img :  "images/artwork/oil/thumbs/oil_6.jpg",
			fullName : "oil 1",
			years : ""
		},
		oil7 : {
			link : "#",
			img :  "images/artwork/oil/thumbs/oil_7.jpg",
			fullName : "oil 1",
			years : ""
		},
		oil8 : {
			link : "#",
			img :  "images/artwork/oil/thumbs/oil_8.jpg",
			fullName : "oil 1",
			years : ""
		},
		oil9 : {
			link : "#",
			img :  "images/artwork/oil/thumbs/oil_9.jpg",
			fullName : "oil 1",
			years : ""
		}
	};
	
	
	//build list function...
	function buildListItems(myObject, targetElement)
	{
		//start a variable to build up a list with
		var output = "";
		for(i in myObject)
		{
	output += '<img src="' + myObject[i].img + '" />';
		}
		targetElement.innerHTML = output;
	}
	buildListItems(drawingObj, drawingDiv);
	buildListItems(watercolorObj, watercolorDiv);
	buildListItems(oilObj, oilDiv);
	//add a class attribute with a value of "activeImg"
	//to the first oil img so we can style it.....
	$("#oil img:first-child").attr("class", "activeImg");
	
	//fade out all images EXCEPT!!!! the one with the class activeImg
	var allImages = $("#water-color img, #drawing img, #oil img").not(".activeImg");
	
	TweenMax.staggerTo(allImages, 0.5, {alpha: .5}, .2);
	
	//setup button clicks for the images in the divs..
	$("#oil img, #water-color img, #drawing img")
	.on("click", selectedImage);
	
	$("#oil img, #water-color img, #drawing img")
	.on("mouseover", onFadeIn);
	
	$("#oil img, #water-color img, #drawing img")
	.on("mouseout", onFadeOut);
	
	function selectedImage(evt)
	{
		//console.log(evt.currentTarget);
		var currentImg = $(evt.currentTarget);
		
		//get src attr
		var source = currentImg.attr("src");
		//remove the thumbs/ from the path
		var path = source.replace("thumbs/", "");
		
		//CHANGE THE PLACEHOLDER IMG...
		var main = $("#placeholder");
		
		main.attr("src", path);
		
		
	}
	function onFadeIn(evt)
	{
		TweenMax.to(this, .7, {alpha:1}  );
	}
	function onFadeOut(evt)
	{
		//check if the current img has "activeImg"
		
		var currentImg = $(evt.currentTarget);
		TweenMax.to(this, .7, {alpha:.5}  );
	
	}
	
	
	//fade image in
	
	//fade image out
	
	
	//selected image
	
});//closing document.ready
