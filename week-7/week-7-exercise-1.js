// retrieve all planet elements
var planetElements = document.querySelectorAll(".planet");

var testElements = document.querySelectorAll(".test");

// use this function to add the class to each planet
function updatePlanet(planetElement) {
  // planetElement.classList.add("blue");

  planetElement.classList.add("orange");
}

planetElements.forEach(updatePlanet);

function updateTest(testElement) {
  testElement.classList.add("blue");
}

testElements.forEach(updateTest);

// loop through the planet elements
// for (var counter = 0; counter < planetElements.length; counter++) {
//   var planetElement = planetElements[counter];
//   updatePlanet(planetElement);
// }
