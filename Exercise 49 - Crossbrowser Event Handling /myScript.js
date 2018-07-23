// Cross Browser Event Handling

// get button by its id
var btn2Element = document.getElementById("btn2");

function changeBtnFontSize(event) {
	// this.style.fontSize = "40px";
	// event.target.style.fontSize = "40px";
	getTarget(event).style.fontSize = "40px";

}

// btn2Element.addEventListener("click", changeBtnFontSize);

addEvent(btn2Element, "click", changeBtnFontSize);


// get element by id
var aElement = document.getElementById("linkedin");

function clickMe(event) {

	alert("Continue redirecting to LinkedIn?");

	// event.preventDefault(); // Prevents links from redirecting
	// preventDefault(event);
}

// aElement.addEventListener("click", clickMe);

addEvent(aElement, "click", clickMe);




















