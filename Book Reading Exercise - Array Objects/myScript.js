// Coding Exercise: Book Reading Status
document.write("Books <br>")

var myBooks = [
		{ 
			title: "Annihilation", 
			author: "Jeff Vandermeer", 
			readingStatus: true
		},
		{ 
			title: "Authority", 
			author: "Jeff Vandermeer", 
			readingStatus: false
		},
		{ 
			title: "Acceptance", 
			author: "Jeff Vandermeer", 
			readingStatus: false
		}];

// loop through myBooks object properties & get the reading status
for ( var i = 0; i < myBooks.length; i++ ) {  
    
     var book = "'" + myBooks[i].title + "'" + " by " + myBooks[i].author + ".";  
    
     if (myBooks[i].readingStatus) {  
     
       document.write("Already read " + book + " <br><br>");  
    
       
    } else {  
     
      
      document.write("Still need to read " + book + " <br><br>");    
    
      
    }
}



document.write("<br><br> Cars <br>")
// Example 2
var myCars = [
		{ 
			make: "Honda", 
			model: "Accord", 
			ownedStatus: true
		},
		{ 
			make: "Jeep", 
			model: "Liberty", 
			ownedStatus: true
		},
		{ 
			make: "Subaru", 
			model: "Impreza", 
			ownedStatus: true
		},
		{
			make: "Toyota", 
			model: "Tacoma", 
			ownedStatus: false
		},
		{
			make: "Tesla", 
			model: "Model 3", 
			ownedStatus: false
		}];

// loop through myBooks object properties & get the reading status
for ( var i = 0; i < myCars.length; i++ ) {  
    
     var model = "'" + myCars[i].model + "'" + " by " + myCars[i].make + ".";  
    
     if (myCars[i].ownedStatus) {  
     
       document.write("Already owned " + model + " <br><br>");  
    
       
    } else {  
     
      
      document.write("Possible next car " + model + " <br><br>");    
    
      
    }
}







