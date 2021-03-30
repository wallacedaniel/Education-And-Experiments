
var catController = (function(){
	
	// Refine creation - defaults?
	var Cat = function(type, size, color){
		this.name = 'kitty',
		this.type = type,
		this.happiness = 5,
		this.hunger = 0,
		this.health = 6,
		this.size = 3,
		this.loc = '',
		this.color = color,
		this.room = '',
		this.toys = [],
		this.outdoors = false,
		this.collar = '',
		this.assigned = false
	};
	
	var Toy = function(type){
		this.type = type,
	};
	
	var PantryItem = function(type, name){
		this.type = type,
		this.name = name
	};
	
	var Collar = function(color){
		this.color = color,
		// name
	};
	
	var catsData = {
		cats: {
			// all the cats
		},
		toys: {
			// type qty 
		},
		collars: {
			// colors qty name
		},
		pantry: {
			//food:  name / qty
		}
	}
	
	
	
	return {	
	
		addCat : function(type, size, color){
			
		}
	}	
})();

var UIController = (function(){
	
	/*
	var DOMstrings = {
		key: 'dom_string'
	};
	*/
	
	return {
		getAssignedName: function(){
			return {
				newName: document.getElementById('name-collar').value
			}
		}/*,
		
		getDOMstrings: function(){
			return DOMstrings;
		}
		*/
	};
	
})();

var controller = (function(catCtrl, UICtrl){
	
	var setupEventListeners = function() {	
		
		// DOM STRINGS vids 1 and 2 
		//var DOM = UICtrl.getDOMstrings();
		
		// CAT SELECTOR   [Violation] Added non-passive event listener to a scroll-blocking 'mousewheel' event. Consider marking event handler as 'passive' to make the page more responsive. See https://www.chromestatus.com/feature/5745543795965952   
		document.getElementById('selector').addEventListener('change', placeHolderFunction); 
			// - updateSelectedCat - updateDisplaySelectedCat
        // PET
        document.getElementById('pet').addEventListener('click', placeHolderFunction);
		// CATNIP
        document.getElementById('catnip').addEventListener('click', placeHolderFunction);
			// - updateSelectedCat - updateDisplaySelectedCat
		// FEED
        document.getElementById('feed').addEventListener('click', placeHolderFunction);
			// - updateUI  
		// FOOD    DELEGATE
        document.getElementById('food').addEventListener('click', placeHolderFunction);
			// - updateSelectedCat - updateDisplaySelectedCat/PantryUI - updatePantryObject   
		// OUTDOORS
		document.getElementById('outdoors').addEventListener('change', placeHolderFunction); 
			//- updateSelectedCat
		// OPEN TOYS
        document.getElementById('open-toybox').addEventListener('click', placeHolderFunction);
			//- updateUI 
		// ASSIGN TOY  DELEGATE 
        document.getElementById('toys').addEventListener('click', placeHolderFunction);
			// confirm yes/no > updateToyUI -updateToyObject - updateSelectedCatDisplay -updateCatObject
		// OPEN COLLARS
        document.getElementById('open-collars').addEventListener('click', placeHolderFunction);
			//- updateUI		
		// COLLARS  DELEGATE 
        document.getElementById('collars').addEventListener('click', placeHolderFunction);
			//- updateUI



		//assignToCat    'collar-container'  2?           DELEGATE   DELEGATE   DELEGATE   DELEGATE 
        document.getElementById('collars').addEventListener('click', placeHolderFunction);
			//- updateDisplaySelectedCat/collarUI -updateCollarObject -updateCatObject
		//saveToDrawer    'collar-container'  2? 
        document.getElementById('collars').addEventListener('click', placeHolderFunction);
			//- updateCollarUI -updateCollarUI
		//namedCollar    'collar-container'  2? 
        document.getElementById('collars').addEventListener('click', placeHolderFunction);
			// > confirm yes/no - updateSelectedCat - updateDisplaySelectedCat/PantryUI updateCollarUI -updateCollarObject
		//close    'collar-container'  2? 
        document.getElementById('collars').addEventListener('click', placeHolderFunction);
			// - updateUI
		
		
		
		// SORT
        document.getElementById("sort").addEventListener('click', placeHolderFunction);
			// - updateUI
		// SORT TYPE
        document.getElementById('sort-type').addEventListener('click', placeHolderFunction);
			//- updateUI
	
	
		//catGrabber
        //document.getElementById().addEventListener('click', placeHolderFunction);
			//- updateUI - updateSelectedCatObject
			
		function placeHolderFunction(){
			console.log('You clicked something');
		}	
    };
	
	var updateName = function() {
		var newName = UICtrl.getAssignedName;
		console.log(newName);
	};
	
	return{
		init: function(){
			setupEventListeners();
		}
	};	
})(catController, UIController);

controller.init();






