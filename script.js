// Write your JavaScript code here!

const validateInput = require("./scriptHelper");

window.addEventListener("load", function() {
    let form = document.querySelector("form");
      form.addEventListener("submit", function(event) {
         let pilotNameInput = document.querySelector("input[name=pilotName]");
         let coPilot = document.querySelector("input[name=copilotName]");
         let fuelLevel= document.querySelector("input[name=fuelLevel]");
         let cargoMass = document.querySelector("input[name=cargoMass]");
        validateInput.formSubmission

         //let test = validateInput;
         //validateInput.validateInput(pilotNameInput.value);
         /*
         if (pilotNameInput.value === "" || coPilot.value === "") {
            alert("All fields are required!");
         } else if (fuelLevel.value === "" || cargoMass.value === ""){
            alert("All fields are required!");
         }
         */
            event.preventDefault();
         });
      

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
   
});