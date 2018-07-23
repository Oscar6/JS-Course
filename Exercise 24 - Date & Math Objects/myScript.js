// Built-in Date & Math Objects

var rightNow = new Date();

alert(rightNow);


// Millisecons
var dt = new Date(1024198807022);

alert(dt); //will show date in milliseconds from 01 Jan, 1970


// date string

dt = new Date("April 23, 2017");

alert(dt);

// passing to date constructor 
// (year, month, day, hour, minute, second, and milliseconds)
dt = new Date(2017, 4, 23, 6, 20, 6, 0);

// alert (dt);


// Date object with methods
var dtm = new Date();
// get Day
document.write("Date: " + dtm.getDate() + "<br>");
// get Day of Week
document.write("Day: " + dtm.getDay() + "<br>"); //Sun-0, Mon-1, Tue-2..
// get Month
document.write("Month: " + dtm.getMonth() + "<br>");
// get Year
document.write("Year: " + dtm.getFullYear() + "<br>");
// get Hours
document.write("Hours: " + dtm.getHours() + "<br>");
// get Minutes
document.write("Minutes: " + dtm.getMinutes() + "<br>");
// get Seconds
document.write("Seconds: " + dtm.getSeconds() + "<br>");

// Math object handles mathematical operation
var sqr = Math.sqrt(20);

document.write("Square Root: " + sqr + "<br>");



// finding minimum number
var min = Math.min(10,24,1988,29);

document.write("Minimum: " + min + "<br>");

//finding maximum number
var max = Math.max(10,24,1988,29);

document.write("Maximum: " + max + "<br>");


// random number
var rdm = Math.random();

document.write("Random: " + rdm + "<br>");

// round number
var rnd = Math.round(29.5);

document.write("Rounded: " + rnd + "<br>");


// Pi property

var pi = Math.PI;
document.write("PI: " + pi + "<br>");














