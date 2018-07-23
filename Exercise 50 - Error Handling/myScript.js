// Error Handling

try {

	callMe();

}
catch(error) {

	// alert("Error message: " + error.message);

}

// try..throw...catch
var x = "test";

try {

	if (isNaN(x)) {

		throw("Not a number.");

	}

}
catch(e) {

	alert("Error: " + e);

}


// try..throw...catch...finally
var x = "test";

try {

	if (isNaN(x)) {

		throw("Not a number.");

	}

}
catch(e) {

	alert("Error: " + e);

}
finally {

	document.write("<h1> Error ocurred JK just a test");

}











