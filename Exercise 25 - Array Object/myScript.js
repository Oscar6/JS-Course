// Array Object


// Create an array using new keyword
var myColors = new Array("Red", "Green", "Blue");

document.write(myColors[1] + "<br>");

// Alternate syntax
var myColors = ["Red", "Green", "Blue"];

document.write(myColors[0] + "<br>");

// Modify array element
myColors[1] = "Yellow";

document.write(myColors[1] + "<br>");

// Access all elements of an array
document.write(myColors + "<br>");

// Find length of an array
document.write(myColors.length + "<br>");

// Sort an array alphabetically
document.write(myColors.sort() + "<br>");

// Reverse an array
document.write(myColors.reverse() + "<br>");

// Add element using Push method
myColors.push("Pink");
document.write(myColors + "<br>");

// Remove an element using pop
myColors.pop("Pink");
document.write(myColors + "<br>");

// Join Two or More Arrays
var listOfNumber1 = [1,2,3];
var listOfNumber2 = [4,5,6];

var allNumbers = listOfNumber1.concat(listOfNumber2);
document.write(allNumbers + "<br>");

// Loop through an Array Elements
var myCars = ["Subaru", "Honda", "Toyota"];

for (var i = 0; i < myCars.length; i++) {
	document.write(myCars[i] + "<br>");
}

// Array of Objects
var myCars = [
		{ model: "Subaru", year: 2013},
		{ model: "Honda", year: 2014},
		{ model: "Toyota", year: 2015}
];

for(var k = 0; k < myCars.length; k++) {
	var myCar = "";
	for (var cp in myCars[k]) {
		myCar = myCar + myCars[k][cp];
	}

	document.write(myCar + "<br>");
}








