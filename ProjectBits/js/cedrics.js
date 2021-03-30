// Make the carousel image 

// Each time the carousel changes      .carousel-inner .active   <---the current image
// width of image is 100% of parent container    .carousel-inner   <--- parent container



$(document).ready(function() {
	resizeImage();

	//var $w = $(window),
    //$h = $('#home'),
	  
	//var w = document.documentElement.clientWidth
	//var h = document.documentElement.clientHeight
	
	//var aspectRatio = w / h;
	
	//console.log(w);
	//console.log(h);
	//console.log(aspectRatio);

	//aspectRatio = 1920 / 1280;

  //function resizeBg() {
    //$h.width($w.width());     
    //if( ( $h.width()/aspectRatio ) <= $("> .carousel", $h).height() ) {
    //  $h.width( $(" > .carousel", $h).height()*aspectRatio );
    //}
    //$h.height( $h.width()/aspectRatio);
  //}

  //$w.resize(resizeBg);
  //$w.onload=resizeBg();

});

$('#mainCarousel').on('slide.bs.carousel', function () {
	
	
	resizeImage();
})

function resizeImage(){

	var img = new Image();
	//Works on page load, however, fires off before next slide becomes active when called from carousel.on(slide...
	img.src = $('#mainCarousel .active img').attr('src');
	
	var imgW = img.naturalWidth;
	var imgH = img.naturalHeight;
	var ratio = imgH / imgW;
	
	//console.log(aspectRatio);
	//console.log(img.src);
	
	var imgWidth = $('#mainCarousel .active img').width();
	var imgHeight = imgWidth * ratio;
	$('#mainCarousel .active img').css("height",imgHeight);
	
	//console.log(imgHeight);
	//console.log(imgWidth);
	
	//var img = new Image();
	//img.src = $('#mainCarousel .active img');
	//console.log(imgSource.src);
	//console.log(img.naturalWidth);
	//console.log(img.naturalHeight);
	
}




// scrollspy to target vertical menu nav

$('body').scrollspy({ target: '#menu-nav' })