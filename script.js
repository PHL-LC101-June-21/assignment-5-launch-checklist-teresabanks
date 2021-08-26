// Write your JavaScript code here!

// const hamSandwich = require("./scriptHelper");
window.addEventListener("load", function() {
    let form = document.querySelector("form");
      form.addEventListener("submit", function(event) {
         event.preventDefault();
         let pilot = document.querySelector("input[name=pilotName]");
         let coPilot = document.querySelector("input[name=copilotName]");
         let fuelLevel= document.querySelector("input[name=fuelLevel]");
         let cargoMass = document.querySelector("input[name=cargoMass]");
         let list = document.querySelector("#faultyItems");
         formSubmission(document, list, pilot.value, coPilot.value, fuelLevel.value, cargoMass.value)

            
         });
      

   let listedPlanets;
   
   let listedPlanetsResponse= myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       let planet = pickPlanet(listedPlanets);

       addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.imageUrl)
   })
   
});