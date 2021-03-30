/*

















//10021

// Manage RGB
 
float redVal = red(c);
float greenVal = green(c);
float blueVal = blue(c);

float r = random(redVal - 50, redVal + 50);
float g = random(greenVal - 50 , greenVal + 50);
float b = random(blueVal - 50, blueVal + 50);

stroke(r, g, b);

PIXELS

blend()
copy()
filter()
get()
loadPixels()
pixels[]

set()
  set(x, y, c)
  set(30, 20, black);
  
  set(x, y, img)
  set(0, 0, myImage);
  
updatePixels()

random(width);
random(min, max);

background(r, g, b);
clear()

color()
  color(gray)
  color(gray, alpha)
  color(v1, v2, v3)
  color(v1, v2, v3, alpha)

colorMode()
fill(r, g, b);
noFill()

noStroke()

ellipse(x, y, ellipseSize, ellipseSize);
arc()
line()
point()
quad()
rect()
triangle()

noLoop();
smooth();

TRIANGLE STRIP

int x;
int y;
float outsideRadius = 150;
float insideRadius = 100;

void setup() {
  size(640, 360);
  background(204);
  x = width/2;
  y = height/2;
}

void draw() {
  background(204);
  
  int numPoints = int(map(mouseX, 0, width, 6, 60));
  float angle = 0;
  float angleStep = 180.0/numPoints;
    
  beginShape(TRIANGLE_STRIP); 
  for (int i = 0; i <= numPoints; i++) {
    float px = x + cos(radians(angle)) * outsideRadius;
    float py = y + sin(radians(angle)) * outsideRadius;
    angle += angleStep;
    vertex(px, py);
    px = x + cos(radians(angle)) * insideRadius;
    py = y + sin(radians(angle)) * insideRadius;
    vertex(px, py); 
    angle += angleStep;
  }
  endShape();
}


*/




   