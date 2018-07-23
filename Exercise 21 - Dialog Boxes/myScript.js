// Dialog Boxes

// Alert Function
alert("Welcome to the End of the Internet.");



// Confirm Function
var v = confirm ("Do you want to receive daily news?");

if (v) {
	document.write("You will receive daily news.");
} else {
	document.write("You will NOT receive daily news.");
}

document.write("<br>");

// Prompt Function
var visitorAge = prompt("Enter Your Age: ");

if (visitorAge >= 18) {
	document.write("You may view the End of the Internet");
} else {
	document.write("You need to keep surfing");
	document.write(visitorAge);
}