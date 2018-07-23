// Find My Age Calculator

function calculateAge(birthYear, currentYear) {

		var age = currentYear - birthYear
		document.write("Your age is either " + age + " or " + (age - 1));
	}

	calculateAge(1988, 2018);

document.write("<br>");



// Example
function calculateGoals(goalsMexico, goalsGermany) {

	var goals = goalsGermany - goalsMexico
	document.write("Mexico lost to Germany in 2014 World Cup due to a goal difference of " + goals);
}

calculateGoals(1, 2);
document.write("<br>");



// Example 
function calculateChampion(winsCavs, winsWarriors) {

	var champion = winsWarriors - winsCavs
	document.write("Cavs lose to Warriors in a " + champion + " game series sweep.");
}

calculateChampion(0, 4);