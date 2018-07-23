// Event Object

// get button by its id
var btn2Element = document.getElementById("btn2");

function changeBtnFontSize() {
	// this.style.fontSize = "40px";
	event.target.style.fontSize = "40px";

	alert(event.type);
	alert(event.target);
}

btn2Element.addEventListener("click", changeBtnFontSize);

// get element by id
var aElement = document.getElementById("linkedin");

function clickMe(event) {
	alert("Continue redirecting to LinkedIn?");

	// event.preventDefault(); // Prevents links from redirecting
}

aElement.addEventListener("click", clickMe);






















