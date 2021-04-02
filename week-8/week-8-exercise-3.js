var planets = [
  {
    name: "Mercury",
    circumference: "2,500 km",
    distanceFromSun: "57,000,000 km",
  },
  {
    name: "Venus",
    circumference: "28,000 km",
    distanceFromSun: "108,000,000 km",
  },
  {
    name: "Earth",
    circumference: "40,000 km",
    distanceFromSun: "150,000,000 km",
    landInformation: "29% of Earth's surface is land",
    waterInformation: "71% is covered with water"
  },
  {
    name: "Mars",
    circumference: "21,000 km",
    distanceFromSun: "227,000,000 km",
  },
  {
    name: "Jupiter",
    circumference: "779,000,000 km",
    distanceFromSun: "440,000 km",
  },
  {
    name: "Saturn",
    circumference: "1,430,000,000 km",
    distanceFromSun: "365,000 km",
  },
  {
    name: "Uranus",
    circumference: "2,880,000,000 km",
    distanceFromSun: "160,000 km",
  },
  {
    name: "Neptune",
    circumference: "4,500,000,000 km",
    distanceFromSun: "154,000 km",
  },
];

function addPlanetToPage(planet) {
  // create a div element for each element
  var planetElement = document.createElement("div");
  planetElement.classList.add("planet");
  planetElement.classList.add("planet-" + planet.name);

  // add the planet name
  var planetName = document.createElement("p");
  planetName.classList.add("planet-name");
  planetName.textContent = planet.name;
  planetElement.appendChild(planetName);

  // add other planet details
  var planetCircumference = document.createElement("p");
  planetCircumference.classList.add("planet-circumference");
  planetCircumference.textContent = "Circumference: " + planet.circumference;
  planetElement.appendChild(planetCircumference);

  var planetDistance = document.createElement("p");
  planetDistance.classList.add("planet-distance");
  planetDistance.textContent = "Distance from sun: " + planet.distanceFromSun;
  planetElement.appendChild(planetDistance);

  var planetLandInformation = document.createElement("p");
  planetLandInformation.classList.add("planet-landInformation");
  planetLandInformation.textContent = planet.landInformation;
  planetElement.appendChild(planetLandInformation);

  var planetWaterInformation = document.createElement("p");
  planetWaterInformation.classList.add("planet-waterInformation");
  planetWaterInformation.textContent = planet.waterInformation;
  planetElement.appendChild(planetWaterInformation);

  // add the planet to the page
  var planetListElement = document.querySelector(".planets");
  planetListElement.appendChild(planetElement);
}

planets.forEach(addPlanetToPage);