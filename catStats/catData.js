

var cats = [

	// unnamed kitty ids
	{
		'name': 'kitty1',  			// heaeder
		'type': 'runt',			// header // icon
		'happiness': 6,				// bar meter      // sounds 
		'hunger': 7,				// bar meter
		'health': 5,				// bar meter
		'size': 2,					// stat
		'loc' : [50, 50],
		'color' : '#FFF',
		'room' : 'kitchen',          // stat
		'image' : 'runt.png',        // image
		'toys' : ['jingle ball'], // icons
		'outdoors' : false,     // icon
		'assigned' : false, 
		'collarPalette' : ['','']          // border font colors
	},
	{
		'name': 'kitty2',
		'type': 'maine coon',
		'happiness': 6,
		'hunger': 3,
		'health': 10,
		'size': 5,
		'location' : [50, 50],
		'color' : '#000',
		'room' : 'living',
		'image' : 'maine-coon.png',
		'toys' : [],
		'outdoors' : false,
		'assigned' : false, 
		'collarPalette' : ['','']
	},
	{
		'name': 'Ms. Sassy',
		'type': 'persian',
		'happiness': 8,
		'hunger': 5,
		'health': 8,
		'size': 4,
		'location' : [50, 50],
		'color' : 'brown',
		'room' : 'bed',
		'image' : 'persian.png',
		'toys' : ['yarn'],
		'outdoors' : true,
		'assigned' : true, 
		'collarPalette' : ['#F2E2FF','#bb65ff']
	},
	{
		'name': 'Boris',
		'type': 'russian blue',
		'happiness': 7,
		'hunger': 9,
		'health': 5,
		'size': 4,
		'location' : [50, 50],
		'color' : '#CCC',
		'room' : 'utility',
		'image' : 'russian-blue.png',
		'toys' : ['yarn'],
		'outdoors' : true,
		'assigned' : true, 
		'collarPalette' : ['#E2EEFF','#2680FF']
	},
	{
		'name': 'Mr. Pufflepants',
		'type':  'main coon',
		'happiness': 10,
		'hunger': 4,
		'health': 8,
		'size': 5,
		'location' : [50, 50],
		'color' : '#000',
		'room' : 'bath',
		'image' : 'main-coon.png',
		'toys' : ['mousey', 'yarn', 'feather'],
		'outdoors' : false,
		'assigned' : true, 
		'collarPalette' : ['#F2E2FF','#bb65ff']
	},
	{
		'name': 'kitty3',
		'type':  'siamese',
		'happiness': 4,
		'hunger': 8,
		'health': 8,
		'size': 3,
		'location' : [50, 50],
		'color' : 'brown',
		'room' : 'kitchen',
		'image' : 'siamese.png',
		'toys' : [],
		'outdoors' : false,
		'assigned' : false, 
		'collarPalette' : ['','']
	},
	{
		'name': 'kitty4',
		'type':  'york chocolate',
		'happiness': 3,
		'hunger': 6,
		'health': 9,
		'size': 3,
		'location' : [50, 50],
		'color' : 'brown',
		'room' : 'bath',
		'image' : 'york-chocolate.png',
		'toys' : [],
		'outdoors' : true,
		'assigned' : false, 
		'collarPalette' : ['','']
	},
	{
		'name': 'Ms. Manners',
		'type':  'turkish angora',
		'happiness': 5,
		'hunger': 8,
		'health': 7,
		'size': 4,
		'location' : [50, 50],
		'color' : '#FFF',
		'room' : 'living',
		'image' : 'turkish-angora.png',
		'toys' : ['mousey', 'yarn'],
		'outdoors' : false,
		'assigned' : true, 
		'collarPalette' : ['#DDFFFC','#03e1cb']
	},
	{
		'name': 'Oscar',
		'type':  'toyger',
		'happiness': 8,
		'hunger': 4,
		'health': 9,
		'size': 2,
		'location' : [50, 50],
		'color' : 'orange',
		'room' : 'bath',
		'image' : 'toyger.png',
		'toys' : ['mousey', 'feather'],
		'outdoors' : true,
		'assigned' : true, 
		'collarPalette' : ['FFDEF2','#FF63C2']
	},
	{
		'name': 'Pasquale',
		'type':  'aegean',
		'happiness': 8,
		'hunger': 2,
		'health': 6,
		'size': 3,
		'location' : [50, 50],
		'color' : '#FFF',
		'room' : 'kitchen',
		'image' : 'aegean.png',
		'toys' : ['feather'],
		'outdoors' : true,
		'assigned' : true, 
		'collarPalette' : ['#FFDEF2','#FF63C2']
	},
	{
		'name': 'Petey',
		'type':  'american bobtail',
		'happiness': 6,
		'hunger': 7,
		'health': 10,
		'size': 4,
		'location' : [50, 50],
		'color' : 'brown',
		'room' : 'bed',
		'image' : 'american-bobtail.png',
		'toys' : ['jingle ball', 'yarn'],
		'outdoors' : true,
		'assigned' : true, 
		'collarPalette' : ['#DDFFFC','#03e1cb']
	},
	{
		'name': 'Chappy',
		'type':  'british shorthair',
		'happiness': 8,
		'hunger': 4,
		'health': 7,
		'size': 4,
		'location' : [50, 50],
		'color' : '#CCC',
		'room' : 'living',
		'image' : 'british-shorthair.png',
		'toys' : ['mousey'],
		'outdoors' : true,
		'assigned' : true, 
		'collarPalette' : ['#F2E2FF','#bb65ff']
	},
	{
		'name': 'Tigger',
		'type':  'toyger',
		'happiness': 7,
		'hunger': 8,
		'health': 5,
		'size': 3,
		'location' : [50, 50],
		'color' : 'orange',
		'room' : 'living',
		'image' : 'toyger.png',
		'toys' : ['yarn'],
		'outdoors' : true,
		'assigned' : true, 
		'collarPalette' : ['#FFFFE3','#FFEE9D']
	},
	{
		'name': 'kitty5',
		'type':  'siamese',
		'happiness': 5,
		'hunger': 7,
		'health': 10,
		'size': 2,
		'location' : [50, 50],
		'color' : 'brown',
		'room' : 'kitchen',
		'image' : 'siamese.png',
		'toys' : [],
		'outdoors' : false,
		'assigned' : false, 
		'collarPalette' : ['','']
	},
	{
		'name': 'Natasha',
		'type':  'russian blue',
		'happiness': 7,
		'hunger': 4,
		'health': 7,
		'size': 3,
		'location' : [50, 50],
		'color' : '#CCC',
		'room' : 'utility',
		'image' : 'russian-blue.png',
		'toys' : ['jingle ball', 'yarn'],
		'outdoors' : true,
		'assigned' : true, 
		'collarPalette' : ['#E2EEFF','#2680FF']
	},
	{
		'name': 'Hermes',
		'type':  'aegean',
		'happiness': 7,
		'hunger': 5,
		'health': 8,
		'size': 3,
		'location' : [50, 50],
		'color' : '#FFF',
		'room' : 'bed',
		'image' : 'aegean.png',
		'toys' : ['mousey'],
		'outdoors' : true,
		'assigned' : true, 
		'collarPalette' : ['#FFFFE3','#FFEE9D']
	}
];

var rooms = [
	{ 
		'name': 'kitchen',
		'dimensions' : [ 0, 0, 150, 100],
		'color' : '#333'
	}
	,
	{ 
		'name': 'living',
		'dimensions' : [ 150, 0, 150, 100],
		'color' : '#444'
	}
	,
	{ 
		'name': 'bed',
		'dimensions' : [ 0, 100, 100, 100],
		'color' : '#555'
	},
	{ 
		'name': 'utility',
		'dimensions' : [ 100, 100, 100, 100],
		'color' : '#666'
	},
	{ 
		'name': 'bath',
		'dimensions' : [ 200, 100, 100, 100],
		'color' : '#777'
	}
];

var pantry = {
	'dry food' : 8,
	'wet food' : 12,
	'cat nip' : 18,
	'treats' : 12
 };

var toys = [
	'mousey', 'mousey', 'jingle ball', 'feather', '', 'feather', '', 'yarn', 'jingle ball', '', ''
];

var drawer = {
	'purple' : 5,
	'blue' : 2,
	'red' : 3,
	'green' : 1,
	'yellow' : 2
};

var shelter = {
	{ 
		'type': 'russian blue',
		'size' : 3,
		'color' : '#777'
	},
	{ 
		'type': 'american bobtail',
		'size' : 1,
		'color' : '#333'
	},
	{ 
		'type': 'aegean',
		'size' : 2,
		'color' : '#555'
	},
	{ 
		'type': 'toyger',
		'size' : 4,
		'color' : '#666'
	}
};

var shop = {
	{ 
		'type': 'food',
		'name' : 3,
		'price' : '#777'
	},
	{ 
		'type': 'toy',
		'name' : 'dry food',
		'price' : '#333'
	},
	{ 
		'type': 'supplies',
		'name' : 'blue collar',
		'price' : '#555'
	},
	{ 
		'type': 'food',
		'name' : 'wet food',
		'price' : '#666'
	}
};