// Changing Elements Content and Attributes

// Get h1 by its id
var hElement = document.getElementById("my-heading");

// Get node value
alert(hElement.nodeValue);

// Get text node
// alert(hElement.childNodes[0].nodeValue);

// Get text node
alert(hElement.firstChild.nodeValue);

// Set node value
// hElement.firstChild.nodeValue = "Heading text just changed";

// Set content using textcontent
// hElement.textContent = "Heading text changed using textContent";

// Set content using innerHTML
// hElement.innerHTML = "Heading text changed using innerHTML";

// Set content using outerHTML
// hElement.outerHTML = "<h2><em> Heading text changed using outerHTML </em></h2>";

// Get image by its tag name
var imgElement = document.getElementsByTagName("img")[0];
	
// imgElement.setAttribute("src", "js-2.png");

imgElement.src = "js-2.png";

// change a href link
var aElement = document.getElementsByTagName("a"[0]);

















