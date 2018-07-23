// Even/Odd Number Excercise
var number = 0

for (number = 0; number <= 10; number++) {
	if (number === 0) {
		document.write(number + " is Even <br>");
	} else if (number % 2 === 0) {
		document.write(number + " is Even <br>");
	} else {
		document.write(number + " is Odd <br>");
	}
}