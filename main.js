var canvas;
var ctx;
var fps = 1;
var canvasX = 600;
var canvasY = 400;
var tileX, tileY;

//tablero
var tablero;
var filas = 100;
var columnas = 100;
var green = '#4eeb25';
var blue = '#089972';

function tablaArray(fil, col) {
	var obj = new Array(fil);
	for (y=0; y<fil; y++){
		obj[y]= new Array(col);
	}
	return obj; 
}

var cell = function (x,y,estado) {
	this.x = x;
	this.y = y;
	this.estado; //vivo = 1 muerto = 2
	this.estadoProx = this.estado; // estado de la sigiente generacion
	this.vecinos = []; //
}

function init() {
	canvas = document.getElementById('tablero');
	ctx = canvas.getContext('2D');
	
	canvas.width = canvasX;
	canvas.height = canvasY;

	tileX = Math.floor(canvasX/filas);
	tileY = Math.floor(canvasY/columnas);

	tablero = tablaArray(filas, columnas);

	setInterval(function(){gen();},1000/fps);
}

function clearCanvas() {
	canvas.width = canvas.width;
	canvas.height = canvas.height;
}

function gen() {
	console.log('gen');
	clearCanvas();
}
