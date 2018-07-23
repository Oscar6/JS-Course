// Functions

// function with parameters
document.write("Functions with Parameters <br>");

function functionWithParameters(p1, p2) {
	var z = p1 * p2;
	document.write("p1 * p2 = " + z + "<br>");
	
}

// function call with argument
functionWithParameters(10, 20);

document.write("<br>");


// Accept function as value
function parameterAsFunction (func) {
	func();
}
parameterAsFunction(helloWorld);

function helloWorld() {
	alert("Hello, World. Function passed as an argument.");
}

document.write("<br>");


// Function with Return Statement
document.write("Functions with Return Statement <br>");

function returnSum(x, y) {
	var z = x + y;
	return z;
}
document.write("Returned Value: " + returnSum (10, 20));