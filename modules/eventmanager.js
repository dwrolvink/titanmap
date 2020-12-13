
// The commented-out data used to live here, now it get's imported with the diagram
// so that we have one coherent game state to be loaded at start-up.
/*
var eventmgmt = {
	mousepos : {
		at_lmbd : {x:0,y:0},
		at_lmbu : {x:0,y:0},
		current : {x:0,y:0}
	},
	object_clicked_on: null,
	object_origin: null,
	viewport_origin: null,
	pressed: {
		spacebar: false,
		ctrl: false,
		shift: false,
		leftmousebutton: false,
	},
	selectionrect: null,
	input_selected: null,
	objIncrement: 0,
	persistent_choices: {
		draw_grid: true,
		draw_help_text: true,
		force_pan: true,
		page_bgcolor: 'rgba(0,0,0,1)',
		page_gridcolor: 'rgba(40,30,40,1)'
	}
}
*/
/*
var viewport = {
	x: 0,
	y: 0,
	blocksize: 15
}
*/


// ===========================================================================
//                          KEYS
// ===========================================================================

function OnCanvasKeyDown(event) {
	if (eventmgmt.input_selected != null){
		return;
	}
	switch (event.keyCode) {
		case 32:
			eventmgmt.pressed.spacebar = true;
			break;		
		case 16:
			eventmgmt.pressed.shift = true;
			break;
		case 17:
			eventmgmt.pressed.ctrl = true;
			break;				
	}
}
function OnCanvasKeyUp(event) {
	if (eventmgmt.input_selected != null){
		return;
	}	
	switch (event.keyCode) {
		case 32: // space
			eventmgmt.pressed.spacebar = false;
			break;
		case 16:
			eventmgmt.pressed.shift = false;
			break;			
		case 17:
			eventmgmt.pressed.ctrl = false;
			break;	
		case 27: // esc
			
			// clear all
			Clipboard.objects = [];
			CloseObjectEditPane();
			document.getElementById("pageSettings").style.visibility = "hidden";
			ObjectList.DeselectAllObjects([]);

			break;
		case 66: // B
			ObjectList.BringSelectedObjectToBack();
			break;		
		case 67: // C (copy)
		case 68: // D (duplicate)
			for (obj of ObjectList.GetAllSelectedObjects()) {
				copyRect(obj);
			}	
			break;
		case 46: // Del (delete)	
		case 82: // R (remove)
			ObjectList.DeleteAllSelectedObjects();
			RefreshObjectEditPane();
			break;

		case 69: // ayyy (E)
			ObjectList.DeselectAllObjects([]);
			break;
		case 70: // F	
			ObjectList.BringSelectedObjectToFront();
			break;	
		case 78: // N
			obj = newRect(Clipboard.objects);
			obj.mouse_anchor = {x:-viewport.blocksize, y:-viewport.blocksize};
			break;
		case 71: // G
			eventmgmt.persistent_choices.draw_grid = (! eventmgmt.persistent_choices.draw_grid);
			break;
		case 83: // S
			ObjectList.DownloadCurrentSetup("save_file.js");
			break;
		case 37: // left
			ObjectList.MoveSelectedObjects(-1,0);
			break;
		case 39: // right
			ObjectList.MoveSelectedObjects(1,0);
			break;		
		case 38: // top
			ObjectList.MoveSelectedObjects(0,-1);
			break;
		case 40: // bottom
			ObjectList.MoveSelectedObjects(0,1);
			break;	
		case 73: // I
			eventmgmt.persistent_choices.force_pan = ! eventmgmt.persistent_choices.force_pan;
			break;	
		case 81: // Q
			ToggleVisibility("pageSettings");	
			break;	
		case 72: // H
			eventmgmt.persistent_choices.draw_help_text	= ! eventmgmt.persistent_choices.draw_help_text;
			break;		
		case 80: // P
			PrintImage();
			break;	
		default:
			//alert(event.keyCode);				
	}
}


// ===========================================================================
//                          MOUSE POS
// ===========================================================================

function getMousePos(event) {
	// Get relative x, y
	var xpos = event.x;
	var ypos = event.y;

	xpos -= window.canvas.offsetLeft;
	ypos -= window.canvas.offsetTop;

	return {x: xpos, y:ypos}
}




// ===========================================================================
//                          MOUSE CLICK
// ===========================================================================

// Call object's click function for object specific actions
function OnRightClick(event) {

	event.preventDefault();

	cursor = getMousePos(event);

	if (obj = ObjectList.SelectObject(cursor.x, cursor.y)){
		obj.Click(2);
	}
}



function OnCanvasLMBD(event)
{
	if (event.buttons != 1){
		return;
	}

	// get cursor
	cursor = getMousePos(event);

	// Save info 
	eventmgmt.pressed.leftmousebutton = true;
	eventmgmt.mousepos.at_lmbd = cursor;
	eventmgmt.viewport_origin = {x: viewport.x, y: viewport.y};
	
	// handle click object
	obj = null;
	if (eventmgmt.pressed.spacebar == false && eventmgmt.persistent_choices.force_pan == false){
		obj = ObjectList.SelectObject(cursor.x, cursor.y);
	
		if (obj != null && obj.locked == false) {
			eventmgmt.object_clicked_on = obj;
			
			if (obj.selected) { 
				// save location of all selected objects
				let list = [];
				for (obj of ObjectList.objects){
					if (obj.selected){
						list.push({x: obj.pos.x, y: obj.pos.y});
					}
				}
				eventmgmt.object_origin = list;
			}
			else {
				// save location of one object
				eventmgmt.object_origin = {x: obj.pos.x, y: obj.pos.y};
			}
		}
		else {
			eventmgmt.object_clicked_on = null
		}
	}
} 

function OnCanvasLMBU(event)
{
	// Save info 
	eventmgmt.mousepos.at_lmbu = getMousePos(event);
	eventmgmt.pressed.leftmousebutton = false;
	

	// Logic
	let blocksize = viewport.blocksize;

	// panning
	

	// handle object manipulation
	let obj = null;
	let obj_manipulation_is_off = (eventmgmt.pressed.spacebar == true || eventmgmt.persistent_choices.force_pan == true);
	let obj_manipulation_is_on = ! obj_manipulation_is_off;

	if (obj_manipulation_is_on) {
		obj = eventmgmt.object_clicked_on;
	}

	// case: selecting with ctrl (rect)
	eventmgmt.selectionrect = null;
	if (obj_manipulation_is_on) 
	{
		if (eventmgmt.selectionrect != null) 
		{
			if (!eventmgmt.pressed.shift){
				ObjectList.DeselectAllObjects([]);
			}
			ObjectList.SelectObjectsByRect(eventmgmt.selectionrect);
			RefreshObjectEditPane()
			
			return;
		}
	}

	// case 1: dragging
	var [dx, dy, isDrag] = GetMouseDrag(eventmgmt.mousepos.at_lmbu);
	if (isDrag) {
		// dragging processing is done in OnCanvasMouseMove
		ObjectList.SaveCurrentSetup();
		return;
	}	


	// case: click (and clipboard is full): Place clipboard content
	if (Clipboard.objects.length > 0){
		for (obj of Clipboard.objects){
			cursor = eventmgmt.mousepos.current;
			ma     = obj.mouse_anchor;

			obj.pos.x = Math.round((cursor.x + ma.x - viewport.x) / blocksize);
			obj.pos.y = Math.round((cursor.y + ma.y - viewport.y) / blocksize);
			ObjectList.objects.push(obj);
		}
		ObjectList.DeselectAllObjects([]);
		Clipboard.SelectAllObjects([]);
		RefreshObjectEditPane()
		Clipboard.objects = [];

		ObjectList.SaveCurrentSetup();

		return;
	}

	// case 2: click object = (de)select object
	if (null != obj && obj_manipulation_is_on) 
	{
		n = ObjectList.GetAllSelectedObjects().length;

		// deselect all, unless shift is pressed
		if (!eventmgmt.pressed.shift){
			ObjectList.DeselectAllObjects([obj,]);
		}		
		// toggle obj if shift was pressed, or n<2
		if(n < 2 || eventmgmt.pressed.shift){
			obj.Click(1);
		}
		else {
			obj.selected = true;
		}

		RefreshObjectEditPane()	
		return;
	}

	// case: clicked grid
	if (obj_manipulation_is_on) {
		ObjectList.DeselectAllObjects([]);
		RefreshObjectEditPane()
	}

} 


// ===========================================================================
//                          MOUSE DRAG
// ===========================================================================


function OnCanvasMouseMove(event) {

	// Update current mouse position
	window.eventmgmt.mousepos.current = getMousePos(event);

	// Dragging?
	if (eventmgmt.pressed.leftmousebutton){
		HandleDrag()
	}
}

function HandleDrag()
{
	// Some drag actions can only be done if we are in edit mode, and the spacebar (force pan) is off
	let obj_manipulation_is_off = (eventmgmt.pressed.spacebar == true || eventmgmt.persistent_choices.force_pan == true);
	let obj_manipulation_is_on = ! obj_manipulation_is_off;

	// shortcuts
	blocksize = viewport.blocksize;
	cursor = getMousePos(event);

	// Get drag motion
	x1 = eventmgmt.mousepos.at_lmbd.x;
	y1 = eventmgmt.mousepos.at_lmbd.y;
	var [dx, dy, isDrag] = GetMouseDrag(cursor);

	// Test if object is being dragged
	obj = eventmgmt.object_clicked_on;
	ctrl_is_pressed = eventmgmt.pressed.ctrl;

	// set selectionrect
	if (ctrl_is_pressed) {
		eventmgmt.selectionrect = [x1, y1, dx, dy];
		return;
	}

	// pan
	if (null == obj || obj_manipulation_is_off) 
	{
		viewport_origin = eventmgmt.viewport_origin;

		// change viewport
		viewport.x = viewport_origin.x + dx;
		viewport.y = viewport_origin.y + dy;
	}	

	// move object
	if (null != obj && obj_manipulation_is_on)
	{
		// get place where object started at at the beginning of dragging
		object_origin = eventmgmt.object_origin;

		// Lockstep to grid
		if (Math.abs(dx) >= 0.5*blocksize || Math.abs(dy) >= 0.5*blocksize) 
		{

			// move all selected objects 
			// (when dragging a selected object, more might be selected, so move them all together)
			if (obj.selected) {
				let i = 0;
				for (obj of ObjectList.GetAllSelectedObjects()) {
					obj.pos.x = object_origin[i].x + Math.round(dx / blocksize);
					obj.pos.y = object_origin[i].y + Math.round(dy / blocksize);
					i++;
				}
			}
			// move single object
			else {
				obj.pos.x = object_origin.x + Math.round(dx / blocksize);
				obj.pos.y = object_origin.y + Math.round(dy / blocksize);
			}

		}
	}
	
}

function GetMouseDrag(cursor){
	x1 = eventmgmt.mousepos.at_lmbd.x;
	x2 = cursor.x;
	dx = x2 - x1;
	y1 = eventmgmt.mousepos.at_lmbd.y;
	y2 = cursor.y;
	dy = y2 - y1;

	isDrag = false;
	if (Math.abs(dx) >= 0.5*blocksize || Math.abs(dy) >= 0.5*blocksize) {
		isDrag = true;
	}

	return [dx, dy, isDrag];
}


// ===========================================================================
//                          MOUSE SCROLL
// ===========================================================================

function AdjustZoom(event) {
	var delta = 0;
	
	if (!event) event = window.event;

	// normalize the delta
	if (event.wheelDelta) {
		// IE and Opera
		delta = event.wheelDelta / 60;
	} else if (event.detail) {
		// W3C
		delta = -event.detail / 2;
	}			
	
	b1 = window.viewport.blocksize;

	if (delta > 0) {
		window.viewport.blocksize *= 1.1;
	}
	else {
		window.viewport.blocksize *= 0.9;
	}

	// ------------------------------------------------------------------------------------
	// this block makes sure that when zooming in/out, viewport will stay centered around 
	// the cursor
	b2 = window.viewport.blocksize;
	cursor = window.eventmgmt.mousepos.current;
	
	addon_KeepViewportCentered(b1, b2, cursor);
	
	// ------------------------------------------------------------------------------------
}

function addon_KeepViewportCentered(b1, b2, cursor){

	// Objects are listed with relative coordinates. These are then translated to absolute 
	// coordinates. This way, we can easily move around and zoom in.
	//The relative position is translated to absolute position as follows:
	// abs(x,y) = rel(x,y) * blocksize + viewport(x,y)

	// Thus, to go from abs to rel, you'd do:
	// rel(x,y) = (abs(x,y) - viewport(x,y)) / blocksize
	cxrel = (cursor.x - viewport.x)/b1;
	cyrel = (cursor.y - viewport.y)/b1;

	// When zooming in/out, we want to keep the position of the cursor the same
	// relative to the objects. When we scroll, the absolute position of the objects
	// changes, but that of the cursor stays the same. 
	
	// To keep the viewport centered around the cursor, we place a (hypothetical) 
	// object at the absolute position of the cursor before zooming,
	// Then we look at how much it drifts from it's absolute position after zooming. 
	// We can adjust the viewport in the opposite direction, thus keeping the viewport 
	// centered around the cursor.
	// The formula for this is:
	// drift(x,y) = abs1(x,y) - abs2(x,y) = rel(x,y) * b2 + viewport(x,y) - (rel(x,y) * b1 + viewport(x,y))
	// drift(x,y) = rel(x,y)*(b2-b1)
	driftx = cxrel*(b2-b1);
	drifty = cyrel*(b2-b1);
	
	// Apply drift
	viewport.x -= driftx;
	viewport.y -= drifty;
}

function AddMapMarker(){
	let coord_el = document.getElementById('page_coord');
	let type_el = document.getElementById('page_type');

	let coords = ConvertCoordinates(coord_el.value);

	if (coords == false){
		return
	}
	
	obj = newRect(ObjectList.objects);
	obj.width = 2;
	obj.height = 2;
	obj.pos.y = coords[1];
	obj.pos.x = coords[0]; 
	obj.center = "middle";
	obj.bg_image_id = `${type_el.value}_img`;
	obj.locked = false;	

	// close add marker window
	ToggleVisibility("pageSettings");

	// Save game state
	ObjectList.SaveCurrentSetup();

}

function ConvertCoordinates(coord_string){
	x_ratio = -58.42279808035714/-292561.0;
	y_ratio = 70.22117214285714/348369.8125;

	coord_string = coord_string.replace('(X=','').replace('Y=','').replace('(Z=','');
	let coords = coord_string.split(',');

	let x = coords[0] * x_ratio;
	let y = coords[1] * y_ratio;

	if (Number.isNaN(x) || Number.isNaN(y)){
		return false;
	}

	return [x, y];
}

function PrintImage(){

	// set canvas size to full screen
	let bg_image = document.getElementById('map_img');
	canvas.width = bg_image.width;
	canvas.height = bg_image.height;

	// turn help text off
	let mem_help_text = eventmgmt.persistent_choices.draw_help_text;
	eventmgmt.persistent_choices.draw_help_text = false;
	
	// set zoom to 1 and viewport to 0,0
	eventmgmt.viewport_backup = {x: viewport.x, y: viewport.y, blocksize: viewport.blocksize}

	viewport.x = bg_image.width / 2.0;
	viewport.y = bg_image.height / 2.0;
	viewport.blocksize = 10.0;

	// let draw function know to print an image at the end
	eventmgmt.print_image = true;
}

function PrintImage_callback(){

	eventmgmt.print_image = false;

	// actually print the image to a new tab
	let image = canvas.toDataURL("image/png");

	// bring back the backupped viewport
	let vb = eventmgmt.viewport_backup;
	viewport = {x: vb.x, y: vb.y, blocksize: vb.blocksize}

	// go back to normal canvas size
	UpdateScreen();

	// Open saved image in new screen
	window.open(image, '_blank');
}