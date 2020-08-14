


let eventmgmt_json = `{"mousepos":{"at_lmbd":{"x":1336,"y":621},"at_lmbu":{"x":1056,"y":537},"current":{"x":709,"y":649}},"object_clicked_on":null,"object_origin":{"x":84,"y":83},"viewport_origin":{"x":1159.2213908964727,"y":553.2684583141498},"pressed":{"spacebar":false,"ctrl":false,"shift":false,"leftmousebutton":false},"selectionrect":null,"input_selected":null,"objIncrement":430,"persistent_choices":{"draw_grid":false,"draw_help_text":true,"force_pan":false,"page_bgcolor":"rgba(0,41,78,1)","page_gridcolor":"rgba(0,59,111,1)"},"input_object":null}`; 
var eventmgmt = JSON.parse(eventmgmt_json);
let viewport_json = `{"x":907.2993266261429,"y":482.1374512344613,"blocksize":4.7090300243773}`;
var viewport = JSON.parse(viewport_json);


obj = newRect(ObjectList.objects);
obj.pos.y = -84.3;
obj.pos.x = -84.3;
obj.width = 168.6;
obj.height = 168.6;
obj.bgcolor = 'rgba(0, 102, 255, 1)';
obj.textcolor = '#FFFFFF';
obj.text = "";
obj.textsize = 8;
obj.draw_arrow = "none";
obj.border_radius = "0";
obj.border_thickness = "0";
obj.text_align = "top-left";
obj.bg_image_id = "map_img";
obj.locked = true;

// Load saved setup if it exists.
ObjectList.LoadSavedSetup()



