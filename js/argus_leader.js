$(document).ready(function() {

	var ad = ["Coke", "Sprite", "Fanta"];

	document.getElementById("ads").innerHTML = 
	ad[Math.floor(Math.random() * ad.length)];

	var images = ["coke_ad.png", "sprite_ad.png", "fanta_ad.png"];

	$("html").css({"background-image": "url(../images/" + images[Math.floor(Math.random() * images.length)] + ")"})

	

});