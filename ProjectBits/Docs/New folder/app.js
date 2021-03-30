
/*


//current date and time

var d = new Date();
document.getElementById("demo").innerHTML = d;


//specified date and time

var d = new Date("October 15, 2017 18:24:28");
document.getElementById("demo").innerHTML = d;


//Button with a click function
var dateButton = document.querySelectorAll('#datebutton');
dateButton.addEventListener('click', createParagraph); 

//Strings
myString.length
myString.replace('moz','van');
myString.toLowerCase();
myString.toUpperCase();
myString.slice(0,3);
myString.indexOf('zilla');
.ToString();
Number(myString);

//Array <--> String
var myArray = myData.split(',');
var myNewString = myArray.join(',');
or
myArray.ToString();   but no (',') alternates as in .join

//Arrays
.push() and .pop()  <--to/from end
.shift() and .unshift()  <--to/fromm beginning

//Conditonals
Switch Statement

//Events
var btn = document.querySelector('button');

btn.onclick = function() {
  var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}

OR

myElement.addEventListener('click', functionA);
myElement.addEventListener('click', functionB);
myElement.removeEventListener('click', functionA);

event object

btn.onclick = function(e) {
    e.target.style.backgroundColor = #fff;
}

e.preventDefault();

stop bubbling
e.stopPropagation();

register event during capture phase rather than bubbling
addEventListener(prop1, prop2, true);


//Object constructor function ...  <--name is capped
  this.name = {
    first,
    last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
  this.bio = function() {
    alert(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
  };
  this.greeting = function() {
    alert('Hi! I\'m ' + this.name.first + '.');
  };
}

...and call

var person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);

create object instances without first creating constructors..based off other objects
for creating only a few instances of an object (No IE8 support)
var person2 = Object.create(person1);
*/

var dateButton = document.querySelector('.date-submit');
dateButton.addEventListener('click', displayDate);





var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#FF0000";
ctx.fillRect(0,0,150,75);

function displayDate(){
	var startDate = document.createElement('h2');
	startDate.textContent = new Date("October 15, 2017 18:24:28");
	
	//var dateDiv = document.getElementsByClassName('date-container');
	//dateDiv.appendChild(startDate);
	
	document.body.appendChild(start-date);
	
	
	
	//var currentDate = new Date();
	
	//document.getElementById("start-date").innerHTML = startDate;
	//document.getElementById("date").innerHTML = currentDate;
}



 
  



