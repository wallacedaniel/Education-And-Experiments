//  ... ...no here kitty kitty // outdoors kitty > disabled > named is enabled


// cat buttons make a sound



// sort 1 click - style - additional radios < > + all / named
// sort all  kitty + a - z at end 
// sort name/unamed  a - z 
// sort health asc/desc  a - z by name with kitty at end
// sort hunger  asc/des a - z by name with kitty at end
// sort happines asc/des a - z by name with kitty at end
// sort room >


// collars (also close both windows) + pop open panel (build n style)
// toys > click to apply to selected + confirmation pop up
// pantry >  

//canvas drawing 









// html css vanilla js

//cat objects - data structure

// canvas object - rooms draw - circles draws

//names and collars may not be reassigned 





// catFilter.change
// catnip.click

// cat.pet

// collar single click from drawer > displays input for >
	// collar.name  type in > button to assign to selected cat(or drag to cat) - confirmation popup > or place in drawer
		
// collar.assign  drag and assign

// cat.feed
// cats.filter
// set out doors only avail with color


// assign toys to cats

//efficient filters  - breaks to current
// necessary remove add pattern of li's?

//sort dbl click?

// 2 kitty at top selector 

// nip and pet limit meter canvas on button press
// feed does nothing on meterCanvas draw 


// Subtract feed me qty
// one resource closes the other
//initial cat state

// flexible room
// cat canvas css variables
// sound
// set outdoors button


// refresh canvas function on pet kitty cat nip etc
// displays kitchen room

// animate drawers reverse
// sort animate open too

// canvas sometimes extra scroll up still
//default cat color

let theCat;
let catSelector = document.getElementById("catSelector");


		// FILTER CATS

//Event Listener vs .onclick	
let filters = document.getElementsByName("catFilter");
let filterType = "all";

setCatSelect(filterType);

for (let i = 0; i < filters.length; i++) {
		filters[i].addEventListener("click", function(){
			filterType = filters[i].value;
			setCatSelect(filterType);
		});
};

function setCatSelect(filterType){
	
	//
	
	while (catSelector.firstChild) {
	  catSelector.removeChild(catSelector.firstChild);
	}
	
	let catOption1 = document.createElement("option");
	
	if(filterType == "all"){
		for(let i = 0; i < cats.length; i++) {	
			let catOption = document.createElement("option");
			if(cats[i].name.includes("kitty")){
				catOption.innerHTML = "kitty";
			}
			else {
				catOption.innerHTML = cats[i].name;
			}
			//necessary?  cats[i].name?
			catOption.setAttribute("name", cats[i].name);
			catSelector.appendChild(catOption);
		};
	}
	
	if(filterType == "name"){
		for(let i = 0; i < cats.length; i++) {
			if(cats[i].name != 'kitty'){
				let catOption = document.createElement("option");
				catOption.innerHTML = cats[i].name;
				catSelector.appendChild(catOption);
			}
		};
	}
	if(filterType == "health"){  // health lowest > highest a-z / reorder highest > lowest a-z
		for(let i = 0; i < cats.length; i++) {
			if(cats[i].name != 'kitty'){
				let catOption = document.createElement("option");
				catOption.innerHTML = cats[i].name;
				catSelector.appendChild(catOption);
			}
		};
	}
	if(filterType == "hunger"){ // hunger lowest > highest a-z / reorder highest > lowest a-z
		for(let i = 0; i < cats.length; i++) {
			if(cats[i].name != 'kitty'){
				let catOption = document.createElement("option");
				catOption.innerHTML = cats[i].name;
				catSelector.appendChild(catOption);
			}
		};
	}
	if(filterType == "happiness"){
		for(let i = 0; i < cats.length; i++) {
			if(cats[i].name != 'kitty'){
				let catOption = document.createElement("option");
				catOption.innerHTML = cats[i].name;
				catSelector.appendChild(catOption);
			}
		};
	}
	if(filterType == "room"){
		for(let i = 0; i < cats.length; i++) {
			if(cats[i].name != 'kitty'){
				let catOption = document.createElement("option");
				catOption.innerHTML = cats[i].name;
				catSelector.appendChild(catOption);
			}
		};
	}
}







		// SELECT CAT


// add cats options to select

// select your cat initial option
 





catSelector.onchange = function(){
	
	// has to be equal to the name attribute 
	let catName = catSelector.options[catSelector.selectedIndex].text;
	console.log("text value of option element > " + catName);
	
	let catOption = catSelector.options[catSelector.selectedIndex];
	let catName2 = catOption.getAttribute("name");
	console.log("name attribute of option element > " + catName2);
	
	for(let i = 0; i < cats.length; i++) {
		if(cats[i].name == catName2){  // <<<<< ahhh
			console.log("this cats name is > " + catName);
			theCat = cats[i];
			displayCat(theCat);
			break;
		}
	}
};














//              BUTTONS

		// PET THE KITTY
let petKitty = document.getElementById("petKitty");

petKitty.onclick = function(){
	// handle undefined
	if(theCat.happiness < 10){
		theCat.happiness += 1;
		drawCatMeter();
	}
};

		// CAT NIP!
let catNip = document.getElementById("catNip");

catNip.onclick = function(){
	if(theCat.happiness < 10){
		theCat.happiness += 2;
		drawCatMeter();
	}
};



		// OPEN COLLAR DRAWER
let selectCollar = document.getElementById("selectCollar");
		
selectCollar.onclick = function(){
	
	//closeResources();
		
	let collars = document.getElementById("collars");

	for (var colorQty in drawer) {
		let collar = document.createElement("li");
		collar.addEventListener("click", function(){
			//console.log(colorQty);
			// pass the color of this clicked collar and make it changeable with window open by selecting other colors 
			let color = 'orange';
			collarControlsOpen(color);
		});
		//collar.style.width = '20%';
		collar.innerHTML = drawer[colorQty]; 
		// set css to color of color
		//collar.style.color = ;
		
		//collarPalette
		collars.appendChild(collar);
	}
	collars
	let collarDrawer = document.getElementById("collarDrawer");
	
	if (collarDrawer.style.display == "none") {
		collarDrawer.style.display = 'block';
	} else {
		collarDrawer.style.display = "none";
		//function ? 3x
		while (collars.firstChild) {
			collars.removeChild(collars.firstChild);
		}
	}
};

// displays collar naming/saving/assigning controls
function collarControlsOpen(color){
	let collarControls = document.getElementById("collarControls");
	collarControls.style.display = 'block';
}
// button to close - collar naming/saving/assigning controls
let closeCollarControls = document.getElementById("closeCollarControls");

closeCollarControls.onclick = function(){
	collarControls.style.display = 'none';
}




// assigns named collar to cat
assignCollar.onclick = function(){
	
	let assignCollar = document.getElementById("assignCollar");
	
	if(theCat.name == "kitty"){
		theCat.name = document.getElementsByName("assignCollar").value;	
	}
	else{
		console.log('This cat already has a caller.');
	}
}








		// OPEN PANTRY 
feedMe.onclick = function(){

	
	//closeResources();

	let pantryShelf = document.getElementById("pantryShelf");

	for (var item in pantry) {
		let pantryItem = document.createElement("li");
		pantryItem.addEventListener("click", function(){
			
			if(theCat.hunger > 0){
				theCat.hunger -=1;
				drawCatMeter();
			}
			//console.log(this.innerHTML);
			// let itemChange = this.innerHTML   before the : (reg ex?);
			//pantryItem.innerHTML = item + ': ' + pantry.itemChange   <--- no this doesn't work??;
			
			
		});
		pantryItem.innerHTML = item + ': ' + pantry[item]; 
		pantryItem.style.width = '25%';
		pantryShelf.appendChild(pantryItem);
	}
	
	let pantryDoor = document.getElementById("pantryDoor");
	
	if (pantryDoor.style.display == "none") {
		pantryDoor.style.display = 'block';
	} else {
		pantryDoor.style.display = "none";
		while (pantryShelf.firstChild) {
			pantryShelf.removeChild(pantryShelf.firstChild);
		}
	}
};



		// CAT FEED




    // Sort
	
let filterCats = document.getElementById("filterCats");
let catFilters= document.getElementById("catFilters");

filterCats.onclick = function(){
	
	if (catFilters.style.display == 'none') {
		catFilters.style.display = 'flex';
	} else {
		catFilters.style.display = 'none';
	}
};









	
let displayName = document.getElementById("name");
let displayType = document.getElementById("type");
let displayRoom = document.getElementById("room");
let displayToys = document.getElementById("toys");



let catCanvas = document.getElementById("catCanvas");
let catCtx = catCanvas.getContext("2d");
let catCanvasX = catMeter.width;
let catCanvasY = catMeter.height;
let outdoors = document.getElementById("allowOutdoors");
	// DISPLAY THE CAT


function displayCat(theCat){
	
	let catBanner = document.getElementById("catBanner"); 	
	catBanner.innerHTML = "Selected Cat";
	outdoors.checked = false;
	
	
	
	document.getElementById("catContainer").style.display = 'flex';
	catContainer.style.color = theCat.collarPalette[1];
	// if not == to kitty > cap name
	
	if(theCat.assigned == false){
		displayName.innerHTML = caps("kitty");
	}
	else {
		displayName.innerHTML = caps(theCat.name);
	}
	
	
	displayType.innerHTML = caps(theCat.type);
	displayRoom.innerHTML = caps(theCat.room) + " Room";
	
	
	drawCatMeter();
		
	// CAT CANVAS

	
	
	//catCtx.fillRect(0, 0, 150, 150);
	
	//ctx.scale(2, 2);
	
	
	
	
	while (displayToys.firstChild) {
	  displayToys.removeChild(displayToys.firstChild);
	}
	
	
	//updateToys function
	for(let i = 0; i < theCat.toys.length;i++){
		
		// remove old toys 
		let catToy = document.createElement("li");
		catToy.innerHTML = theCat.toys[i];	
		displayToys.appendChild(catToy);
	}
	
	if(theCat.allowOutdoors == true){
		outdoors.checked = true;
	}
	
}



outdoors.onchange = function(){
	if(outdoors.checked == true){
		theCat.allowOutdoors = true;
	}
	else{
		theCat.allowOutdoors = false;
	}
}





function drawCatMeter() {
	let catMeter = document.getElementById("catMeter");
	let meterCtx = catMeter.getContext("2d");
	let meterX = catMeter.width;
	let meterY = catMeter.height;	
	// CAT METER
	//updateMeter function
	meterCtx.fillStyle = "#FFFFE3";
	meterCtx.fillRect(0, 0, meterX, meterY);
	meterCtx.fillStyle = "#FFDEF2";
	meterCtx.fillRect(0, meterY - (meterY * (theCat.health * .1)), meterX*.333, meterY);
	meterCtx.fillStyle = "#F2E2FF";
	meterCtx.fillRect(meterX*.333, meterY - (meterY * (theCat.hunger * .1)), meterX*.333, meterY);
	meterCtx.fillStyle = "#E2EEFF";
	meterCtx.fillRect(meterX*.666, meterY - (meterY * (theCat.happiness * .1)), meterX*.333, meterY);
}













		// ROOM CANVAS

let roomsCanvas = document.getElementById("roomsCanvas");
let ctx = roomsCanvas.getContext("2d");

for(let i = 0; i < rooms.length; i++){
	ctx.fillStyle = rooms[i].color;
	ctx.fillRect(rooms[i].dimensions[0], rooms[i].dimensions[1], rooms[i].dimensions[2], rooms[i].dimensions[3]);
}


//   here ......

for(let i = 0; i < cats.length; i++){
	//ctx.fillStyle = cats[i].collarColor;
	
	let catRoom = cats[i].room;
	let catName = cats[i].name;
	let catSize = cats[i].size;
	
	for(let i = 0; i < rooms.length; i++){
		if(catRoom == rooms[i].name){
			let roomX = rooms[i].dimensions[0];
			let roomY = rooms[i].dimensions[1];
			//console.log(catName);
			//console.log(catSize);
			//console.log(catRoom);
			//console.log(roomX + " , " + roomY);
			ctx.beginPath();
			ctx.arc(roomX,roomY,cats[i].size * 4,0,2*Math.PI);
			ctx.stroke();
		}
	}

}




function caps(str) 
{
    str = str.split(" ");

    for (var i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
}






//      TOYBOX

openToybox.onclick = function(){
	
	//closeResources();

	let toyItems  = document.getElementById("toyItems");
	// 4 toys max maxCatToys
	for (var toy in toys) {
		
		let toyItem = document.createElement("li");
		
		toyItem.addEventListener("click", function(){


			theCat.happiness +=1;
			//let itemQty = the value you need to give to the linl
			//subtract out the pantry item
			//pantryItem.innerHTML = ;
			
		});
		toyItem.innerHTML = toys[toy]; 
		toyItem.style.width = '25%';
		toyItems.appendChild(toyItem);
	}
	
	let toybox = document.getElementById("toybox");
	
	if (toybox.style.display == "none") {
		toybox.style.display = 'block';
	} else {
		toybox.style.display = "none";
		while (toyItems.firstChild) {
			toyItems.removeChild(toyItems.firstChild);
		}
	}
};



function closeResources(){
	let resources = document.getElementById("resources");
	//let resourceDivs = array of all divs in resources
	//for i
	//if(resourceDivs[i].style.display != "none")
		/*
		while (     .firstChild) {
			        .removeChild(     .firstChild);
		}
		*/
		//resourceDivs[i].style.display = "none";
}



