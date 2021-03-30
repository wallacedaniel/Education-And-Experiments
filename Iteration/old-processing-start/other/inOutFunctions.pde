

// Saves an image with an inverted palette
void outputInverse(String folder, String design, int iteration) {
  PImage img = loadImage(folder + "/iteration-" + design + iteration + ".png");
  image(img, 0, 0);
  filter(INVERT);  
  save(folder + "/" + "iteration-" + design + iteration + ".2png"); 
}

// In progress
void outputTile(String folder, String fileName) {
  PImage img = loadImage(folder + "/" + fileName + ".png");
  image(img, 0, 0);  
  PImage tile = get(width/2, height/2, width/2, height/2);
  image(tile, 0, 0);     
  save(folder + "/" + fileName + "2.png");  
}

 