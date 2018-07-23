// Nested Functions

function outerFunction() {
	function innerFunction() {
		// document.write("Code execution inside inner/nested function");
	}
	innerFunction();
}
outerFunction();



// Scoping Rules
function outerFunction2(x, y) {
	var d = 20;
	function innerFunction2() {
		var g = 10;

		document.write("g = " + g + "<br>");
		document.write("d = " + d + "<br>");
		document.write("x = " + x + "<br>");
		document.write("y = " + y + "<br>");
	}
	innerFunction2();
}
outerFunction2(30, 40);