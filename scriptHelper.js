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
    }

    let form = document.querySelector("form");
    /*
    form.addEventListener("submit", function(event) {
        let pilotNameInput = document.querySelector("input[name=pilotName]");
        let pilotName = pilotNameInput.value
        let coPilotInput = document.querySelector("input[name=copilotName]");
        let coPilot = coPilotInput.value
        let fuelLevelInput= document.querySelector("input[name=fuelLevel]");
        let fuelLevel = fuelLevelInput.value
        let cargoMassInput = document.querySelector("input[name=cargoMass]");
        let cargoMass = cargoMassInput.value
    })
    */
    return 
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   
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
