/*
 * Este archivo contiene:
 * La inicialización a la presentacion de Reveal.js
 * Funciones de animacion de íconos SVG
 * Listeners de cada sección
 *
 *
 * MIT licensed
 */

// Inicializo presentación.
Reveal.initialize({
    controls: false,
    progress: false,
    history: false,
    center: true,
    width: 1200,
    theme: 'microdancing', // Temas disponibles en /css/theme
    transition: 'fade' // default/cube/page/concave/zoom/linear/fade/none
});

// Anima un path de un ícono predeterminado
// @param: String (ID del path) 
// @param: String (ID del icono)
function animarPath(idPath, idIcono) {
    console.log(idPath, idIcono)
    var orig = document.querySelector(idPath),
        length;
    var obj = {
        length: 0,
        pathLength: orig.getTotalLength()
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


// Anima todos los children de un SVG
// @param: String (ID del SVG)
function animaSVG(param) {
    var ico = $(param)
    for (var i = 0; i < ico.children().length; i++) {
        var childID = '#' + ico.children()[i].id;
        var parentID = '#' + ico[0].id;
        console.log(ico)
        animarPath(childID, parentID);
    }
}

function animarIcono() {
    animaSVG('#sec001 svg');
}

var contentOpenData, contentSplit, contentBASplit, creative, tl, icono;

creative = $('#creative-content');

contentOpenData = $('h1');
contentSplit = new SplitText(contentOpenData, {
    type: "words"
});


TweenLite.set(contentOpenData, {
    perspective: 700
});

function resumeTimeline(seconds) {
    TweenLite.delayedCall(seconds, this.resume, null, this);
}


Reveal.addEventListener('sec001', function(event) {
	animoSeccion ();
}, false);






function animoSeccion (){
	icono = $('#sec001');
    var tl = new TimelineMax();

    tl.add("OpenData")
    tl.to(creative, 0.4, {
        opacity: 0.7,
        onComplete: animarIcono
    });
    tl.addPause(0.5, resumeTimeline, [5]);
    tl.to(icono, 0.85, {
        scale: .35,
        x: -520,
        y: -210,
        rotationY: 360,
        ease: Expo.easeInOut
    }, 0.5);
    tl.staggerFrom(contentSplit.words, 0.75, {
        autoAlpha: 0,
        rotationX: -100,
        transformOrigin: "50% top -250",
        ease: Power1.easeInOut
    }, 0.05);
}