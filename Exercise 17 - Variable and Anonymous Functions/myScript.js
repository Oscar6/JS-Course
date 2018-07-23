// Function as a Variable & Anonymous Function

function sum(x, y) {
	return (x + y);
}

// assign function to a variable
var s = sum;
var r = s(10, 20);

document.write(r + "<br>");


// Define function without a name
// Anonymous Function
var isAdult = function(age) {
	if(age >= 21) {
		return "Yes";
	} else {
		return "No";
	}
};
var k = isAdult(25);

document.write("Does the Adult meet minimum drinking age requirements?: " + k);

