// Functions & Scope

// Global Scope
var x = 20;

function myFunction1() {
	// alert("x =  " + x + " accessed inside of a function.");
}
myFunction1();

// alert("x =  " + x + " accessed outside of a function.");



// Local Scope
// Function Scope
function myFunction2() {
	// local scope variable
	var y = 50;

	// document.write("y = " + y + " accessed inside of a function.");
}
myFunction2();

// document.write("y = " + y + " accessed outside of a function.");




// Automatically Global
function myFunction3() {
	// automatically global - just by initialization
	z = 100;

	document.write("z = " + z + " accessed inside of a function. <br>");
}
myFunction3();

document.write("z = " + z + " accessed outside of a function.");