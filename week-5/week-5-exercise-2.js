function addColourToPlanet(planetSelector, planetName, colour) {
  console.log("You have called addColourToPlanet() with the following parameters");
  console.log(planetSelector, planetName, colour);
  
  var planetElement = document.querySelector(planetSelector);
  planetElement.textContent = planetName;
  planetElement.classList.add(colour);
}

// call the function to style Mercury
addColourToPlanet(".mercury", "Mercury", "orange");

// call the function to style Venus
addColourToPlanet(".venus", "Venus", "green");

// call the function to style Earth
addColourToPlanet(".earth", "Earth", "blue");
