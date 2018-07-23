// Objects

// Create an object using a new keyword
var person = new Object();
person.firstName = "Lionel";
person.lastName = "Messi";
person.age = 30;
person.height = 5.6;

person.fullName = function() {
	return (person.firstName + " " + person.lastName);
}

// alert(person.firstName);
// alert(person["age"]);
// alert(person.fullName());

// create an object using and object constructor
function Person(fName, lName, age, hg) {
	this.firstName = fName;
	this.lastName = lName;
	this.age = age;
	this.height = hg;

	this.fullName = function() {
		return (this.firstName + " " + this.lastName);
	}
}

var myStriker = new Person("Sergio", "Aguero", 30, 5.8);
var myKeeper = new Person("Willy", "Caballero", 36, 6.1);

// alert(myStriker.firstName);
// alert(myStriker.fullName());

// alert(myKeeper.firstName);
// alert(myKeeper.fullName());



// create an object using an object literal -- EASIEST WAY
var person = {
	firstName : "Mo",
	lastName: "Salah",
	age: 26,
	height: 5.9,
	fullName: function() {
		return(this.firstName + " " + this.lastName);
	}
};

// alert(person.firstName);
// alert(person["age"]);
// alert(person.fullName());



// objects are changeable
var x = person;

x.firstName = "Mohamed";

// alert(x.firstName);
// alert(person.firstName);

delete person.age;

// alert(person.age);

// for in-loop property for an object
var myCar = {
	name: "Tesla",
	year: 2018,
	color: "Black"
};

var v = "";
for (var k in myCar) {
	v = v + myCar[k] + " ";
}

// alert(v);



// Nested Objects
var user = {
	name: "Cristiano",
	age: "33",
	size: {
		top: 90,
		middle: 60,
		bottom: 90
	}
};

alert(user.name);
alert(user.size.top);






