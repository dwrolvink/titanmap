// SET GLOBALS
// ----------------------------------------------------------
var canvas = document.getElementById("mainCanvas");
var ctx = canvas.getContext("2d");
var eventmgmt = {};
var viewport = {};


// Main list of drawable Objects
var ObjectList = new ObjectManager();
var Clipboard  = new ObjectManager();

// Load setup
ObjectList.LoadSavedSetup();


// SET EVENTS
// ==========================================================
// Link DOM events to eventmanager.js functions
canvas.addEventListener("mousedown", OnCanvasLMBD, false);
canvas.addEventListener("mouseup",   OnCanvasLMBU, false);
canvas.addEventListener("mousemove", OnCanvasMouseMove, false);
document.addEventListener("keydown", OnCanvasKeyDown);
document.addEventListener("keyup",   OnCanvasKeyUp);
document.addEventListener('contextmenu', OnRightClick);

// Resize event
window.addEventListener("resize", OnWindowResize);


window.onload = function() {
	// MouseScroll event - Firefox / Other
	if(window.addEventListener) {
		document.addEventListener('DOMMouseScroll', AdjustZoom, false);
		document.addEventListener('onwheel', AdjustZoom, false);
	}
	// MouseScroll event - Chrome
	window.onmousewheel=AdjustZoom;

	// Set html element onclick (etc) events (interface.js)
	ArmInputFields();

	// Set screen size
	UpdateScreen()

	// Start the draw loop
	window.requestAnimationFrame(draw);

	
	    
}





