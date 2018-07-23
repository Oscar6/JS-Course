// if ... else statements

// Example 1: if...
var cityTemperature = 100;

if (cityTemperature == 100) {
	cityTemperature = cityTemperature - 20;
	document.write("City temperature just changed to " + cityTemperature + "<br>");
}

// Example 2: if ... else
var townTemperature = 80

if (townTemperature == 100) {
	townTemperature = townTemperature - 20;
	document.write("Town temperature just changed to " + townTemperature + "<br>");
} else {
	document.write("No need to change temperature" + "<br>");
}

// Example 3: if ... else ... if ... else
var streetTemp = 80;

if (streetTemp == 100) {
	streetTemp = streetTemp - 20;
	document.write("Street temperature just changed to " + streetTemp + "<br>");
} else if (streetTemp == 90) {
	streetTemp = streetTemp - 10;
	document.write("Street temperature just changed to " + streetTemp + "<br>");
} else {
	document.write("No need to change temperature");
}
	document.write("<br>");

// Ternary Operator
var classTemperature = 80;

var classTemperatureStatus = (classTemperature = 100) ? classTemperature - 20: classTemperature;
document.write("Class current temperature is " + classTemperatureStatus + "<br>");