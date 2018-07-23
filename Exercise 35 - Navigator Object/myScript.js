// Navigator Object


/*

	- window
		- screen
		- history
		- navigator

*/


// Check if Cookies are Enabled or Disabled on User Browser
document.write("Cookies Enabled: " + window.navigator.cookieEnabled + "<br>");

// Browser Name, Version, Code
document.write("Name: " + navigator.appName + "<br>" +
				"Version: " + navigator.appVersion + "<br>" +
				"Code Name: " + navigator.appCodeName + "<br>" +
				"Platform: " + navigator.platform + "<br>" +
				"Language: " + navigator.language + "<br>" +
				"Java Enabled: " + navigator.javaEnabled()
				);


