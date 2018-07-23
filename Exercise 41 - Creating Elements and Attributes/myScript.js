// Creating Elements and Attributes

// Get Element by id Method
var ulElement = document.getElementById("my-list");

// Create List Item Mode
var newLiElement = document.createElement("li");

// Create Text Node for li
var newLiText = document.createTextNode("This is new list item");

// Append Text Node to New List Item as child
newLiElement.appendChild(newLiText);

// Append list item to unorder list as child
// ulElement.appendChild(newLiElement);



// Alternate way to add new element/node using parent node

// Get List item using id
var liElement = document.getElementById("list-item-01");

// liElement.parentNode.appendChild(newLiElement);

// Add new element using insertBefore
// liElement.parentNode.insertBefore(newLiElement, liElement);

// Replace element using replaceChild
// liElement.parentNode.replaceChild(newLiElement, liElement);

var hElement = document.getElementById("my-heading");
// add attribute to element
// hElement.setAttribute("align", "center");

// get anchor
var aElement = document.getElementsByTagName("a")[0];

// aElement.setAttribute("id", "my-link");

aElement.id = "my-link";






























