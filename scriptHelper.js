// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
    if (testInput === ""){
        return "Empty";
    } else if (isNaN(testInput)){
        return "Not a Number"
    } else {
        return "Is a Number"
    };
    
};

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   let validPilotInput = validateInput(pilot);
   let validCopilotInput = validateInput(copilot);
   let validFuelLevel = validateInput(fuelLevel);
   let validCargoLevel = validateInput(cargoLevel);
   
   if(validPilotInput === "Empty" || validCopilotInput === "Empty" ||
      validFuelLevel === "Empty" || validCargoLevel === "Empty"){
    return alert("All fields are required!");
   }
   else if (validFuelLevel === "Not a Number" || validCargoLevel === "Not a Number"){
       return alert("Enter Valid Information for Each Field");
   }
 
list.style.visibility = "visible";
document.getElementById("pilotStatus").innerHTML = `Pilot ${validPilotInput} is ready for Launch`;
document.getElementById("copilotStatus").innerHTML = `Copilot ${validCopilotInput} is ready for Launch`;
 }
 }


   

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}


function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
