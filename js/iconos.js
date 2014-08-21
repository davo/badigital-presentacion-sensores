/*
 * Este archivo contiene la definición 
 * de los íconos en SVG para cada sección
 */

// Dado una etiqueta devuelve el icono correspondiente
// @param: String
function getIcon(buscar){
	//definir los iconos aqui en un string
	var iconReturn;
	var casa = '<svg id="casa" opacity="0" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 450 450" enable-background="new 0 0 450 450" xml:space="preserve" width="450px" height="450px"> <path style="fill:none;stroke:#ffffff;stroke-width:30;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10" d="M 62.5,125 224,25 387.5,125 387.5,325 224,425 62.5,325 l 0,-100" /><path style="fill:none;stroke:#ffffff;stroke-width:15;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10" d="m 321.7,365 0.8,-200 -98.5,60 0,200" /><path style="fill:none;stroke:#ffffff;stroke-width:15;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10" d="m 289,265 -31.5,20 0,-40 31.5,-20 z" /></svg>';
	var labs = '<svg id="labs" opacity="0" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 500 550" enable-background="new 0 0 500 550" xml:space="preserve"><path fill="none" stroke="#00F7EA" stroke-width="20" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M50.1,152L249,29l201,123v246L248,521L50,398V234"/><path fill="none" stroke="#00F7EA" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M216,193.5h68"/><path fill="none" stroke="#00F7EA" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M265.5,212v63l51.1,82.5H183.4l51.1-82.5v-63"/>';

	switch (buscar){
		case "casa":
			iconReturn = casa;
			break;
		case "labs":
			iconReturn = labs;
			break;
		default:
			iconReturn = "<svg></svg>";

			break;
	}
	return iconReturn;
}


 // Anima todos los children de un SVG
// @param: String (ID del SVG)
function animaSVG(param){
	var ico = $(param)
	for (var i = 0; i < ico.children().length; i++){
		var childID = '#' + ico.children()[i].id;
		var parentID = '#' + ico[0].id;
		console.log(ico)
		animarPath(childID, parentID);
	}
}


// @param: String (ID del path)
// @param: String (ID del icono)
function animarPath(idPath, idIcono) {
	var orig = document.querySelector(idPath);
	console.log(orig);
var length;
	var obj = {
		length: 0,
		pathLength: orig.getTotalLength() // BUG HUMANO!
	};
	TweenMax.to(obj, 1.5, {
		length: obj.pathLength,
		onUpdate: drawLine,
		onUpdateParams: [orig, obj],
		ease: Power2.easeInOut
	}, 2.75)
	TweenMax.to(document.querySelector(idIcono), 0.2, {
		opacity: "1"
	});
}

// Callback de onUpdate del tween
function drawLine(or, ob) {
	or.style.strokeDasharray = [ob.length, ob.pathLength].join(' ');
}