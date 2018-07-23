// Conditions with Logical Operators

// Logical Operator and (&&)
var dogAge = 5;
var dogGender = "Female";

if ( (dogAge >= 5) && (dogGender == "Female") ) {
	document.write("Dog age is greater than or equal to 5 AND dog gender is Female.");
}
document.write("<br>");



// Logical Operator or (||)
var catAge = 8;
var catGender = "Female";

if ( (catAge >= 9) || (catGender == "Female") ) {
	document.write("Cat age is greater than or equal to 8 OR cat gender is Female.");
}
document.write("<br>");



// Logical Operator not (!)
var horseAge = 25;

if ( ! (horseAge > 20) ) {
	document.write("Horse age is less than 10.");
}
