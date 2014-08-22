/*
 * Este archivo contiene la definición 
 * de los íconos en SVG para cada sección
 */

// Dado una etiqueta devuelve el icono correspondiente
// @param: String
function getIcon(buscar){
	//definir los iconos aqui en un string
	var iconReturn;
	var tres		= '<svg id="casa" opacity="1" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 450 450" enable-background="new 0 0 450 450" xml:space="preserve" width="450px" height="450px"><path id="uno" fill="none" stroke="#00F7EA" stroke-width="30" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M62.5,125L224,25l163.5,100v200L224,425L62.5,325V225"/><path id="dos" fill="#00F7EA" d="M299.981,195.296c-8.283,0-15.019,6.737-15.019,15.019c0,1.058,0.112,2.092,0.321,3.09l-74.755,42.102l26.208-44.524c1.085,0.249,2.211,0.385,3.367,0.385c8.28,0,15.019-6.737,15.019-15.019s-6.737-15.019-15.019-15.019c-8.283,0-15.019,6.737-15.019,15.019c0,1.194,0.144,2.355,0.409,3.47l-77.16,46.144c-0.564-0.501-1.165-0.96-1.799-1.371l12.056-43.735c8.027-0.293,14.466-6.909,14.466-15.006c0-2.886-0.82-5.584-2.237-7.876l28.904-33.447c1.824,0.789,3.833,1.229,5.943,1.229c8.28,0,15.019-6.739,15.019-15.019s-6.741-15.021-15.024-15.021s-15.019,6.737-15.019,15.019c0,2.886,0.82,5.584,2.239,7.876l-28.904,33.447c-1.824-0.789-3.833-1.229-5.943-1.229c-8.283,0-15.019,6.737-15.019,15.019c0,5.274,2.733,9.918,6.857,12.599l-12.056,43.735c-8.027,0.293-14.466,6.909-14.466,15.006c0,8.283,6.737,15.019,15.019,15.019c8.283,0,15.019-6.737,15.019-15.019c0-1.194-0.144-2.355-0.409-3.47l74.241-44.4l-25.742,43.735c-1.085-0.249-2.211-0.385-3.369-0.385c-8.283,0-15.019,6.737-15.019,15.019c0,8.283,6.737,15.019,15.019,15.019c6.706,0,12.4-4.419,14.322-10.497h47.325c0.481,1.517,1.198,2.93,2.106,4.198l-21.537,28.626c-1.566-0.553-3.245-0.857-4.998-0.857c-8.283,0-15.019,6.739-15.019,15.019c0,8.283,6.737,15.019,15.019,15.019c8.283,0,15.019-6.737,15.019-15.019c0-3.249-1.041-6.258-2.801-8.718l21.539-28.63c1.563,0.553,3.245,0.857,4.996,0.857c8.283,0,15.019-6.737,15.019-15.019c0-8.283-6.737-15.019-15.019-15.019c-6.706,0-12.4,4.419-14.322,10.497h-44.406l74.377-41.887c2.687,2.514,6.291,4.058,10.253,4.058c8.283,0,15.019-6.737,15.019-15.019C315,202.035,308.263,195.296,299.981,195.296z M240.103,190.37c3.295,0,5.978,2.681,5.978,5.978c0,3.295-2.681,5.978-5.978,5.978c-3.295,0-5.978-2.681-5.978-5.978C234.125,193.05,236.808,190.37,240.103,190.37z M205.661,124.757c3.295,0,5.976,2.681,5.976,5.978c0,3.295-2.681,5.978-5.976,5.978s-5.978-2.681-5.978-5.978C199.683,127.439,202.366,124.757,205.661,124.757z M158.034,179.872c3.295,0,5.978,2.681,5.978,5.978c0,3.295-2.681,5.978-5.978,5.978c-3.295,0-5.978-2.681-5.978-5.978S154.739,179.872,158.034,179.872z M138.368,263.166c-3.295,0-5.978-2.681-5.978-5.978s2.681-5.978,5.978-5.978c3.295,0,5.978,2.681,5.978,5.978S141.666,263.166,138.368,263.166z M235.327,325.169c-3.295,0-5.976-2.681-5.976-5.978c0-3.295,2.681-5.978,5.976-5.978s5.978,2.681,5.978,5.978C241.303,322.488,238.623,325.169,235.327,325.169z M274.079,261.71c3.295,0,5.978,2.681,5.978,5.978s-2.681,5.978-5.978,5.978c-3.295,0-5.978-2.681-5.978-5.978C268.101,264.39,270.784,261.71,274.079,261.71z M198.111,273.663c-3.295,0-5.978-2.681-5.978-5.978s2.681-5.978,5.978-5.978c3.295,0,5.978,2.681,5.978,5.978C204.089,270.983,201.406,273.663,198.111,273.663z M299.981,216.293c-3.295,0-5.978-2.681-5.978-5.978c0-3.295,2.681-5.978,5.978-5.978c3.295,0,5.978,2.681,5.978,5.978S303.276,216.293,299.981,216.293z"/></svg>';
	var uno		= '<svg id="labs" opacity="1" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 500 550" enable-background="new 0 0 500 550" xml:space="preserve"><path id="uno" fill="none" stroke="#00F7EA" stroke-width="20" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M50.1,152L249,29l201,123v246L248,521L50,398V234"/><path id="dos" fill="none" stroke="#00F7EA" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M216,193.5h68"/><path id="tres" fill="none" stroke="#00F7EA" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M265.5,212v63l51.1,82.5H183.4l51.1-82.5v-63" id="tres"/></svg>';
	var dos	= '<svg id="casa" opacity="1" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 450 450" enable-background="new 0 0 450 450" xml:space="preserve" width="450px" height="450px"> <path id="uno" style="fill:none;stroke:#00F7EA;stroke-width:30;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10" d="M 62.5,125 224,25 387.5,125 387.5,325 224,425 62.5,325 l 0,-100" /><path id="dos" style="fill:none;stroke:#00F7EA;stroke-width:15;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10" d="m 321.7,365 0.8,-200 -98.5,60 0,200" /><path id="tres" style="fill:none;stroke:#00F7EA;stroke-width:15;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10" d="m 289,265 -31.5,20 0,-40 31.5,-20 z"/></svg>';
	var cuatro	= '<svg id="labs" opacity="1" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 500 550" enable-background="new 0 0 500 550" xml:space="preserve"><path id="uno" fill="none" stroke="#00F7EA" stroke-width="20" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M50.1,152L249,29l201,123v246L248,521L50,398V234"/><path id="dos" fill="none" stroke="#00F7EA" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M216,193.5h68"/><path id="tres" fill="none" stroke="#00F7EA" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M265.5,212v63l51.1,82.5H183.4l51.1-82.5v-63" id="tres"/></svg>';

	switch (buscar){
		case "UNO":
			iconReturn = uno;
			break;
		case "DOS":
			iconReturn = dos;
			break;
		case "TRES":
			iconReturn = tres;
			break;
		case "CUATRO":
			iconReturn = cuatro;
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
		animarPath(childID, parentID);
	}
}


// @param: String (ID del path)
// @param: String (ID del icono)
function animarPath(idPath, idIcono) {
	var orig = document.querySelector(idPath);

	//console.log (orig[].getTotalLength);

	var obj = {
		length: 0,
		pathLength: 2000 //getTotalLength
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