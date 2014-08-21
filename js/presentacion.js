/*
 * Este archivo contiene:
 * La inicialización a la presentacion de Reveal.js
 * Funciones de animacion de íconos SVG
 * Listeners de cada sección
 *
 *
 * MIT licensed
 */


var posicion = $('#posicion');
var numero = $('#numero');
var leyenda = $("#leyenda");

Reveal.initialize({
    controls: false,
    progress: false,
    history: false,
    center: true,
    width: 1400,
    height: 700,
    theme: 'microdancing', // available themes are in /css/theme
    transition: 'fade', // default/cube/page/concave/zoom/linear/fade/none
    dependencies: [
        { src: 'lib/js/classList.js', condition: function() { return !document.body.classList; } },
        { src: 'plugin/notes/notes.js', async: true, condition: function() { return !!document.body.classList; } }
    ]
});

Reveal.addEventListener( 'ready', function( event ) {

}, false);

Reveal.addEventListener('inicio', function(event) {
    var creative = $('#creative-content');
    var tl1 = new TimelineMax();
    tl1.to(creative, 0.4, { opacity: 1 });
    var tl2 = new TimelineMax();
    tl2.to(posicion, 0.4, { opacity: 0 });
}, false);

Reveal.addEventListener('gobierno', function(event) {

    var creative = $('#creative-content');
    var tl1 = new TimelineMax();
    tl1.to(creative, 0.4, { opacity: 0.5 });
    var tl2 = new TimelineMax();
    tl2.to(posicion, 0.4, { opacity: 1.0 });

}, false);

Reveal.addEventListener('gobierno-final', function(event) {
    numero.html("01");
    leyenda.html("Gobierno Abierto");
}, false);

Reveal.addEventListener('internet', function(event) {
    var tl2 = new TimelineMax();
    tl2.to(posicion, 0, { opacity: 0 });
    numero.html("02");
    leyenda.html("Internet de las cosas");
    tl2.to(posicion, 0.5, { opacity: 1.0 });
}, false);

Reveal.addEventListener('internet-final', function(event) {
    numero.html("02");
    leyenda.html("Internet de las cosas");
}, false);

Reveal.addEventListener('datos', function(event) {
    var tl2 = new TimelineMax();
    tl2.to(posicion, 0, { opacity: 0 });
    numero.html("03");
    leyenda.html("Datos en Tiempo Real");
    tl2.to(posicion, 0.5, { opacity: 1 });
}, false);

Reveal.addEventListener('datos-final', function(event) {
    numero.html("03");
    leyenda.html("Datos en Tiempo Real");
}, false);

Reveal.addEventListener('prototipo', function(event) {
    var tl2 = new TimelineMax();
    tl2.to(posicion, 0, { opacity: 0 });
    numero.html("04");
    leyenda.html("Prototipo Dashboard");
    tl2.to(posicion, 0.5, { opacity: 1 });
}, false);

Reveal.addEventListener('prototipo-final', function(event) {
    var creative = $('#creative-content');
    var tl2 = new TimelineMax();
    tl2.to(creative, 0.4, { opacity: 0.5 });

    var tl2 = new TimelineMax();
    tl2.to(posicion, 0.4, { opacity: 1 });

    numero.html("04");
    leyenda.html("Prototipo Dashboard");
}, false);

Reveal.addEventListener('gracias', function(event) {
    var creative = $('#creative-content');
    var tl2 = new TimelineMax();
    tl2.to(posicion, 0, { opacity: 0 });
    var tl1 = new TimelineMax();
    tl1.to(creative, 0.4, { opacity: 1 });
}, false);

Reveal.addEventListener('slidechanged', function(event) {
    // todas las diapos
    console.log(event.currentSlide.children.length);
}, false);

