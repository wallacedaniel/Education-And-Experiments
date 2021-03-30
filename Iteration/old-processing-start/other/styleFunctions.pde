

//Returns an array containing a lerp color gradient 
private color[] getLerps(color bg, color elementColor){           //int steps
  color[] colorSteps = new color[]{bg, lerpColor(bg, elementColor, .1), lerpColor(bg, elementColor, .2), lerpColor(bg, elementColor, .3), lerpColor(bg, elementColor, .4), 
    lerpColor(bg, elementColor, .5), lerpColor(bg, elementColor, .6), lerpColor(bg, elementColor, .7), lerpColor(bg, elementColor, .8), lerpColor(bg, elementColor, .9), 
    elementColor};  
  return colorSteps;
}


private color[] getLerps2(color bg, color elementColor){           //int steps
  color[] colorSteps = new color[]{bg, lerpColor(bg, elementColor, .2), lerpColor(bg, elementColor, .4), lerpColor(bg, elementColor, .6), lerpColor(bg, elementColor, .8), 
    elementColor};  
  return colorSteps;
}