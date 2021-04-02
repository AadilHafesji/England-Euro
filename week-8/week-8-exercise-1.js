// create our data
var planets = [
  'Mercury',
  'Venus',
  'Earth',
  'Mars',
  'Jupiter',
  'Saturn',
  'Nepture',
  'Uranus',
  'Pluto'
];

// create the function to add the planet to the page
function addPlanetToPage(planetName) {
  // create a new element
  var planetElement = document.createElement("li");
  planetElement.textContent = planetName;

  // Adding a class
  planetElement.classList.add("planet");

  // add the new element to the page
  var planetListElement = document.querySelector(".planets");
  planetListElement.appendChild(planetElement);
}

// add all planets
planets.forEach(addPlanetToPage);

// Adding count of planets to Span element
var planetCountElement = document.querySelector(".planet-count");
planetCountElement.textContent = planets.length;