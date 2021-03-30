
function display(){
	
	
	
	
	
	for(i=0;i < palettes.length; i++){
		
		$('.row').append('<div class="col-lg-2"><ul><li>'+ palettes[i][0] +'</li><li>'+ palettes[i][1] +'</li><li>'+ palettes[i][2] +'</li><li>'+ palettes[i][3] +'</li><li>'+ palettes[i][4] +'</li></ul></div>');
		$('.row').append('<div class="col-lg-2" style="background:'+palettes[i][0]+'"></div>');
		$('.row').append('<div class="col-lg-2" style="background:'+palettes[i][1]+'"></div>');
		$('.row').append('<div class="col-lg-2" style="background:'+palettes[i][2]+'"></div>');
		$('.row').append('<div class="col-lg-2" style="background:'+palettes[i][3]+'"></div>');
		$('.row').append('<div class="col-lg-2" style="background:'+palettes[i][4]+'"></div>');		
	}
	
	/*
	row = document.getElementsByClassName('.row');
	*/
	
}

/*
<div class="row">
			<div class="col-lg-2">
				<ul>
					
				</ul>
			</div>
			<div class="col-lg-2 color1"></div>
			<div class="col-lg-2 color2"></div>
			<div class="col-lg-2 color3"></div>
			<div class="col-lg-2 color4"></div>
			<div class="col-lg-2 color5"></div */
			


			
palettes = [
	['#940018',
	'#663e3c',
	'#ce863c',
	'#a88e7d',
	'#edeef3'],

	['#8c1102',
	'#b41802',
	'#fe9c5b',
	'#feae4f',
	'#fff2e1'],

	['#2f161a',
	'#523527',
	'#714e3b',
	'#9f8a79',
	'#f1f8fe'],		

	['#f4ea79',
	'#e3dbc8',
	'#ac947c',
	'#5a4d44',
	'#2d2522'],
	
	['#c53652',
	'#f9aa7f',
	'#476f66',
	'#afcfc4',
	'#eaecde'],		

	['#092e02',
	'#55721e',
	'#9eac31',
	'#f5f5f5',
	'#beb29c'],	

	['#010135',
	'#01528a',
	'#0096d3',
	'#eeebc2',
	'#c7bfaa'],	

	['#442e23',
	'#623820',
	'#774125',
	'#e28343',
	'#fff3d3'],

	['#5b5c5e',
	'#96c75c',
	'#effbf7',
	'#3dbfc1',
	'#197477'],
	
	['#56752f',
	'#b2b657',
	'#ffffff',
	'#80695b',
	'#473e37'],

	['#a9a9ab',
	'#e8e9eb',
	'#b69476',
	'#66290b',
	'#120907'],

	['#350816',
	'#751f18',
	'#d7761b',
	'#d9a037',
	'#ecefbd'],

	['#1c1207',
	'#706344',
	'#fec637',
	'#e77d01',
	'#551400'],

	['#520720',
	'#a56376',
	'#e4c5c3',
	'#fcead7',
	'#c4dbe2'],
						
	['#040203',
	'#010a3d',
	'#467b8d',
	'#43bd8e',
	'#e1fea4'],					
		
	['#7a5926',
	'#ffdc8b',
	'#a6a586',
	'#457d73',
	'#394f5d'],

	['#018b5a',
	'#94d9d4',
	'#ede9dd',
	'#fb9a93',
	'#e91133'],
	
	['#581516',
	'#ab4d4f',
	'#d1a485',
	'#967e5e',
	'#2e261e'],
	
	['#3e3a37',
	'#858861',
	'#c4cbc3',
	'#e4e3ef',
	'#ba4e89'],

	['#e5dee5',
	'#816c6e',
	'#98716a',
	'#7c3b30',
	'#31130e'],
	
	['#31130e',
	'#6b0003',
	'#FECB44',
	'#FFFFA5',
	'#BDC3AF'],
	
	['#5d2800',
	'#e27001',
	'#feb820',
	'#929984']
	
];
					
			