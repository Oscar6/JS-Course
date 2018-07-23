// String Type & String Object

// Create a string using new keyword
var ss = new String("This is America")

document.write(ss + "<br>");

var s = "This is USA";

document.write(s + "<br>");



// add special characters to string
var myString = "This is \"vanilla\" ice cream";
document.write(myString + "<br>");

var myString = "This is \'chocolate\' ice cream";
document.write(myString + "<br>");

var myString = "This is \*cookies 'n cream\* ice cream";
document.write(myString + "<br>");

// string properties and methods
var myQuestion = "Where do you live?";

// length of string
document.write("Length: " + myQuestion.length + "<br>");

// index of
document.write("Index Of: " + myQuestion.indexOf("you") + "<br>");

// Sub string
document.write(myQuestion.substring(6, 12) + "<br>");

// replace a string
document.write(myQuestion.replace("live", "sleep") + "<br>");

// uppercase
document.write(myQuestion.toUpperCase() + "<br>");

//lowercase
document.write(myQuestion.toLowerCase() + "<br>");

// finding character at index
document.write(myQuestion.charAt(2) + "<br>");

