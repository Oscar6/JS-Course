// Break & Continue Statements

// Break Statement
document.write("Break Statement <br>");

var i;

for (i = 1; i <= 10; i++) {
	if (i == 8) {
		break;
	}
	document.write(i + "<br>");
}

document.write("<br>");

// Continue Statement
document.write("Continue result: <br>")

var i;

for (i = 1; i <= 10; i++) {
	if (i == 5) {
		continue;
	}
	document.write(i + "<br>");
}