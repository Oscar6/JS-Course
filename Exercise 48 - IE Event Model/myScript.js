// IE Event Model

// get button by its id
var btn2Element = document.getElementById("btn2");

function changeBtnFontSize() {
	// this.style.fontSize = "40px";
	event.srcElement.style.fontSize = "40px";

	alert(event.type);
	alert(event.srcElement);
}

btn2Element.attachEvent("onclick", changeBtnFontSize);

// remove event handler
// btn2Element.detachEvent("onclick", changeBtnFontSize);

// get element by id
var aElement = document.getElementById("linkedin");

function clickMe(event) {
	alert("Continue redirecting to LinkedIn?");

	// event.preventDefault(); // Prevents links from redirecting
}

aElement.attachEvent("onclick", clickMe);






















