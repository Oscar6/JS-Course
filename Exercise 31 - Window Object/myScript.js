// Window Object

/*
	- window

*/

// Global Variable
var x = 15;
alert(window.x);

// Global function
function y() {
	document.write("Global function invoked using window object. <br>");

}
window.y();

alert("alert invoked without window object.");
window.alert("alert invoked using window object.");

window.confirm("confirm invoked using window object.");
window.prompt("prompt is invoked using window object.");


// Width of browser window
document.write("Window width: " + window.innerWidth + " in pixels <br>");

// Height of browser window
document.write("Window height: " + window.innerHeight + " in pixels <br>");

// Outer width of browser window including scrollbar and toolbars
document.write("Window outer width: " + window.outerWidth + " in pixels <br>");

// Height of browser window
document.write("Window outer height: " + window.outerHeight + " in pixels <br>");

// Set Window Name
window.name = "Olive's Window";
document.write("Window name: " + window.name + "<br>");

// Close Window
// window.close();

// Open new window
var productWindow = window.open("https://www.producthunt.com", 
	"Product Hunt", "width=666,height=666");

// Resize the Window above
productWindow.resizeTo(300, 300);

// Move to
productWindow.moveTo(666, 120);
























