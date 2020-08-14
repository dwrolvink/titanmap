class ObjectManager 
{
	constructor(){
		// all the objects will be stored here
		this.objects = [];
	}

	// Each object can be in a selected state. This means the user has
	// selected the object (to move or delete it)
	// This function gets all selected objects
	GetAllSelectedObjects() {
		let list = [];
		for (let obj of this.objects){
			if (obj.selected){
				list.push(obj);
			}
		}
		return list;
	}

	// When the users drags when objects are selected, the objects are moved
	// by the amount of the drag.
	MoveSelectedObjects(x, y) {
		for (obj of this.objects){
			if (obj.selected){
				obj.pos.x += x;
				obj.pos.y += y;
			}
		}

		this.SaveCurrentSetup()
	}


	// When clicking somewhere on the canvas, we need to check if there is
	// an object under the cursor, and which one it is. If there are multiple
	// overlapping objects, the first one is returned. The order of the objects
	// can be controlled by using the "Send to back" and "Send to front" commands.

	SelectObject(x, y) {
		// Loop over all objects
		for (let i=this.objects.length-1; i >= 0; i--) 
		{
			let obj = null;

			// Each object is asked if the coordinates fall within its boundaries
			obj = this.objects[i].PointSelect(x, y);

			// If there is a match, the object will be returned
			if (null != obj){
				return obj;
			}
		}
		return null;
	}


	// Same as above, but it doesn't return at first match, and a rect is given
	// instead of a point. It also doesn't check whether ANY part of the rect is 
	// within its own rect, but whether one of its corners is contained within the
	// given rect. This gives more control when selecting and is computationally easier.
	SelectObjectsByRect(rect)
	{
		// rect = {x, y, w, h}
		x1 = rect[0]; 
		x2 = rect[0]+rect[2];
		y1 = rect[1];
		y2 = rect[1]+rect[3];

		let xmax = greater(x1,x2);
		let xmin = lesser(x1,x2);
		let ymax = greater(y1,y2);
		let ymin = lesser(y1,y2);

		for (obj of this.objects) 
		{
			if (obj.locked){
				continue;
			}

			let obj_rect = obj.absrect;
			let x = obj_rect.x1;
			let y = obj_rect.y1;
			let w = obj_rect.w
			let h = obj_rect.h;

			// Left
			if (x < xmax && x > xmin) {
				// Top
				if (y < ymax && y > ymin) {
					obj.selected = true;
				}
				// Bottom
				else if ((y+h) < ymax && (y+h) > ymin) {
					obj.selected = true;
				}
			}
			// Right
			else if ( (x+w) < xmax && (x+w) > xmin) {
				// Top
				if (y < ymax && y > ymin) {
					obj.selected = true;
				}
				// Bottom
				else if ((y+h) < ymax && (y+h) > ymin) {
					obj.selected = true;
				}			
			}
		}	
	}
	// Used when having a multi-object selecting, and then clicking one object
	// in that selection. This should deselect all, except for that one object.
	// If you want to deselect all, pass an empty array as the exclusion argument.
	DeselectAllObjects(exclusion) {
		for (obj of this.objects) {
			if (!(exclusion.includes(obj))) {
				obj.selected = false;
			}
		}
	}

	SelectAllObjects(exclusion) {
		for (obj of this.objects) {
			if (!(exclusion.includes(obj))) {
				obj.selected = true;
			}
		}
	}	

	DeleteAllSelectedObjects() {
		let newlist = []
		for (obj of this.objects) {
			if (!obj.selected) {
				newlist.push(obj);
			}
		}
		this.objects = newlist;

		this.SaveCurrentSetup()
	}

	RemoveObjectFromList(list, object) {
		let newlist = []
		for (obj of list) {
			if (obj != object) {
				newlist.push(obj);
			}
		}
		list = newlist;
	}

	BringSelectedObjectToFront() {
		let newlist = []
		for (obj of this.objects) {
			if (!obj.selected) {
				newlist.push(obj);
			}
		}
		for (obj of this.objects) {
			if (obj.selected) {
				newlist.push(obj);
			}
		}	
		this.objects = newlist;

		this.SaveCurrentSetup()
	}

	BringSelectedObjectToBack() {
		let newlist = []
		for (obj of this.objects) {
			if (obj.selected) {
				newlist.push(obj);
			}
		}
		for (obj of this.objects) {
			if (!obj.selected) {
				newlist.push(obj);
			}
		}	
		this.objects = newlist;

		this.SaveCurrentSetup()
	}	
	
	PrintCurrentSetup(){

		function EscapeQuotes(text){
			return text.replace('"', '\\"').replace("'", "\\'").replace(/\n/g,'\\n');
		}

		let output = ""
		let code = ""

		// export main state
		code +=    `let eventmgmt_json = \`${JSON.stringify(eventmgmt)}\`; 
					eventmgmt = JSON.parse(eventmgmt_json);
					let viewport_json = \`${JSON.stringify(viewport)}\`;
					viewport = JSON.parse(viewport_json);

					var obj;
		
		`

		let template = ''
		// export objects
		for (obj of this.objects)
		{
			template = `
				obj = newRect(ObjectList.objects);
				obj.pos.y = ${obj.pos.y};
				obj.pos.x = ${obj.pos.x};
				obj.width = ${obj.width};
				obj.height = ${obj.height};
				obj.bgcolor = '${obj.bgcolor}';
				obj.textcolor = '${obj.textcolor}';
				obj.text = "${EscapeQuotes(obj.text)}";
				obj.textsize = ${obj.textsize};
				obj.draw_arrow = "${obj.draw_arrow}";
				obj.border_radius = "${obj.border_radius}";
				obj.border_thickness = "${obj.border_thickness}";
				obj.text_align = "${obj.text_align}";
				obj.bg_image_id = "${obj.bg_image_id_stored}";
				obj.locked = ${obj.locked.toString()};
				obj.center = "${obj.center}";
				
				`
			code += template
		}

		// remove tabs from string
		let tab = RegExp("\\t", "g");
		code = code.replace(tab, '');


		// Now we have our code, wrap it in a function so we can call it at command
		let lines = code.split('\n');
		output = "function LoadSavedState(){\n";
		for (line of lines){
			output += "\t" + line + "\n"
		}
		output += "}"

		return output;
	}


	SaveCurrentSetup() {

		let text = this.PrintCurrentSetup()

		localStorage.setItem('save_game', text);
		  	
	}

	DownloadCurrentSetup(filename) {
		let text = this.PrintCurrentSetup()

		// download file option
		
		var element = document.createElement('a');
		element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
		element.setAttribute('download', filename);
		
		element.style.display = 'none';
		document.body.appendChild(element);
		
		element.click();
		
		document.body.removeChild(element);
		  	
	}	


	LoadSavedSetup()
	{

		// no saved game, use the predefined state
		if (localStorage.getItem('save_game') == null){
			LoadSavedState();
			return true;
		}

		// Load function
		eval(localStorage.getItem('save_game')+"LoadSavedState();");
		
		return true;
	}	
	

}

	