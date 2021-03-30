void setup(){
  size(6000,4000);   
}

int iteration = 0;
  
void draw(){
  
  noStroke();
  noFill();
 
  // Main collection of design options
  //String [] collection = new String [] {"harlequin", "stainglass", "landscape", "starburst", "striped", "stars", "tiled-tris",
  //  "tiled-polys", "rings", "concentric-polys", "bricks"};
    
  String [] collection = new String [] {"test"};  
  
  // Select random design
  int randomIndex = int(random(0, collection.length));
  String design = collection[randomIndex];
    
  makeArt(design);
  
  iteration += 1;  
  
  String folder = "G";
  save(folder + "/" + "iteration-" + design + iteration + ".png"); 
  
  if(design == "harlequin" || design == "striped"  || design == "stainglass"  || design == "tiled-tris" || design == "concentric-polys" || design == "tiled-polys"){
    outputInverse(folder, design, iteration);  
  }
}  


// Assigns optimal bounds to each design's canvas object and options
void makeArt(String design){
  
  if(design == "harlequin" || design == "striped" || design == "tiled-tris" || design == "tiled-polys"){
    
    Canvas canvas = new Canvas(0.05, 0.25, 0.05, 0.25, false);
   
    if(design == "harlequin") harlequinDesign(canvas);
    else if(design == "striped") stripedDesign(canvas);
    else if(design == "tiled-tris") tiledTrisDesign(canvas);
    else if(design == "tiled-polys") tiledPolysDesign(canvas);
  }
  else if(design == "landscape"){
    
    Canvas canvas = new Canvas(0.1, 0.25, 0.1, 0.25, false);
    if(design == "landscape") landscapeDesign(canvas);
  }
  else if(design == "bricks"){
    
    Canvas canvas = new Canvas(0.05, 0.4, 0.05, 0.4, false);
    if(design == "bricks") brickPattern(canvas);
  }
  else if(design == "stars" || design == "rings" || design == "stainglass"){
  
    Canvas canvas = new Canvas(0.05, 0.25, 0.05, 0.25, true);
   
    if(design == "stars") starsDesign(canvas);
    else if(design == "rings") ringDesign(canvas);
    else if(design == "stainglass") stainglassDesign(canvas); 
  }
  else if(design == "concentric-polys"){
  
     concentricPolys();   
  }
  else if(design == "starburst"){
  
    starburst();   
  }
  else if(design == "test"){
  
    test();   
  }
}
    

    
    

          
 




  
  





  
  
   







 