
// This file handles all the interface actions.
// The interface are the forms to edit the object/page settings defined in index.html


// - Makes the object edit pane visible
// - Loads the input with the current settings for the object.
function OpenObjectEditPane(obj)
{
	// Make it globally known that we are editing this object
	// This is used when we process the update events of the inputs.
	eventmgmt.input_object = obj;

	// Show object edit pane 
	document.getElementById("objectEditPane").style.visibility = 'visible';	

	// Get all elements in the object edit pane (per category)
	input_elements =  document.getElementById("objectEditPane").getElementsByClassName('input');
	select_elements =  document.getElementById("objectEditPane").getElementsByClassName('select');
	color_elements =  document.getElementById("objectEditPane").getElementsByClassName('jscolor');

	// set input values
	for (el of input_elements) {
		if (el.id == 'size'){
			el.value = obj.width;
		}
		else {
			el.value = obj[el.id];
		}
	}

	// Set dropdown selected
	for (el of select_elements) {
		document.querySelector(`#${el.id} [value="${obj[el.id]}"]`).selected = true;
	}

	// jscolor fields need a separate call to update the color preview
	for (el of color_elements) {
		document.querySelector('#'+el.id).jscolor.fromString(obj[el.id])
	}	
}

// Hides the object edit pane, and executes all actions that need to be done when 
// the edit object pane is hidden
function CloseObjectEditPane()
{
	// Update global record keeper
	eventmgmt.input_object = null;

	// Hide pane
	document.getElementById("objectEditPane").style.visibility = 'hidden';
}

// Hide the ObjectEditPane if the number of selected objects != 1
function RefreshObjectEditPane()
{
	if (ObjectList.GetAllSelectedObjects().length == 1) 
	{
		obj = ObjectList.GetAllSelectedObjects()[0];
		OpenObjectEditPane(obj);
	}
	else {
		CloseObjectEditPane();
	}
}

// When we are typing in the interface, we don't want to call any hotkeys
// This function is a more readable wrapper for it's contents.
function SelectInput(input){
	eventmgmt.input_selected = input
}


function ProcessInput(el){
	obj = eventmgmt.input_object;

	// page settings
	if (el.id == 'page_bgcolor') {
		eventmgmt.persistent_choices.page_bgcolor = el.value;
		document.getElementById("mainCanvas").style.backgroundColor = el.value;
	}
	else if (el.id == 'page_gridcolor') {
		eventmgmt.persistent_choices.page_gridcolor = el.value;
	}	

	// size is shorthand for width,height
	else if (el.id == 'size') {
		obj.width = el.value;
		obj.height = el.value;
	}	

	// object settings
	else {
		obj[el.id] = el.value;
	}

	// Save
	ObjectList.SaveCurrentSetup();
}

function ArmInputFields() {
	// arm all inputs with class input
	elements =  document.getElementsByClassName('input');
	for (el of elements) {
		el.addEventListener("change",   function(){ProcessInput(this)}      );
		el.addEventListener("focusin",  function(){SelectInput(this)}       );
		el.addEventListener("focusout", function(){SelectInput(null)}       );
	}

	// object settings
	el = document.getElementById('text');
	el.addEventListener("keyup",    function(){ProcessInput(this)}      );

	el = document.getElementById('draw_arrow');
	el.addEventListener("change",    function(){ProcessInput(this)}      );	

	el = document.getElementById('border_radius');
	el.addEventListener("change",    function(){ProcessInput(this)}      );	
	
	el = document.getElementById('text_align');
	el.addEventListener("change",    function(){ProcessInput(this)}      );		

	// page settings
	el = document.getElementById('add_map_marker');
	el.addEventListener("click",    function(){ AddMapMarker()});		

	// arm nudgers
	el = document.getElementById('+size');
	el.addEventListener("click",    function(){ChangeObjectNumericProperty(this, 1)}      );

	el = document.getElementById('-size');
	el.addEventListener("click",    function(){ChangeObjectNumericProperty(this, -1)}      );


	el = document.getElementById('+textsize');
	el.addEventListener("click",    function(){ChangeObjectNumericProperty(this, 1)}      );

	el = document.getElementById('-textsize');
	el.addEventListener("click",    function(){ChangeObjectNumericProperty(this, -1)}      );	

	el = document.getElementById('+border_thickness');
	el.addEventListener("click",    function(){ChangeObjectNumericProperty(this, 1)}      );

	el = document.getElementById('-border_thickness');
	el.addEventListener("click",    function(){ChangeObjectNumericProperty(this, -1)}      );	
}
	
function ChangeObjectNumericProperty(el, amount){
	obj = eventmgmt.input_object;
	property = el.id.replace('+','').replace('-','');

	// set bound element
	input = document.getElementById(property);
	input.value = Number(input.value) + amount;

	if (property == 'size'){
		obj.width = Number(input.value);
		obj.height = Number(input.value);
	} else {
		obj[property] = Number(input.value);
	}

	// Save
	ObjectList.SaveCurrentSetup();
}

