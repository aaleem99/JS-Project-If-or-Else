var city= prompt("Enter Your City Name(in small case)");

if (city=="karachi") {
    console.log("City of Lights")
    
} else {
    console.log("The City name is not defined")
    
}


//Geneder

var Gender= prompt("Enter Your Gender(in small case)");

if (Gender=="male") {
    console.log("Good Morning Sir")
    
    
} else if (Gender=="female"){
    console.log("Good Morning Madam")
    
}
//signalColor
var Color= prompt("Enter color of road traffic signal(in small case)");

if (Color=="red") {
    console.log("Must Stop ")
    
    
} else if (Color=="yellow"){
    console.log("Ready to move")
    
}

else if (Color=="green"){
    console.log("Move now")
    
}

//Fuel
var Fuel= prompt("Enter your Fuel Qty(in numbers)");
if (Fuel <="0.25") {
    console.log("Please Refil your Fuel")
} else {
    console.log("Refil is not required")
}