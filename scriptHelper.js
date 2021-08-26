// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let missionTarget = document.getElementById("missionTarget");
    missionTarget.innerHTML =
                 `<h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name} </li>
                     <li>Diameter: ${diameter} </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance} </li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src="${imageUrl}">`
    
}

function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(testInput)) {
        return "Not a Number"
    } else {
        return "Is a Number"
    };

};

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {
    let validPilotInput = validateInput(pilot);
    let validCopilotInput = validateInput(copilot);
    let validFuelLevel = validateInput(fuelLevel);
    let validCargoLevel = validateInput(cargoMass);

    if (validPilotInput === "Empty" || validCopilotInput === "Empty" ||
        validFuelLevel === "Empty" || validCargoLevel === "Empty") {
        return alert("All fields are required!");
    }
    else if (validFuelLevel === "Not a Number" || validCargoLevel === "Not a Number") {
        return alert("Enter Valid Information for Each Field");
    } 

    list.style.visibility = "visible";
    document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`;
    document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch`;

    if (fuelLevel < 10000){
        document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
        document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
        document.getElementById("launchStatus").style.color = "rbg(199,37,78";
        
    }
    
    if (cargoMass > 10000){
        document.getElementById("cargoStatus").innerHTML = "Cargo mass too high for launch";
        document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
        document.getElementById("launchStatus").style.color = "rbg(199,37,78)";
    } 
    
    if (cargoMass < 10000 && fuelLevel > 10000){
        document.getElementById("launchStatus").style.color = "green";
        document.getElementById("launchStatus").innerHTML = "Shuttle is Ready for Launch";
        document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch"
        document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch"
    }
    }

    






async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
        let result = response.json();
        return result;
    });

    return planetsReturned;
}


function pickPlanet(planets) {
    return planets[Math.floor(Math.random()*planets.length)];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
