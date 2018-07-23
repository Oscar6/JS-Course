// RegEx & Function Object


// Create RegEx using new keyword
var regExp1 = new RegExp("abcd");

// Alternate Syntax
var regExp2 = /abcd/;

var strToSearch = "This abcd is a bank name";

var matchFound = regExp2.test(strToSearch);

// alert(matchFound);


// Function object
var functionAsObject = new Function("a", "b", "return a + b");

var x = functionAsObject(10, 25);

//alert(x);

var y = function(a, b) { return (a + b) };
alert(y(25, 20));
