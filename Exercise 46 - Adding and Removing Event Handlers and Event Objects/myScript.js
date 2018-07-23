// Adding & Removing Event Handlers & Event Object

/*
	There are 3 methods/models to add an event handler to an event
		- inline
		- element.event
		- element.addEventListener

*/

// inline (not the best method)
function speak() {
	alert("You clicked");
}

// element.event 
var btnElement = document.getElementById("btn");

btnElement.onclick = function() {
	alert("You clicked");
}

// window.onload = function() {
// 	alert("Page has completed loading");
// }



// get heading element by its id
var hElement = document.getElementById("my-heading");

// hElement.onmouseover = function() {
// 	if (this.className == "h-normal") {
// 		this.className = "h-changed";
// 	} else {
// 		this.className = "h-normal";
// 	}
// }

// hElement.onmouseover = function () {
// 	alert("Previous event handler overwritten");
// }

// get button by its id
var btn2Element = document.getElementById("btn2");

function changeBtnFontSize() {
	this.style.fontSize = "45px";
}

btn2Element.addEventListener("click", changeBtnFontSize);
btn2Element.addEventListener("click", function() {
	alert("This will not overwrite previous event handler")
});

// remove event handler(removes font change)
btn2Element.removeEventListener("click", changeBtnFontSize);




























