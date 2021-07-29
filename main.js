var canvas;
var ctx;
var fps = 10;
var canvasX = 600;
var canvasY = 400;
var tileX, tileY;

//tablero
var tablero;
var filas = 100;
var columnas = 100;
var green = '#4eeb25';
var blue = '#089972';

function init() {
	canvas = document.getElementById('tablero');
	ctx = canvas.getContext('2D');
	
	canvas.width = canvasX;
	canvas.height = canvasY;

	tileX = Math.floor(canvasX/filas);
	tileY = Math.floor(canvasY/columnas);

	setInterval(function() {
		gen();},1000/fps);
}

function gen() {
}