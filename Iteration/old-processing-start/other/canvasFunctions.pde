
class Canvas {

  int W;
  int H;
  ArrayList<int[]> coordinates;
  
  Canvas(float innerWBound, float outerWBound, float innerHBound, float outerHBound, boolean square){

    // Gets all possible grid ratios
    IntList[] canvasD = createGrids(innerWBound, outerWBound, innerHBound, outerHBound);
    int[] gridD = new int[2];
    //...selects random pair...    
    if(square == true) {
      gridD = getSquares(canvasD);
    }
    else {
      gridD = getDimensions(canvasD);      
    }  
    //... and sets W and H
    this.W = gridD[0];
    this.H = gridD[1];
    
    // Creates array of grid coordinates
    ArrayList<int[]> coordinatesArray = new ArrayList<int[]>();
    for (int w = 0; w <= width; w += W) {
      for (int h = 0; h < height; h += H) {
        int[] pairs = new int[2];
        pairs[0] = w;
        pairs[1] = h;
        coordinatesArray.add(pairs);
      }
    }
    this.coordinates = coordinatesArray;
  }
  
  // Returns IntList[] containing two IntList[]'s of all evenly divisible Widths and Heights for Canvas - constrained by Upper and Lower Bounds
  IntList[] createGrids(float innerWBound, float outerWBound, float innerHBound, float outerHBound) {
    IntList[] canvasD = new IntList[2];
    IntList widthDivs = new IntList();
    for(int i = 1;i <= width;i++){
      
      if(width%i == 0 && i >= (width * innerWBound) && i <= (width * outerWBound)){
        widthDivs.append(i);
      }
    }
    IntList heightDivs = new IntList();
    for(int i = 1;i <= height;i++){
      if(height%i == 0 && i >= (height * innerHBound) && i <= (height * outerHBound)){
        heightDivs.append(i);
      }
    }
    canvasD[0] = widthDivs;
    canvasD[1] = heightDivs;
    return canvasD;
  }
  
  // Returns random W and H values for grid
  int[] getDimensions(IntList[] canvasD){
    int[] gridD = new int[2];
    int indexW = floor(random(0,canvasD[0].maxIndex()));
    int indexH = floor(random(0,canvasD[1].maxIndex()));
    gridD[0] = canvasD[0].get(indexW);
    gridD[1] = canvasD[1].get(indexH);
    return gridD;
  }
  
  // Returns random W and H values for grid - constrained to squares
  int[] getSquares(IntList[] canvasD){
  
    IntList commonDimensions = new IntList();  
    int[] gridD = new int[2];  
    
    for(int i = 0; i < canvasD[0].size(); i++){    
      if(canvasD[1].hasValue(canvasD[0].get(i))){ 
        
        commonDimensions.append(canvasD[0].get(i));
      }     
    }
    int squareIndex = int(random(0, commonDimensions.size()));
    gridD[0] = commonDimensions.get(squareIndex);
    gridD[1] = gridD[0];
    return gridD;
  }
}


// Gets points at 4 corners and middle of canvas
int[][] getFivePoints(){
    int[][] fivePoints = new int[][] { {0,0}, {width, 0}, {width, height}, {0, height}, {width/2, height/2}};
    return fivePoints;
}