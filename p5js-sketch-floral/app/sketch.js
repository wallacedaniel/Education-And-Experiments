//                                                                                       -- Manage Maximum quantity

let stock = [
    {name: 'sunflowers', type: 'floral', colors: ['yellow', 'orange', 'red'], drawFlower : function(){flower(2, 7, width/4);}},
    {name: 'roses', type : 'floral', colors: ['white', 'lightpurple', 'yellow', 'orange', 'red', 'lightpink', 'pink'], drawFlower : function(){flower(4, 1, width/4); }},
    {name: 'lillies', type : 'floral', colors: ['white', 'yellow', 'orange', 'pink'], drawFlower : function(){flower(1, 3, width/4);}},
    {name: 'tulips', type : 'floral', colors: ['white', 'yellow', 'purple', 'orange', 'red', 'pink', 'lightpink'], drawFlower : function(){flower(7, 1, width/4);}},
    {name: 'orchids', type : 'floral', colors: ['pink', 'purple', 'white'], drawFlower : function(){flower(2, 1, width/4);}}, 
    {name: 'carnations', type : 'floral', colors: ['white', 'pink', 'red', 'yellow', 'lightpink', 'lightorange'], drawFlower : function(){flower(5, 4, width/4);}},
    {name: 'daisies', type : 'floral', colors: ['white', 'yellow', 'pink', 'purple', 'orange', 'red'], drawFlower : function(){flower(2, 7, width/4);}},
    {name: 'mums', type : 'floral', colors: ['red', 'orange', 'yellow', 'pink', 'white'], drawFlower : function(){flower(5, 6, width/4);}},
    {name: 'dephinium', type : 'floral', colors: ['blue', 'purple', 'lightpurple', 'white'], drawFlower : function(){flower(7, 5, width/4);}},
    {name: 'poms', type : 'floral', colors: ['lightgreen', 'yellow', 'litepink', 'liteorange', 'white', 'litepurple'],drawFlower : function(){flower(7, 6, width/4);}},
    {name: 'waxflower', type : 'floral', colors: ['white', 'lightpink', 'pink'], drawFlower : function(){flower(3, 5, width/4);}},
    {name: 'alstromeria', type : 'floral', colors: ['orange', 'pink', 'yellow', 'white', 'purple'],drawFlower : function(){flower(3, 6, width/4);}},
    {name: 'asters', type : 'floral', colors : ['purple', 'white', 'lightpink'],drawFlower : function(){flower(1, 6, width/4);}},
    {name: 'vase', type : 'option', colors : [], styles : []},
    {name: 'pot', type : 'option', colors : [], styles : []},
    {name: 'paper', type : 'option', colors : [], styles : []},    
];

let boquet = {flowers : [], options : []};    

class FlowerType {
  constructor(type, stockIndex, qty) {
    this.type = type;
    this.stockIndex = stockIndex;
    this.qty = qty;
    this.colors = [];
  }
}

function setup() {
    
     // CREATE THE VIEW
    
    c = createCanvas(400, 600);
    strokeWeight(3);
    stroke(50);
    fill(225);
    let floralItem;
    for (item of stock) {
        if(item.type == 'floral'){
            
            // CREATES FLOWER TYPE SELECTORS
            
            floralItem = createCheckbox(item.name, false);  // change the explicit width style
            
            // CREATES QTY INPUT
            
            floralItemQty = createInput(1, 'number').attribute("style", "width:30px; height:30px;").attribute("min", 1).attribute("id", item.name + "Qty").attribute("name", item.name);
            floralItemQty.hide();
            floralItem.changed(addFlowerType);
            floralItemQty.changed(updateQty);                      
            
            // CREATES COLOR SELECTORS
            
            let containerCount = 1;
            for(color of item.colors){
                if(containerCount == 1){
                    colorContainer = createDiv().attribute("style", "width:30px; height:30px; background:" + color + "; float:left; border-radius:100%; border: 2px solid yellow").attribute("class", item.name + "ColorSelect").attribute("name", color).hide(); 
                } else {
                    colorContainer = createDiv().attribute("style", "width:30px; height:30px; background:" + color + "; float:left; border-radius:100%; border: 1px solid #333").attribute("class", item.name + "ColorSelect").attribute("name", color).hide();
                }
                colorContainer.mouseClicked(updateColor);                                     
                containerCount++;
            } 
          
        }
    }
    
    // CREATES OPTIONS
    
    selectOptions = createRadio();       // set default of vase
    
    for (item of stock) {
        if(item.type == 'option'){
            selectOptions.option(item.name); 
            selectOptions.changed(selectedOption);
        }
    }
}

function draw() {
    background(125, 125, 125);            
     push();
     translate(width/2, height/2);
     stock[12].drawFlower();
     pop();   
}

// FLOWER TYPE CHECKBOXES       

function addFlowerType() {  
    
  let qtySelector = select('#' + this.value() + 'Qty');    // ES3 change to arrow functions
  let colorSelect = selectAll('.' + this.value() + 'ColorSelect');       // maybe color selectors just in <div> containers better?
  if (this.checked()) {
      
      // show qty and color selectors
      qtySelector.show();
      for(i = 0; i < colorSelect.length; i++){         
        colorSelect[i].show(); 
      }     

      for(i = 0; i < stock.length; i++){
        if(stock[i].name == this.value()){        
            let newFlower = new FlowerType(this.value(), i, 1); 
            newFlower.colors.push(colorSelect[0].elt.attributes.name.textContent);                       
            boquet.flowers.push(newFlower);                     // Seperate out  M V C ?
            break;
        }
    }
  } else {
    qtySelector.hide();
      
    for(i = 0; i < colorSelect.length; i++){      //******** deslect all 
        colorSelect[i].hide();    
    } 

    colorSelect[0].hide();
    for(i = 0; i < boquet.flowers.length; i++){
        if(boquet.flowers[i].type == this.value()){ 
            boquet.flowers.splice(i, 1);  
            break;                                       
        }
    }
  }
  updateBoquet();                           // indent off in this area ^^S
}

function updateQty() {
    
    for (flowerType of boquet.flowers) {
        if(flowerType.type == this.elt.attributes.name.textContent){
            flowerType.qty = this.value();
        }
    }
    updateBoquet();
}

function updateColor() { 
    
    if(!this.elt.classList.contains("selectedColor")){
        this.elt.classList.add("selectedColor");
    } else {
        this.elt.classList.remove("selectedColor"); 
    }
       
    //console.log(this.elt.attributes.style.textContent);
    //this.elt.attributes.style.textContent = "border: 2px solid yellow;";
    //this.elt.setAttribute('style', "border: 2px solid yellow;")
    updateBoquet();
}

// OPTIONS RADIO BUTTONS

function selectedOption() {
    boquet.options.pop();  
    boquet.options.push(this.value());  
}

// DRAW BOUQUET

function updateBoquet() { 
    console.log(boquet);
}

// DRAW FLOWER

function flower(d, n, radius){
 var k = n / d;
  beginShape();
  for (var a = 0; a < TWO_PI * reduceDenominator(n, d); a += 0.02) {
    var r = radius * cos(k * a);
    var x = r * cos(a);
    var y = r * sin(a);
    vertex(x, y);
  }
  endShape(CLOSE);
}

function reduceDenominator(numerator, denominator) {
    function rec(a, b) {
        return b ? rec(b, a % b) : a;
    }
    return denominator / rec(numerator, denominator);
}
   
    


// d 2 / n 7 sunflower   0
// d 4 - 9 / n 1 rose irregulars - tulips 1&3
// d 1 / n 3  x2 rotate n scale lilly  2
// d 2 / n 1 orchids  4
// d 5 / n 4 carnations  5
// d 2 / n 7 daisies  6
// d 5 / n 6 mums 7
// d 7 / n 5 delphiniums 8
// d 7 / n 6 poms 9
// d 3 / n 5 waxflower 10
// d 3 / n 6 alstroemeria 11
// d 1 / n 6 asters 13


//THE MODEL
//stock
//
//    vase types 
//
//    flower types
//        
//        name colorOptions drawFunction
//        
//        
//        
//    THE VIEW
//
//    for each in stock
//
//    create a vase selector   vase style
//     > paper color selector - style selector
//    
//    create a flower selector

//     THE CONTROL

//     all flower checkboxes onchange update model > update draw with min 1 qty
//        all flower qty selector onchange the same
//        all flower
//        update button the same


//   Every controller event    add or subtract from boquet object - boquet redraw (clump) algorithm  -- randomizes variety each time!



//Every click updates the boquet object and re draws the boquet
//Click flower type on > show qty box> show color selections set to 1st > add single to B-obj > updateDraw
//                  off > hide qty > hide colors > remove all of type from B-obj > updateDraw 
//Click qty up or down (min1)(max?) > up?ordown? add/remove single to B-obj > updateDraw
//Click color > toggle highlight off/on > add or remove color option to boquet color options for that type (max colors selectable limited to qty selected)                         
//Draw > for each flower in the boquet ...   ratio of qty flowers of type selected to qty of colors selected ...evenly distribute then randomly distribute
//     clumping ... variance



//
//Task 1: Build the Model
//Task 2: Populate the View
//
//Background
//Boquet
//Vase
//Flowers
//
//
//vase type 
//vase color
//none  
//    > background / paper
//
//update button 
//flower types          << some combos mix

//quantity
//    > limits
//color options
//    - select 1 > multiples to mix > limit selection qty to qty of type flower
//    -random
//
//draw variety - size - color - hierarchy and type relation



//white                 254,250,247
//lite pink             255,216,220
//pink                  253,100,200
//lite purple           231,223,255
//purple                148,26,170
//yellow                249,216,2
//lite orange           254,214,178
//orange                255,122,6
//red                   229,0,28
//chartreuse            200,225,97
//blue                  40,54,244
//green1                84,155,56
//green2                48,86,17




//
//let d;
//let n;
//do {
//    d = int(random(1,10));
//    n = int((random(1,8)));
//} while (d  == n || (d == 3 && n  == 1)  || (d == 6 && n  == 2)  || (d == 9 && n == 3)) ;
//

// d 4 - 9 / n 1 rose irregulars - tulips 
// d 2 / n 1 orchids
// d 1 / n 3  x2 rotate n scale lilly
// d 2 / n 7 daisies  option to  x2 rotate n scale
// d 2 / n 7 sunflower
// d 5 / n 6 mums
// d 3 / n 6 alstroemeria
// d 3 / n 5 waxflower
// d 5 / n 4 carnations
// d 7 / n 5 delphiniums
// d 7 / n 6 poms
//d 1 / n 6 asters 





// SUPERELLIPSE
function superEllipse(a, b, n){    
    
  beginShape();
  for (let angle = 0; angle < TWO_PI; angle += 0.1) {
    let na = 2 / n;
    let x = pow(abs(cos(angle)), na) * a * sgn(cos(angle));
    let y = pow(abs(sin(angle)), na) * b * sgn(sin(angle));
    vertex(x, y);
  }
  endShape(CLOSE);
}

function sgn(val) {
  if (val == 0) {
    return 0;
  }
  return val / abs(val);
}










