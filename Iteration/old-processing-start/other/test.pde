

void test(Canvas canvas) {
    
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





class StainGlass {
  
}





/*

strokeWeight(10);
  color bg = color(random(0,255), random(0,255), random(0,255));
  background(bg);
  color elementColor = color(random(0,255), random(0,255), random(0,255));
  color[] colorSteps = getLerps(bg, elementColor);
  stroke(elementColor);
    
  IntList[] radials = radialOptions(20, 72);
  
  int randomIndex = int(random(0,radials[0].maxIndex()));
  int divisor = radials[0].get(randomIndex);
  
  float r = 0;
  
  translate(width/2, height/2);
   
  
  fill(125);
  
  float x = 0;
  float y = 0;
  float angle = TWO_PI / divisor;
  
  int ellipseSize = 50;
  
  float starRadius1 = 100;
  float starRadius2 = 200;
  
  int size = 100;
  
  for (float a = 0; a < TWO_PI * 6; a += angle) {
    float sx = x + cos(a) * r;
    float sy = y + sin(a) * r;
    
    int starPoints = int(random(4, 13));
    
    line(0, 0, sx, sy);
    //fill(colorSteps[int(random(1, colorSteps.length - 1))]);
//noStroke();
    //ellipse(sx, sy, ellipseSize, ellipseSize);
    //drawStar(sx, sy, starRadius1, starRadius2, starPoints);
    drawTarget(sx, sy,  size, 6);
    r += 25;
    size += 20;
    //ellipseSize += 5;
  }
  
 */ 