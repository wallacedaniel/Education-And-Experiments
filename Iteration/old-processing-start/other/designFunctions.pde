

//Creates a brick pattern
void brickPattern(Canvas canvas){
  
  // Palette
  color bg = color(random(0,255), random(0,255), random(0,255));
  background(bg);
  color elementColor = color(random(0,255), random(0,255), random(0,255));
  color[] colorSteps = getLerps(bg, elementColor);
  
  stroke(50);
  strokeWeight(10);
  
  int rowCounter = 0;

  for (int h = 0; h <= height; h += canvas.H) {
    if(rowCounter == 0 || rowCounter % 2 ==0){
      for (int w = 0; w <= width; w += canvas.W) {
        fill(colorSteps[int(random(0, colorSteps.length - 1))]);
        rect(w, h, canvas.W, canvas.H);
      }          
    }
    else {
      for (int w = 0; w <= width; w += canvas.W) {
        fill(colorSteps[int(random(0, colorSteps.length - 1))]);
        rect(w - (canvas.W/2), h, canvas.W, canvas.H);
      }
    }
    rowCounter += 1;
  } 
}


// Concetric circles and polygons at four corners and center
void concentricPolys(){
  
  //Random BG Color
  color bg = color(random(0,255), random(0,255), random(0,255));
  background(bg);
  
  stroke(bg);
  strokeWeight(20);
  
  int[][] fivePoints = getFivePoints();
  int option = int(random(1, 5));
  int numSteps = int(random(6,16));
  int[] possPoints = new int[]{3,4,6,8,10,12};
  int pointsIndex = int(random(0,6));
  int points = possPoints[pointsIndex];
  int size = int(random(width/2 ,width * 1.25));
   
  for (int i = 0; i < 5; i++) {  
    
    // polys inner circles outers
    if(option == 1){
      
      if(i == 4){
        
        drawPolyTarget(fivePoints[i][0], fivePoints[i][1], size, points, numSteps);   
      }      
      else { 
        
        drawTarget(fivePoints[i][0], fivePoints[i][1], size, numSteps);
      }  
    }    
    // all circles
    else if(option == 2){
      
      drawTarget(fivePoints[i][0], fivePoints[i][1], size, numSteps); 
    }    
    
    // all polys
    else if(option == 3){
      
      drawPolyTarget(fivePoints[i][0], fivePoints[i][1], size, points, numSteps);  
    } 
    
    // circles inner poly outers
    else {
      if(i == 4){
        
        drawTarget(fivePoints[i][0], fivePoints[i][1], size, numSteps);
      }      
      else {
        
        drawPolyTarget(fivePoints[i][0], fivePoints[i][1], size, points, numSteps);  
      }  
    }
  }
}


// Paints harlequin diamond patttern with optional poly targets layer
void harlequinDesign(Canvas canvas){
  
  // Palette
  color bg = color(random(0,255), random(0,255), random(0,255));
  background(bg);
  color diamondColor = color(random(0,255), random(0,255), random(0,255));
  color[] colorSteps = getLerps(bg, diamondColor);
  
  // Determines whether to include options  
  int optionPicker = int(random(0, 2));
  
  if(optionPicker == 1){
    randPolyTarget1();
  }
  
  stroke(50);
  strokeWeight(10);
 
  int dimensionsLength = canvas.coordinates.size();

  for (int i = 0; i < dimensionsLength; i++) {
    
      // Picks random diamond color
      int colorPicker = int(random(2, colorSteps.length));
      fill(colorSteps[colorPicker]);
      
      // Draws diamonds
      int w = canvas.coordinates.get(i)[0];
      int h = canvas.coordinates.get(i)[1];  
      //quad(w + (canvas.W/2), h, w + canvas.W, h + (canvas.H/2), w + (canvas.W/2), h + canvas.H, w,  h + (canvas.H/2));
      strokeWeight(10);
      quad(w, h, w + (canvas.W/2), h + (canvas.H/2), w, h + canvas.H , w - (canvas.W/2),  h + (canvas.H/2));     
  } 
}


// Landscape
void landscapeDesign(Canvas canvas) {
  
  color bg = color(random(0,255), random(0,255), random(0,255));
  background(bg);
  color horizonColor = color(random(0,255), random(0,255), random(0,255));
  color[] colorSteps = getLerps2(bg, horizonColor);
  
  // Gathers possible radials 
  IntList[] radials = radialOptions(18, 40);
  
  // Picks radial options
  int randomIndex = int(random(0,radials[0].maxIndex()));
  int divisor = radials[0].get(randomIndex);
  int angle = radials[1].get(randomIndex);
  
  float x = random(0, width);
  float y = random(0, height);
  drawRadial(width*3, divisor, angle, int(x), int(y), bg, horizonColor);
  
  float size = random(width * .8, width * 2);
  drawTarget(x, y, int(size), int(random(6, 13)));
  
  stroke(125);
  strokeWeight(10);
  
  starrySky();
  
  int layers = 5;
  float horizonHigh = .2;
  float horizonLow = .6;
  int colorCount = 1;
  
  stroke(125);
  strokeWeight(10);
  
  while(layers > 0){
    int curveY = int(random(height * horizonHigh, height * horizonLow));
    int endY = curveY;
    int endX = 0;
    
    smooth();
    beginShape();    
    curveVertex(0, curveY); 
    for (int w = 0; w <= width; w += canvas.W) {
      fill(colorSteps[colorCount]);
      curveVertex(w, curveY);
    
      if (w != width){          
          curveY = int(random(height * horizonHigh, height * horizonLow));
      }  
      if (w == width){
          endX = w;
      } 
    }
    curveVertex(endX, curveY);  
    vertex(width, height);
    vertex(0, height);
    vertex(0, endY);
    endShape();
  
    colorCount += 1;      
    horizonHigh += .16;
    horizonLow += .1;
    layers--;
  }    
}


// Ring pattern
void ringDesign(Canvas canvas){
  
  color bg = color(random(0,255), random(0,255), random(0,255));
  background(bg);
  color elementColor = color(random(0 ,255), random(0,255), random(0,255)); 
  color[] colorSteps = getLerps(bg, elementColor);
  
  for (int w = 0; w <= width; w += canvas.W) {
    for (int h = 0; h < height; h += canvas.H) {
      
      stroke(colorSteps[int(random(3,colorSteps.length))], int(random(80,200)));
      strokeWeight(15);
      ellipse(w, h, canvas.W, canvas.H); 
      ellipse(w, h, canvas.W/2, canvas.H/2);
      ellipse(w, h, canvas.W * 2, canvas.H * 2); 
    }
  }
}


//Stain Glass pattern
void stainglassDesign(Canvas canvas){
  
  //Random color for rects
  color elementColor = color(random(0,255), random(0,255), random(0,255));
  color elementColor2 = color(random(0,255), random(0,255), random(0,255));
  color[] colorSteps = getLerps(elementColor, elementColor2);
  
  noStroke();
  
  for (int w = 0; w <= width; w += canvas.W) {
    for (int h = 0; h <= height; h += canvas.H) {
      
    int colorIndex = int(random(0,colorSteps.length-2));
    fill(colorSteps[colorIndex]);
    
    rect(w, h, canvas.W, canvas.H);
    
    stroke(50);
    strokeWeight(10);
    fill(colorSteps[colorIndex + 1]);
    
    ellipse(w + canvas.W/2, h + canvas.H/2, canvas.W/1.25, canvas.H/1.25);
    }
  }
          
  stroke(50);
  strokeWeight(20);
  
  for (int w = 0; w <= width; w += canvas.W) {
    
      line(w , 0, w , height);
  }
  for (int h = 0; h < height; h += canvas.H) {
    
      line(0, h, width, h);
  } 
  
  IntList[] radials = radialOptions(18, 40);
  
  for (int w = 0; w <= width; w += canvas.W) {
    for (int h = 0; h <= height; h += canvas.H) { 
      
      int centerVertexX = w + canvas.W/2;
      int centerVertexY = h + canvas.H/2;
      
      int randomIndex = int(random(0,radials[0].maxIndex()));
      int divisor = radials[0].get(randomIndex);
      int angle = radials[1].get(randomIndex);
      
      stroke(50);
      strokeWeight(5);
      
      if (canvas.W > canvas.H){
        
        drawRadial(canvas.W/2, divisor, angle, w + canvas.W/2, h + canvas.H/2,  elementColor, elementColor2);
        
        strokeWeight(5);
        fill( elementColor2);
        
        ellipse(w + canvas.W/2, h + canvas.H/2, canvas.W/4, canvas.H/4);
      }
      else {
        
        drawRadial(canvas.H/2, divisor, angle, w + canvas.W/2, h + canvas.H/2,  elementColor, elementColor2);
        
        strokeWeight(5);
        fill(elementColor2);
        
        ellipse(w + canvas.W/2, h + canvas.H/2, canvas.W/4, canvas.H/4);
      }
       stroke(50);
       strokeWeight(20);
       fill(colorSteps[colorSteps.length - 1]);
       
       quad(w, (h - canvas.H/2) + (canvas.H * .75), centerVertexX - (canvas.W * .75), centerVertexY - canvas.H/2, w, h + canvas.H/2 - (canvas.H * .75) , w - canvas.W/2 + (canvas.W * .75),  h );
       strokeWeight(10);
       fill(colorSteps[colorSteps.length - 5]);
       ellipse(w, h, canvas.W/5, canvas.H/5);
    }
  } 
  line(0, 0, width, 0);
  line(0, height, width, height);
  line(0, 0, 0, height);
  line(width, 0, width, height);  
}


// Radial Starburst  change from radialRandom to starburst
void starburst(){
  
  color bg = color(random(0,255), random(0,255), random(0,255));
  background(bg);
  color elementColor = color(random(0,255), random(0,255), random(0,255));
  
  // Gathers possible radials... 
  IntList[] radials = radialOptions(18, 40);
  //...chooses random divisor / angle
  int randomIndex = int(random(0,radials[0].maxIndex()));
  int divisor = radials[0].get(randomIndex);
  int angle = radials[1].get(randomIndex);
  
  strokeWeight(10);
  stroke(125);
  
  drawRadial(width*3, divisor, angle, int(random(-600, width/1.1)), int(random(-400, height/1.1)),  bg, elementColor);
}


void starrySky() {
  color starColor = color(random(0,255), random(0,255), random(0,255));
  fill(starColor);
  int numStars = int(random(75,150));
    for (int s = 0; s < numStars; s++) {        
        stroke(random(200, 255), random(125, 225));
        strokeWeight(random(5, 15));
        drawStar(random(0, width), random(0, height/2), random(10, 30), random(40, 100), int(random(4,12)));      
    }
}


// Star pattern
void starsDesign(Canvas canvas){

  // Palette
  color bg = color(random(0,255), random(0,255), random(0,255));
  background(bg);
  color starColor = color(random(0,255), random(0,255), random(0,255));
  color[] colorSteps = getLerps(bg, starColor);
  
  stroke(225);
  strokeWeight(20); 
  
  for (int w = 0; w <= width; w += canvas.W) {
    for (int h = 0; h < height; h+= canvas.H) {        
      int colorPicker = int(random(2, colorSteps.length));
      fill(colorSteps[colorPicker]);       
      drawStar(w + (canvas.W/2), h + (canvas.W/2), canvas.W/4, canvas.W/2, int(random(4,12)));    
    }
  }
}



// Striped design...                         
void stripedDesign(Canvas canvas){
  
  // Palette
  color bg = color(random(0,255), random(0,255), random(0,255));
  background(bg);
  color elementColor = color(random(0,255), random(0,255), random(0,255));
  color[] colorSteps = getLerps(bg, elementColor);
  
  strokeWeight(10);
  
  // options - 0 : No Design, 1 : Add Radial, 2 : Add Star 2 : Add Polygons
  int optionPicker = int(random(0, 4));
  //int optionPicker = 3;
  // Stripe Options - 0 : Solid w varying design 1 : no fill w concentrics  
  int stripeOption = int(random(0,2));
  int stripeElement = int(random(0,2));
  //int stripeElement = 1;
   
  IntList[] radials = radialOptions(18, 40);
  int[] polyOptions = new int[] {4,6,8};
  int[] polyOptions2 = new int[] {3,4,5,6,8};
  
  int colCounter = 0;
  
  
  for (int w = 0; w <= width; w += canvas.W) {
    // Draws diamonds and possible interior options
    if (colCounter == 0 || colCounter % 2 ==0) {
      for (int h = 0; h < height; h += canvas.H) {
        
      int colorPicker = int(random(2, colorSteps.length));
      fill(colorSteps[colorPicker]);
      stroke(colorSteps[6]);
      
      quad(w, h, w + (canvas.W/2), h + (canvas.H/2), w, h + canvas.H , w - (canvas.W/2),  h + (canvas.H/2));

      // Picks radial options
      int randomIndex = int(random(0,radials[0].maxIndex()));
      int divisor = radials[0].get(randomIndex);
      int angle = radials[1].get(randomIndex);
      
      int polySides = polyOptions[int(random(0, 3))];
      
      if(colorPicker == colorSteps[6] || colorPicker == colorSteps[5]) stroke(colorSteps[4]);
      if(colorPicker == colorSteps[7]) stroke(colorSteps[8]);
    
      if (canvas.W > canvas.H || canvas.W == canvas.H){   
        
        if (optionPicker == 1) drawRadial(canvas.H/2, divisor, angle, w, h + canvas.H/2, bg, elementColor);
        
        else if (optionPicker == 2) {
          
          drawStar(w, h + canvas.H/2, canvas.H/8, canvas.H/4, int(random(4,13)));
        }
        
        else if (optionPicker == 3) {
          drawPolygon(w, h + canvas.H/2, canvas.H/2.5, polySides);
          drawPolygon(w, h + canvas.H/2, canvas.H/4, polySides);
        }
      }
      else {
        
        if (optionPicker == 1) drawRadial(canvas.W/2, divisor, angle, w, h + canvas.H/2, bg, elementColor);
        
        else if (optionPicker == 2) {
          
          drawStar(w, h + canvas.H/2, canvas.W/8, canvas.W/4, int(random(4,13)));
        }
        
        else if (optionPicker == 3) {
         
          drawPolygon(w, h + canvas.H/2, canvas.W/2.5, polySides);
          drawPolygon(w, h + canvas.H/2, canvas.W/4, polySides);
        }
      }   
      stroke(colorSteps[6]);
      line(w + canvas.W/2, h, w + canvas.W/2, h + canvas.H);
      line(w + canvas.W/2 + canvas.W, h, w + canvas.W/2 + canvas.W, h+ canvas.H);
    }  
  } 
  else {       
  
    if (stripeOption == 0) {
      
      for (int h = 0; h < height; h += canvas.H) {
        
        noFill();
        stroke(elementColor);
        ellipse(w, h, canvas.W, canvas.H * 2);
        ellipse(w, h, canvas.W/2, canvas.H);
        ellipse(w, h, canvas.W/4, canvas.H/2); 
      }
    }    
    else {
      // draws solid stripes 
      for (int h = 0; h <= height; h += canvas.H) {
        
        noStroke();
        fill(colorSteps[4]);
        
        rect(w - (canvas.W/2), h - (canvas.H/2), canvas.W, canvas.H);   
      } 

      // Draws the elements on the solid stripes
      for (int h = 0; h <= height; h += canvas.H) {   
      
        noFill();
        
        // For varying colors of stripe element
        int colorPicker = int(random(0, colorSteps.length));  
        while(colorPicker == 3 || colorPicker == 4 || colorPicker == 5){
          
          colorPicker = int(random(0, colorSteps.length));
        }
        
        stroke(colorSteps[colorPicker]);
        
        int stripePolySides = polyOptions2[int(random(0, 5))];
        noFill();
        
        if(canvas.W > canvas.H){
        
          if (stripeElement == 0) drawStar(w, h, canvas.H/4, canvas.H/2, int(random(4,9)));
          else if (stripeElement == 1) {
            drawPolygon(w, h, canvas.H/2.5, stripePolySides);
            drawPolygon(w, h, canvas.H/4, stripePolySides);
          }
        }
        else {
        
          if (stripeElement == 0) drawStar(w, h, canvas.W/2, canvas.W/2, int(random(4,9)));
          else if (stripeElement == 1 ) {                                                        //&& (rowCounter == 0 || rowCounter % 2 == 0)
            drawPolygon(w, h, canvas.W/2.5, stripePolySides);
            drawPolygon(w, h, canvas.W/4, stripePolySides);
          }
        }
      } 
    }
    
  }     
  colCounter += 1;
  }   
}


//Tiled pattern with polygons
private void tiledPolysDesign(Canvas canvas){
  
  color elementColor = color(random(0,255), random(0,255), random(0,255));
  color elementColor2 = color(random(0,255), random(0,255), random(0,255));
  color[] colorSteps = getLerps(elementColor, elementColor2);
  color bg = color(random(0,255), random(0,255), random(0,255));
  background(bg);
  
  // squares that may be partial at edges
  canvas.H = canvas.W;

  for (int w = 0; w <= width; w += canvas.W) {
    for (int h = 0; h < height; h += canvas.H) {
    
      color fillTile = colorSteps[int(random(0,colorSteps.length -1))];
      fill(fillTile);
      noStroke();

      rect(w, h, canvas.W, canvas.H);
       
      stroke(50); 
      strokeWeight(10);
      
      int polyTargetSteps = int(random(3,6));
      int polySides = int(random(3,13));
      drawPolyTarget(w + canvas.W/2, h + canvas.H/2, canvas.W/2, polySides, polyTargetSteps);  
    }
  }
}


//Tiled Triangle Pattern  .......PULL out options...switch to lerps          
void tiledTrisDesign(Canvas canvas){
    
  //Palette
  color bg = color(random(0,255), random(0,255), random(0,255));
  background(bg);
  color elementColor = color(random(0,255), random(0,255), random(0,255)); 
  
  color step1 = lerpColor(bg, elementColor, .25);
  color step2 = lerpColor(bg, elementColor, .50);
  color step3 = lerpColor(bg, elementColor, .75);
  
  // Determines whether to include options  
  int optionPicker = int(random(0, 2));
  
  if(optionPicker == 1){
    randPolyTarget1();
  }
  
  stroke(150);
  strokeWeight(10);
  
  for (int w = 0; w <= width; w += canvas.W) {
    for (int h = 0; h < height; h += canvas.H) {     
      
    fill(elementColor);
    triangle(w + (canvas.W/2), h + (canvas.H/2), w + (canvas.W/2), h, w + canvas.W, h);
    fill(step1);
    triangle(w + (canvas.W/2), h + (canvas.H/2), w + canvas.W, h + (canvas.H/2), w + canvas.W, h + canvas.H);
    fill(step2);
    triangle(w + (canvas.W/2), h + (canvas.H/2), w + (canvas.W/2), h + canvas.H, w, h + canvas.H);
    fill(step3);
    triangle(w + (canvas.W/2), h + (canvas.H/2), w,  h + (canvas.H/2), w, h); 
    }
  }
}

























































    