// Accessing Elements & Attributes Using Document Object

var hElement = document.getElementById("my-heading");

// alert(hElement);

// Get DOM Object Value
// alert(hElement.innerHTML);

// Get DOM Object attribute Value
// alert(hElement.getAttribute("id"));

// Get Tag Name
// alert(hElement.tagName);

// Access Elements Using Class Attributes
var pElements = document.getElementsByClassName("my-paragraph");

alert(pElements);

alert(pElements[0]);

alert(pElements[0].innerHTML);

// Loop through all Paragraphs
for (var i=0; i < pElements.length; i++) {
	//alert(pElements[i].innerHTML);
}


// Access Elements Using Tag Name
var ulElements = document.getElementsByTagName("ul");

// alert(ulElements);

// alert(ulElements[1].innerHTML);

var liElements = ulElements[1].getElementsByTagName("li");

// alert(liElements[0].innerHTML)


// Access Elements using Name Attribute
var naElements = document.getElementsByName("user-name");

// alert(naElements[0].tagName);

// Access Element using CSS Query
var pElement = document.querySelector("p");

// alert(pElement.innerHTML);

var hElement = document.querySelector("#my-heading");

// alert(hElement.innerHTML);

var pElements = document.querySelectorAll("");

// alert(pElements[1].innerHTML);


var pElements = document.querySelectorAll("div p");

alert(pElements[1].innerHTML);

























