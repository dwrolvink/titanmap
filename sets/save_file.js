function LoadSavedState(){
	let eventmgmt_json = `{"mousepos":{"at_lmbd":{"x":986,"y":339},"at_lmbu":{"x":1011,"y":261},"current":{"x":699,"y":133}},"object_clicked_on":null,"object_origin":[{"x":-9.056467835591203,"y":33.06268056735285},{"x":-9,"y":27},{"x":-4,"y":31}],"viewport_origin":{"x":496.30745787659,"y":800.9246492992477},"pressed":{"spacebar":false,"ctrl":false,"shift":false,"leftmousebutton":false},"selectionrect":[1234,470,6,14],"input_selected":null,"objIncrement":6983,"persistent_choices":{"draw_grid":false,"draw_help_text":true,"force_pan":true,"page_bgcolor":"rgba(0,41,78,1)","page_gridcolor":"rgba(0,59,111,1)"},"input_object":null,"viewport_backup":{"x":680.8154881517614,"y":727.5656990990808,"blocksize":7.51292027104923},"print_image":false}`; 
	eventmgmt = JSON.parse(eventmgmt_json);
	let viewport_json = `{"x":631.900254414601,"y":355.7656457019101,"blocksize":4.6345359577453955}`;
	viewport = JSON.parse(viewport_json);
	
	var obj;
	
	
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
	obj.center = "top-left";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -47.17422829550812;
	obj.pos.x = -41.987510800493475;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "tigernut_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -46.3815858785139;
	obj.pos.x = -42.5172283213323;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "tigernut_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -46.294913595979054;
	obj.pos.x = -42.60792390873767;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "tigernut_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -45.72501633097845;
	obj.pos.x = -42.583810807988755;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "tigernut_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -46.14223318461083;
	obj.pos.x = -43.97538446708614;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "tigernut_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -46.66577232153154;
	obj.pos.x = -44.39891448214247;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "tigernut_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -47.65403602347515;
	obj.pos.x = -43.734715252934315;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "tigernut_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -47.70286339351541;
	obj.pos.x = -42.91293216758962;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "tigernut_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -48.064963239103896;
	obj.pos.x = -42.89292840349784;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "tigernut_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -48.6282401640526;
	obj.pos.x = -43.63851246795883;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "tigernut_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -64.02219059405019;
	obj.pos.x = -58.01435435439513;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "amanita_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -64.24860496400787;
	obj.pos.x = -58.166065946607056;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "amanita_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -64.1172564095243;
	obj.pos.x = -58.30877880919166;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "amanita_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -63.80075880161967;
	obj.pos.x = -58.59691913033028;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "amanita_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -64.11949888436585;
	obj.pos.x = -58.553011320581476;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "amanita_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -64.13750797305129;
	obj.pos.x = -58.905802708945444;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "amanita_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -64.58798085456569;
	obj.pos.x = -58.95495249711792;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "amanita_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -7.546469563290822;
	obj.pos.x = -55.52147535096098;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "milkcap_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -7.576552426381964;
	obj.pos.x = -55.82944158335201;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "milkcap_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -8.047556393241544;
	obj.pos.x = -55.829666239570166;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "milkcap_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -7.5867593087346865;
	obj.pos.x = -56.34243781706435;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "milkcap_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 35.49755786058978;
	obj.pos.x = 37.22839659526841;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "lychee_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 20.993016416451585;
	obj.pos.x = 42.40387677837079;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "amanita_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 20.866990590173394;
	obj.pos.x = 42.831225949135806;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "amanita_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 6.913859379101655;
	obj.pos.x = 45.38583860918451;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "amanita_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 33.367950053333104;
	obj.pos.x = -9.519985097267119;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "milkcap_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 33.22446945799324;
	obj.pos.x = -9.235868306691046;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "milkcap_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 39.22541402212683;
	obj.pos.x = -9.88143043046788;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "button_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 56.766745132317766;
	obj.pos.x = -10.130780111271289;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "milkcap_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 70.08221429172019;
	obj.pos.x = 17.531090107068046;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "button_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 70.06843818925255;
	obj.pos.x = 17.52419596927349;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "button_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 73.79044249930698;
	obj.pos.x = 6.047072204154157;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "lychee_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 75.80712658048333;
	obj.pos.x = -9.233588982044475;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "tigernut_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 75.48104176272238;
	obj.pos.x = -10.200691878271828;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "button_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 75.12373867160537;
	obj.pos.x = -11.244408005135341;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "button_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 75.44516846434409;
	obj.pos.x = -11.601343832640605;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "button_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 75.72823052039763;
	obj.pos.x = -10.680470193949374;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "button_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 74.3119753771349;
	obj.pos.x = -11.774281537236776;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "button_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 65.53063916928213;
	obj.pos.x = -50.70415334365634;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "amanita_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -8.261763920840343;
	obj.pos.x = -54.43103151072708;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "root_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -35.84802014362271;
	obj.pos.x = -54.746024490386034;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "root_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -67.73631474672601;
	obj.pos.x = -30.606648324623027;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "amanita_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -67.43108620480888;
	obj.pos.x = -30.43440565025171;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "amanita_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -67.36909059416111;
	obj.pos.x = -30.32416497186663;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "amanita_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -67.7196977561866;
	obj.pos.x = -30.37085602254038;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "amanita_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -56.032668473299324;
	obj.pos.x = 75.68797167054544;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "lychee_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -56.1316649188328;
	obj.pos.x = 75.2839087408375;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "lychee_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -49.29099856420555;
	obj.pos.x = 72.33143303865697;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "button_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -48.58233871975364;
	obj.pos.x = 71.60777791726835;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "button_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -48.98826761013863;
	obj.pos.x = 71.33571923707952;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "button_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -49.064092865490444;
	obj.pos.x = 71.04435884348064;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "button_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -49.98847123079621;
	obj.pos.x = 71.29952462415412;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "button_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -49.07746582641355;
	obj.pos.x = 70.47430617080677;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "button_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -49.126510514942666;
	obj.pos.x = 70.1651355314684;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "button_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -48.79681317099736;
	obj.pos.x = 69.99734229830669;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "button_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -47.83004195264755;
	obj.pos.x = 70.39020361935927;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "button_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -49.96337881919131;
	obj.pos.x = 70.29912424424788;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "button_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -50.186205859311166;
	obj.pos.x = 70.33684152709634;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "button_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -50.29847133083829;
	obj.pos.x = 69.030515542114;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "acorn_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -49.260936173246755;
	obj.pos.x = 67.7229414670308;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "acorn_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -48.04303296898906;
	obj.pos.x = 64.35917639345826;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "acorn_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -47.826331790620365;
	obj.pos.x = 64.09546743604427;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "acorn_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -18.810044322107597;
	obj.pos.x = 17.22932064202787;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "milkcap_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -18.903083406356565;
	obj.pos.x = 16.756932579760285;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "milkcap_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -19.172081176829746;
	obj.pos.x = 16.452320589515363;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "milkcap_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 15.290001327699253;
	obj.pos.x = -64.97335529164857;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "root_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 30.069968760018636;
	obj.pos.x = -62.05430344236949;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "lychee_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 48.04255738794822;
	obj.pos.x = -54.29794766327073;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "lychee_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 47.393483753506736;
	obj.pos.x = -54.25357806018461;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "lychee_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 47.57995246557753;
	obj.pos.x = -53.500854920346605;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "lychee_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 47.42461069010661;
	obj.pos.x = -52.91159414102026;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "lychee_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 47.935967393477966;
	obj.pos.x = -55.17234710704309;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "lychee_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 65.25021013144142;
	obj.pos.x = -38.11953604751876;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "amanita_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 65.49060217463904;
	obj.pos.x = -38.07142841458051;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "amanita_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 64.49540947739848;
	obj.pos.x = -37.22512035875361;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "button_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 64.47656261019078;
	obj.pos.x = -36.88901281481309;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "button_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 64.72353719892051;
	obj.pos.x = -36.48977375334504;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "button_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 64.72445686556901;
	obj.pos.x = -36.34168786287617;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "button_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 65.02790276596883;
	obj.pos.x = -36.81523508872509;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "button_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 73.42857257038062;
	obj.pos.x = -54.733774486045945;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "acorn_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 73.51668419421125;
	obj.pos.x = -55.35186614670251;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "acorn_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 73.83932341158362;
	obj.pos.x = -55.469174135283794;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "acorn_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 73.51882588366666;
	obj.pos.x = -55.90978738359587;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "acorn_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 73.9880763424358;
	obj.pos.x = -56.6896377617764;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "acorn_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 74.05564034566767;
	obj.pos.x = -56.713719660272794;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "acorn_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 73.04651406879361;
	obj.pos.x = -56.209410133662544;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "acorn_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 72.42522255594956;
	obj.pos.x = -57.205242503799575;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "acorn_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 72.30108015657481;
	obj.pos.x = -56.37060721064111;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "acorn_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 72.42405722492235;
	obj.pos.x = -57.20825040094269;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "acorn_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 77.19307681795188;
	obj.pos.x = -60.74259818905238;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "lychee_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 77.19307681795188;
	obj.pos.x = -60.74259818905238;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "lychee_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 76.64988768027769;
	obj.pos.x = -61.28056246523274;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "lychee_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 76.33226883495229;
	obj.pos.x = -61.914529831972445;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "lychee_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 76.13037051017253;
	obj.pos.x = -62.19036398471643;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "lychee_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 76.19090473272131;
	obj.pos.x = -62.46772704783399;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "lychee_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 76.11292833928412;
	obj.pos.x = -62.488064676027754;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "lychee_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 75.82090268295099;
	obj.pos.x = -62.602938888912334;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "lychee_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 75.77975074997376;
	obj.pos.x = -62.790895017653675;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "lychee_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 74.02728185764326;
	obj.pos.x = -63.99132055757672;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "button_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 74.0416563733411;
	obj.pos.x = -64.11876303777711;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "button_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 72.99719851953925;
	obj.pos.x = -65.6422629407623;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "tigernut_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 69.02849048148035;
	obj.pos.x = -71.43084866456824;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "acorn_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 69.06703459259127;
	obj.pos.x = -71.05454325870377;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "acorn_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 66.80358379254412;
	obj.pos.x = -71.66560193164192;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "milkcap_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 66.32497289103746;
	obj.pos.x = -71.377754911677;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "milkcap_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 57.50561539626436;
	obj.pos.x = -67.37592249538338;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "root_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 42.19852622140063;
	obj.pos.x = -56.905863131302574;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "amanita_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 42.9854774136214;
	obj.pos.x = -57.247066003079915;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "amanita_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 43.35867310031495;
	obj.pos.x = -57.65866115654663;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "amanita_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 43.44858311337947;
	obj.pos.x = -57.255846316939575;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "amanita_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 43.273471654509045;
	obj.pos.x = -56.212605244320784;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "amanita_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 53.37291693678662;
	obj.pos.x = -36.66156087482955;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "button_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 53.57404047391045;
	obj.pos.x = -36.74829689638989;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "button_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 53.99903354999199;
	obj.pos.x = -35.90654436943118;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "button_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 70.64499358882485;
	obj.pos.x = -49.37560511442791;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "lychee_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 70.54573258165277;
	obj.pos.x = -49.24123261394241;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "lychee_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 64.03611787459705;
	obj.pos.x = -63.735474567798256;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "lychee_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 63.1795554759885;
	obj.pos.x = -64.12652615820457;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "lychee_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 34.49968805152995;
	obj.pos.x = -67.6756201308561;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "root_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -18.076714104855238;
	obj.pos.x = -56.081749237694495;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "root_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -27.92662579435742;
	obj.pos.x = -51.75104820004544;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "milkcap_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -27.965015577845822;
	obj.pos.x = -51.192546601255174;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "milkcap_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -48.65537347972678;
	obj.pos.x = -49.018576460171474;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "lychee_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -48.75181879517364;
	obj.pos.x = -48.528482679810196;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "lychee_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -53.869095990914346;
	obj.pos.x = -47.13776396243191;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "milkcap_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = NaN;
	obj.pos.x = NaN;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "amanita_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -74.62780528185635;
	obj.pos.x = -68.24859333436602;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "lychee_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -72.35296573317568;
	obj.pos.x = -70.01338649655345;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "lychee_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -72.7790044576384;
	obj.pos.x = -71.09431989021869;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "lychee_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -70.18425949518432;
	obj.pos.x = -48.11615115318396;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "acorn_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -68.92323904291972;
	obj.pos.x = -47.478617368981006;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "acorn_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -68.89378451382106;
	obj.pos.x = -47.630569218537346;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "acorn_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -68.23212845382899;
	obj.pos.x = -47.28281387373041;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "acorn_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -67.9305470830727;
	obj.pos.x = -11.524589411662015;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "acorn_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -69.57597559623864;
	obj.pos.x = -11.073441502892166;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "acorn_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -72.50738784199808;
	obj.pos.x = -10.026020108441832;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "acorn_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -70.7533252807493;
	obj.pos.x = -7.766714926936024;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "acorn_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -55.73425554311973;
	obj.pos.x = 31.30642124193139;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "button_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -52.48941334464621;
	obj.pos.x = 33.024064680333;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "button_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -52.158049892286314;
	obj.pos.x = 33.47090589824843;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "button_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -52.219340005231125;
	obj.pos.x = 33.59897866394977;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "button_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -51.07383535319658;
	obj.pos.x = 32.47816567133632;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "button_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -46.96669858727794;
	obj.pos.x = 33.29868194522863;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "lychee_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -46.87189418389912;
	obj.pos.x = 33.57906226616505;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "lychee_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -46.888974157306095;
	obj.pos.x = 34.09351564507017;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "lychee_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -32.60220158672099;
	obj.pos.x = 47.58618401432496;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "acorn_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -30.577911358434584;
	obj.pos.x = 47.77709499638013;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "acorn_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -30.371600523467993;
	obj.pos.x = 47.662769943139935;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "acorn_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -30.052120298042365;
	obj.pos.x = 47.53722455989287;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "acorn_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -29.411418149736917;
	obj.pos.x = 47.71013496246815;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "acorn_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -29.490248069412953;
	obj.pos.x = 48.202777966860474;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "acorn_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -6.07611432080779;
	obj.pos.x = 44.17052959480852;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "lychee_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -5.438946353771504;
	obj.pos.x = 44.6444450072372;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "lychee_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -4.521024158597451;
	obj.pos.x = 44.06632031183592;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "lychee_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -4.147803669225084;
	obj.pos.x = 44.28314164438527;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "lychee_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 11.142620484614056;
	obj.pos.x = 76.27390004930244;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "milkcap_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 11.616080307925298;
	obj.pos.x = 76.64976862363159;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "milkcap_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 12.135876212714786;
	obj.pos.x = 77.64747936937044;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "milkcap_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 12.654921738657867;
	obj.pos.x = 76.50816656123676;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "milkcap_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 36.03582741160314;
	obj.pos.x = 68.21994966655093;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "lychee_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 36.1689743553206;
	obj.pos.x = 68.20318781649617;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "lychee_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 48.08576597271132;
	obj.pos.x = 74.81495136633454;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "acorn_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 68.74054033419914;
	obj.pos.x = 72.38915096537195;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "acorn_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 76.15387240240244;
	obj.pos.x = 70.77678080675393;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "acorn_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 75.83863461182453;
	obj.pos.x = 72.76946898091073;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "acorn_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 68.47033471396475;
	obj.pos.x = 71.47579238910076;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "acorn_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 58.53469717959362;
	obj.pos.x = 22.735784959206672;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "amanita_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 58.05320759549543;
	obj.pos.x = 22.021910183771194;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "amanita_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 57.92102756157622;
	obj.pos.x = 21.79538495068755;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "amanita_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 57.35580421885774;
	obj.pos.x = 21.458108882489935;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "amanita_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 37.55570882907504;
	obj.pos.x = 16.465501981193082;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "lychee_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -26.260296911741236;
	obj.pos.x = -69.94786800670799;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "tigernut_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -27.488792030173308;
	obj.pos.x = -71.2880796379291;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "button_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -26.1687522856953;
	obj.pos.x = -72.14447538199632;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "milkcap_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -10.509766210918622;
	obj.pos.x = -66.28914179959555;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "acorn_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -27.492703762972766;
	obj.pos.x = -71.28958358650065;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "button_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 16.138672545426793;
	obj.pos.x = -43.98799953778074;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "button_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 65.53007225148511;
	obj.pos.x = -50.70002216542244;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "amanita_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -12.021199765677872;
	obj.pos.x = 23.970807556725987;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "button_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -12.113379812138362;
	obj.pos.x = 24.128577066165185;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "button_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -12.572332839134022;
	obj.pos.x = 24.45504467428891;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "button_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -12.823015227683042;
	obj.pos.x = 24.558648633562584;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "button_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -12.399300866188117;
	obj.pos.x = 24.67447607516186;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "button_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -13.439197393931812;
	obj.pos.x = 24.423216816504112;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "tigernut_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -13.553628176388443;
	obj.pos.x = 24.972028555873553;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "tigernut_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 2.3803272029900606;
	obj.pos.x = -36.188453600741184;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "lychee_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 25.3790200467258;
	obj.pos.x = -9.253357169229563;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "tigernut_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 49.47691295665258;
	obj.pos.x = 9.893582927619072;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "lychee_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 48.811581379609805;
	obj.pos.x = 4.61284584606544;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "lychee_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 46.47512416547937;
	obj.pos.x = -64.07057427898232;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "lychee_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 46.20025722113613;
	obj.pos.x = -64.51544351453838;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "lychee_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 46.432662022482354;
	obj.pos.x = -65.53377270874368;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "lychee_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 45.75384410095707;
	obj.pos.x = -64.77994500916641;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "lychee_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -6.990163365037622;
	obj.pos.x = -56.15194182496773;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "milkcap_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 71.90189443843109;
	obj.pos.x = -66.09310428745104;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "tigernut_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -46.70515421116473;
	obj.pos.x = 27.716536564557988;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "milkcap_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -21.855714125441256;
	obj.pos.x = 28.797064328940433;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "amanita_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -31.621090497649813;
	obj.pos.x = 16.212523478421378;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "acorn_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -31.688008844501734;
	obj.pos.x = 16.27703413551038;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "acorn_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -31.84978513696886;
	obj.pos.x = 16.200490329636462;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "acorn_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -31.93176459996169;
	obj.pos.x = 15.955395076064262;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "acorn_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -32.42219573753626;
	obj.pos.x = 15.650809607634136;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "acorn_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -32.54956011972409;
	obj.pos.x = 15.32694582758321;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "acorn_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -35.36491799334632;
	obj.pos.x = 15.488392522581957;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "acorn_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -49.76719376598822;
	obj.pos.x = 70.9795829672452;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "acorn_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -55.64789506537324;
	obj.pos.x = 74.30290368109887;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "lychee_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -55.53544377079043;
	obj.pos.x = 74.83846538383504;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "lychee_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -55.43671818598221;
	obj.pos.x = 74.85891534013788;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "lychee_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -55.54181844646362;
	obj.pos.x = 75.22534835330443;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "lychee_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -55.06528624354606;
	obj.pos.x = 75.29577807769682;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "lychee_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -62.8818921371183;
	obj.pos.x = 67.47457777740708;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "lychee_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -63.23181269870074;
	obj.pos.x = 67.20464709084024;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "lychee_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -63.75439122490983;
	obj.pos.x = 67.34583728350178;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "lychee_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -64.00984438424835;
	obj.pos.x = 67.75365696441335;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "lychee_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -63.687387840388354;
	obj.pos.x = 66.9987434264483;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "lychee_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -62.56148279641422;
	obj.pos.x = 66.68022459225438;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "lychee_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -70.13045899624684;
	obj.pos.x = 63.67113552309813;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "acorn_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -70.26709878350263;
	obj.pos.x = 63.56933505402022;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "acorn_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -70.37757846396913;
	obj.pos.x = 63.48791589628961;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "acorn_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -74.3019976239073;
	obj.pos.x = 69.30408441132491;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "amanita_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -74.32313105956298;
	obj.pos.x = 69.30166935697972;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "amanita_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -73.86517486312786;
	obj.pos.x = 68.3432235258144;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "root_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -72.78577597576951;
	obj.pos.x = 66.74845767806924;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "amanita_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -71.0573129025996;
	obj.pos.x = 55.525038648198986;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "acorn_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -69.2548607578316;
	obj.pos.x = 54.48520486155558;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "acorn_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -68.58976539653757;
	obj.pos.x = 16.431358916271158;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "button_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -68.38144200339156;
	obj.pos.x = 15.956761734724722;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "button_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -68.41772474240102;
	obj.pos.x = 15.702031225374066;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "button_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -68.92545632141474;
	obj.pos.x = 15.462773913248709;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "button_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -66.77060177493064;
	obj.pos.x = 13.89141911557072;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "button_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -65.80628720036793;
	obj.pos.x = 15.361191859938454;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "button_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -65.72221959015607;
	obj.pos.x = 15.597303985009605;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "button_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -66.7614051084456;
	obj.pos.x = 13.8943115643795;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "button_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -64.73968805704902;
	obj.pos.x = 14.322936907272661;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "button_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -62.20468363222789;
	obj.pos.x = -5.512483231690275;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "button_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -62.3003667581921;
	obj.pos.x = -5.1777829093384975;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "button_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -62.09264177827627;
	obj.pos.x = -5.810649616570566;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "button_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -61.408649157081484;
	obj.pos.x = -5.687018491615565;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "button_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -61.14371587235941;
	obj.pos.x = -6.87620576018662;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "button_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -62.088144230419886;
	obj.pos.x = -7.571307700292454;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "button_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -47.89632094220616;
	obj.pos.x = -7.973642025210675;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "acorn_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -47.75358048954574;
	obj.pos.x = -7.114725139139681;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "button_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -46.280860333699515;
	obj.pos.x = -5.501124441762724;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "button_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -45.673722868521146;
	obj.pos.x = -6.572947947701147;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "button_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -45.89048073866954;
	obj.pos.x = -7.5026471436180415;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "button_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -46.06222533573431;
	obj.pos.x = -7.6235449514518185;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "acorn_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -45.0330585147355;
	obj.pos.x = 13.025138497904559;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "milkcap_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -50.73765309956199;
	obj.pos.x = 17.82917146586014;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "milkcap_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -57.00190263452287;
	obj.pos.x = 27.444986481085255;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "button_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -56.8599968108414;
	obj.pos.x = 28.38634595876958;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "button_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -56.147526018976166;
	obj.pos.x = 31.07568370475729;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "button_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -55.738356248518194;
	obj.pos.x = 31.296845270632424;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "button_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -50.54422704630441;
	obj.pos.x = 20.137715361858262;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "milkcap_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -47.99771733974703;
	obj.pos.x = 13.996966975176507;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "milkcap_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -47.269202774226045;
	obj.pos.x = 12.937996847061433;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "milkcap_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -28.330201975884766;
	obj.pos.x = -3.4135373467826753;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "root_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -32.81209345243877;
	obj.pos.x = -8.052722574214618;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "acorn_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -7.201165444875362;
	obj.pos.x = -9.229129400152708;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "tigernut_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -7.106428756577072;
	obj.pos.x = -9.149572236891263;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "tigernut_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -7.22652241811887;
	obj.pos.x = -8.986045131655695;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "tigernut_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -7.200628447639063;
	obj.pos.x = -8.827715541683883;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "tigernut_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -7.139252509689262;
	obj.pos.x = -8.604124100343682;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "tigernut_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -1.0764384150071122;
	obj.pos.x = -1.3833795575819383;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "acorn_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 0.5204123785593027;
	obj.pos.x = 6.854144987647256;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "acorn_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 0.749337771260748;
	obj.pos.x = 6.956135010459158;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "acorn_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 7.192282157849559;
	obj.pos.x = 6.846411509259859;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "root_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 18.55802573965525;
	obj.pos.x = -36.57333026537341;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "acorn_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 18.88440031540134;
	obj.pos.x = -35.987788794547676;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "acorn_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 7.253962814165652;
	obj.pos.x = -29.644632955769215;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "lychee_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 38.82473227090761;
	obj.pos.x = 12.407959503034412;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "tigernut_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 39.1014259503746;
	obj.pos.x = 13.154562321140096;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "tigernut_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 53.47593219959232;
	obj.pos.x = 54.2596937016789;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "button_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 53.53930731021285;
	obj.pos.x = 54.57770081893147;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "button_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 52.877695343827206;
	obj.pos.x = 54.75819960932008;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "button_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 52.74731999822852;
	obj.pos.x = 54.74523195317198;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "button_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 53.358618010128374;
	obj.pos.x = 55.67576424923121;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "button_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 63.892952233588865;
	obj.pos.x = 55.24585961398465;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "acorn_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 65.72640218368078;
	obj.pos.x = 56.150993276491064;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "acorn_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -6.089026661071208;
	obj.pos.x = 44.17168095792658;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "lychee_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 54.389904473779396;
	obj.pos.x = 50.601223353037135;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "tigernut_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 54.34053223274533;
	obj.pos.x = 49.953589399692845;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "tigernut_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 53.85000345932794;
	obj.pos.x = 49.59009875893912;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "tigernut_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 53.367764283920344;
	obj.pos.x = 48.90359615962832;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "tigernut_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 51.42117643880257;
	obj.pos.x = 47.692281033575135;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "tigernut_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 26.416755200418738;
	obj.pos.x = 52.58230428925578;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "root_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -3.4472176791665605;
	obj.pos.x = 23.8740961750344;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "amanita_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -3.681024027288761;
	obj.pos.x = 23.662747717577396;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "amanita_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -3.7163642653094993;
	obj.pos.x = 23.481657644403647;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "amanita_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -12.392928552722804;
	obj.pos.x = 24.68350288681644;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "button_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -63.19233632276805;
	obj.pos.x = -39.588793954719876;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "lychee_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -63.35887787427348;
	obj.pos.x = -32.29593203570749;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "lychee_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -57.21442751845349;
	obj.pos.x = -6.693355099964246;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "acorn_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -55.52173695827574;
	obj.pos.x = -6.696450363414417;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "acorn_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -52.394145958399825;
	obj.pos.x = -9.598357355138816;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "button_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -52.45433058164044;
	obj.pos.x = -9.18941517314285;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "button_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -53.72036195732206;
	obj.pos.x = -9.937439253751057;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "button_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -68.75315110563957;
	obj.pos.x = 8.41287613396128;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "lychee_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -67.60286859639345;
	obj.pos.x = 8.628036726670066;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "lychee_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -67.5721794463146;
	obj.pos.x = 8.832496506776625;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "lychee_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -68.40180695047795;
	obj.pos.x = 10.679557527963262;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "lychee_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -64.50493369638846;
	obj.pos.x = 15.17739811168353;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "button_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -63.120715707744154;
	obj.pos.x = 20.391545686123813;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "button_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -62.13617476600099;
	obj.pos.x = 20.96064825030824;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "button_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -63.26327663643551;
	obj.pos.x = 21.715862889910266;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "button_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -63.54959532027862;
	obj.pos.x = 22.225547004617262;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "button_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -50.53582721427851;
	obj.pos.x = 20.124140821998463;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "milkcap_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -29.033069810177093;
	obj.pos.x = -53.48765012707934;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "button_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -29.727059081859377;
	obj.pos.x = -54.17246468452871;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "button_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -30.011072299994588;
	obj.pos.x = -52.68664462168897;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "button_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -32.41163846833837;
	obj.pos.x = -54.86053675714136;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "button_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -25.25815317240051;
	obj.pos.x = -46.195786680147656;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "milkcap_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -24.976006058781287;
	obj.pos.x = -45.99314677136951;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "milkcap_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -25.1750257009695;
	obj.pos.x = -45.83747561331256;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "milkcap_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -24.663141448991798;
	obj.pos.x = -45.27159156157562;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "milkcap_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -38.555017979430644;
	obj.pos.x = -29.446891800637008;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "acorn_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -46.12226822952567;
	obj.pos.x = -9.719292605475925;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "button_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -62.81041010200035;
	obj.pos.x = 22.17048750981714;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "button_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -63.12150939265999;
	obj.pos.x = 20.390888878808074;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "button_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -63.30647577256866;
	obj.pos.x = -22.379082368389238;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "root_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -72.00703879251893;
	obj.pos.x = -25.501622827715067;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "lychee_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -72.97836425050482;
	obj.pos.x = -25.044867094160647;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "lychee_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -73.21071865915798;
	obj.pos.x = -9.284667849429193;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "acorn_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -70.29680527606664;
	obj.pos.x = -9.367148663951633;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "acorn_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -70.2363340443842;
	obj.pos.x = -9.287282598190528;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "acorn_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -69.63310201291864;
	obj.pos.x = -8.988343177454084;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "acorn_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 5.399745562979813;
	obj.pos.x = 43.88213341519922;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "amanita_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -26.634163451161264;
	obj.pos.x = 68.67497211507761;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "acorn_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -26.689532422670503;
	obj.pos.x = 68.8229519178879;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "acorn_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -59.903438312379215;
	obj.pos.x = -46.45924289931621;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "milkcap_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 31.798148374290022;
	obj.pos.x = -46.024776494750945;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "button_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 31.55380050468651;
	obj.pos.x = -46.089262190037935;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "tigernut_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 31.535712677418164;
	obj.pos.x = -46.15489612821772;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "tigernut_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 31.543101506039363;
	obj.pos.x = -46.265714048274454;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "tigernut_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 31.456687486056484;
	obj.pos.x = -46.046449579352654;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "button_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 31.37412220800673;
	obj.pos.x = -45.45145382601279;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "button_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -11.099000097011896;
	obj.pos.x = -46.72553228301375;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "button_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -11.20441767403287;
	obj.pos.x = -47.4223753088103;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "button_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -11.612821318129424;
	obj.pos.x = -47.740285699080054;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "button_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = -24.434246813772923;
	obj.pos.x = -49.74953602887546;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "root_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 15.678259705204585;
	obj.pos.x = 73.2448727407847;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "acorn_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 15.352018985150243;
	obj.pos.x = 72.65631089191486;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "acorn_img";
	obj.locked = false;
	obj.center = "middle";
	
	
	obj = newRect(ObjectList.objects);
	obj.pos.y = 12.655416216958605;
	obj.pos.x = 33.03828666703247;
	obj.width = 2;
	obj.height = 2;
	obj.bgcolor = 'rgba(0, 102, 255, 1)';
	obj.textcolor = '#FFFFFF';
	obj.text = "";
	obj.textsize = 8;
	obj.draw_arrow = "none";
	obj.border_radius = "0";
	obj.border_thickness = "0";
	obj.text_align = "top-left";
	obj.bg_image_id = "milkcap_img";
	obj.locked = false;
	obj.center = "middle";
	
	
}