// Self Executing Anonymous Function
(function() {
	alert("Auto show up messages: Self Executing Anonymous Function");
})();

// Alternate Syntax
(function(){
	alert("Auto show up messages: Alternate Syntax");
}());

// Pass Argument to Self Executing Function
(function(x, y) {
	alert("Sum of x & y: " + (x + y));
})(10, 20);

// Self Executing Function with Return
var sum = (function(x,y){
	return (x + y);
})(10, 50);
alert("Returned Sum: " + sum);