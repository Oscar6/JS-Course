// Hamburger Icon
var btnMenu = document.getElementById("btn-menu");
btnMenu.addEventListener("click", toggleMenu);

function toggleMenu(e) {
	// About section
	var divOverlay = document.getElementsByClassName("overlay")[0];
	// Fade event
	var speed = 10; // 10 milliseconds


	// Toggle Menu
	var eventTarget = e.target;

	if (eventTarget.className == "btn-open") {
		fadeIn(divOverlay, speed);
		eventTarget.className = "btn-close";
	
	} else if (eventTarget.className == "btn-close") {
		fadeOut(divOverlay, speed);
		eventTarget.className = "btn-open";
	}
}

function fadeIn(elem, speed) {

	var inInterval = setInterval(function(){

	elem.style.opacity = Number(elem.style.opacity) + 0.02;

	if(elem.style.opacity >= 1) {

		elem.style.opacity = 1;
		clearInterval(inInterval);

	}

	}, speed);

}

function fadeOut(elem, speed) {

	var outInterval = setInterval(function(){

	elem.style.opacity = Number(elem.style.opacity) - 0.02;

	if(elem.style.opacity <= 0) {

		elem.style.opacity = 0;
		clearInterval(outInterval);

	}

	}, speed);

}






