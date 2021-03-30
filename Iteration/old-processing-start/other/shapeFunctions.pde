

// Draws concentric stepped polygons with variables sides, with stepped gray values and opacity
void drawPolyTarget(float xloc, float yloc, int size, int polySides, int numSteps) {
  float alphaValues = 255/numSteps;
  float steps = size/numSteps;
  for (int i = 0; i < numSteps; i++) {
    fill(245, i * alphaValues * .2);
    drawPolygon(xloc, yloc, size - i*steps, polySides);
  }
}


// Draws concentric circle "target" with stepped gray values and opacity
void drawTarget(float xloc, float yloc, int size, int numSteps) {
  float grayvalues = 255/numSteps;
  float steps = size/numSteps;
  for (int i = 0; i < numSteps; i++) {
    fill(245, i*grayvalues*.2);
    ellipse(xloc, yloc, size - i*steps, size - i*steps);
  }
}


//int[] angles = { 30, 10, 45, 35, 60, 38, 75, 67 };
//pieChart(3000, angles);    
void drawPieChart(float diameter, int[] data) {
  float lastAngle = 0;
  for (int i = 0; i < data.length; i++) {
    float gray = map(i, 0, data.length, 0, 255);
    fill(gray);
    arc(width/2, height/2, diameter, diameter, lastAngle, lastAngle+radians(data[i]));
    lastAngle += radians(data[i]);
  }
} 


// Draws polygons with variables sides
void drawPolygon(float x, float y, float radius, int npoints) {
  float angle = TWO_PI / npoints;
  beginShape();
  for (float a = 0; a < TWO_PI; a += angle) {
    float sx = x + cos(a) * radius;
    float sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}


void drawRadial(float diameter, int divisor, int angle, int x, int y, color elementColor, color elementColor2) {
  float lastAngle = 0;
  color[] radialSteps = getLerps(elementColor, elementColor2);
  int index = int(random(0,radialSteps.length));
  
  Boolean check = true;
  int step = 3;
  
  for (int i = 0; i < divisor; i++) {
    if(index + step < radialSteps.length && check == true){
      index = index + step;
      check = true;
    }
    else if (index - step >= 0) {
      index = index - step;
      if(index - step >= 0){
        check = false;
      }
      else{
        check = true;
      }      
    }
    color radialColor = radialSteps[index];
    fill(radialColor);
    arc(x, y, diameter, diameter, lastAngle, lastAngle + radians(angle));
    lastAngle += radians(angle);
  }
} 


void drawStar(float x, float y, float radius1, float radius2, int npoints) {
  float angle = TWO_PI / npoints;
  float halfAngle = angle/2.0;
  beginShape();
  for (float a = 0; a < TWO_PI; a += angle) {
    float sx = x + cos(a) * radius2;
    float sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}


// Returns a list of angle / divisor pairs - constrained to usable values 
IntList[] radialOptions(int innerBound, int outerBound) { 

  IntList[] radials = new IntList[2];
  IntList angles = new IntList();
  IntList divisors = new IntList();
  
  for (int divisor = innerBound; divisor <= outerBound; divisor++) {
    if(360 % divisor == 0){
      divisors.append(divisor);
      int angle = 360 / divisor;
      angles.append(angle);      
    } 
    radials[0] = divisors;
    radials[1] = angles;
  }
  return radials;
}


// Draws a randomly located, sized and stepped - circular, diamond, hexagonal, or 5pt circular - stepped grayscale and opacity target
void randPolyTarget1() {  
  int shapePicker = int(random(0, 4));
  //Circular
  if (shapePicker == 0){
    drawTarget(random(0, width), random(0, height), int(random(width, width * 2)), int(random(6, 12)));  
  }
  //Diamond
  else if (shapePicker == 1) {
    int polySize = int(random(width, width * 2));
    int polyTargetSteps = int(random(6,13));
    drawPolyTarget(random(0, width), random(0, height), polySize, 4, polyTargetSteps);
  }
  //Hexagonal
  else if (shapePicker == 2) {
    int polySize = int(random(width, width * 2));
    int polyTargetSteps = int(random(6,13));
    drawPolyTarget(random(0, width), random(0, height), polySize, 6, polyTargetSteps);
  } 
  //5 pt. Circular
  else {
    int[][] fivePoints = getFivePoints();
    int numSteps = int(random(6,13));
    int size = int(random(width ,width * 2));
    for (int i = 0; i < 5; i++) {  
      drawTarget(fivePoints[i][0], fivePoints[i][1], size, numSteps);
    }
  }
}