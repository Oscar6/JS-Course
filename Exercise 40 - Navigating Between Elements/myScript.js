// Navigating Between Elements

var ulElements = document.getElementsByTagName("ul")[0];

// alert("Node name: " + ulElements.nodeName);
// alert("Node type: " + ulElements.nodeType);

// Get Node Parent
// alert("Node parent: " + ulElements.parentNode.nodeName);

// Child Nodes
// alert("Node child nodes: " + ulElements.childNodes);

// Get Child Nodes length
// alert("Child nodes length: " + ulElements.childNodes.length);

// Get ul Child Nodes and avoid whitespace
var ulChildNodes = ulElements.childNodes;

for (var i = 0; i < ulChildNodes.length; i++) {
	if(ulChildNodes[i].nodeType == 1) {
		// alert(ulChildNodes[i].innerHTML);
	}
}


// Get first child of a node
var liFirstChild = ulElements.firstChild.nodeValue;
// alert(liFirstChild);

// Get last child of a node
var liLastChild = ulElements.lastChild.firstChild.nodeValue;
// alert(liLastChild);


// Get Previous Sibling
alert(ulElements.previousSibling.innerHTML);

// Get Next Sibling
alert(ulElements.nextSibling.innerHTML);


















