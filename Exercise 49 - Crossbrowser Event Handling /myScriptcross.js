// Cross Browser

// cross broswer add event
var addEvent = function(el, type, func) {
	if (typeof(addEventListener) !== 'undefined') {
		
		el.addEventListener(type, func);
	
	} else if (typeof(attachEvent) !== 'undefined') {

		el.attachEvent("on" + type, func); // IE 8 and earlier version

	} else {

		// el."on" + type // generate error
		
		// obje.property
		// obje.[property]

		el["on" + type] = func;
	}
};


// cross broswer remove event
var removeEvent = function(el, type, func) {
	if (typeof(removeEventListener) !== 'undefined') {
		
		el.removeEventListener(type, func);
	
	} else if (typeof(detachEvent) !== 'undefined') {

		el.detachEvent("on" + type, func); // IE 8 and earlier version

	} else {

		// el."on" + type // generate error
		
		// obje.property
		// obje.[property]

		el["on" + type] = null;
	}
};

// cross browser get target
var getTarget = function(event) {

	if (typeof(event.target) !== 'undefined') {

		return event.target;

	} else {

		return event.srcElement; // IE and earlier versions
	
	}

};

// cross browser prevent default
var preventDefault = function(event) {

	if (typeof(event.preventDefault) !== 'undefined') {

		event.preventDefault();

	} else {

		event.returnValue = false; // IE 8 and earlier versions

	}

};
















