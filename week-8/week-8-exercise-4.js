var planets = [
  {
    name: "Mercury",
    circumference: "2,500 km",
    distanceFromSun: "57,000,000 km",
    link: "https://solarsystem.nasa.gov/planets/mercury/overview/"
  },
  {
    name: "Venus",
    circumference: "28,000 km",
    distanceFromSun: "108,000,000 km",
    link: "https://solarsystem.nasa.gov/planets/venus/overview/"
  },
  {
    name: "Earth",
    circumference: "40,000 km",
    distanceFromSun: "150,000,000 km",
    landInformation: "29% of Earth's surface is land",
    waterInformation: "71% is covered with water",
    link: "https://www.google.co.uk/intl/en_uk/earth/"
  },
  {
    name: "Mars",
    circumference: "227,000,000km",
    distanceFromSun: "21,000km",
    link: "https://solarsystem.nasa.gov/planets/mars/overview/"
  },
  {
    name: "Jupiter",
    circumference: "779,000,000km",
    distanceFromSun: "440,000km",
    link: "https://solarsystem.nasa.gov/planets/jupiter/overview/"
  },
  {
    name: "Saturn",
    circumference: "1,430,000,000km",
    distanceFromSun: "365,000km",
    link: "https://solarsystem.nasa.gov/planets/saturn/overview/"
  },
  {
    name: "Uranus",
    circumference: "2,880,000,000km",
    distanceFromSun: "160,000km",
    link: "https://solarsystem.nasa.gov/planets/uranus/overview/"
  },
  {
    name: "Neptune",
    circumference: "4,500,000,000km",
    distanceFromSun: "154,000km",
    link: "https://solarsystem.nasa.gov/planets/neptune/overview/",
    // image: "../week-4/deadpool-wolverine.jpg"
  }
];

function addPlanetToPage(planet) {
  // create a div element for each element
  var planetElement = document.createElement("p");
  // planetElement.href = planet.link;
  planetElement.classList.add("planet");
  planetElement.classList.add("planet-" + planet.name);

  // add the planet name
  var planetName = document.createElement("p");
  planetName.classList.add("planet-name");
  planetName.textContent = planet.name;
  planetElement.appendChild(planetName);

  if (planet.name == "Mercury") {
    planetName.innerText += " is a planet";
  }

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

  // Add links
  var planetLink = document.createElement("a");
  planetLink.classList.add("planet-link");
  planetLink.href = planet.link;
  planetLink.innerText = "Link Text";
  planetElement.appendChild(planetLink);

  // Add img
  var planetImage = document.createElement("img");
  planetImage.classList.add("planet-image");
  planetImage.src = planet.image;
  planetElement.appendChild(planetImage);

  // add the planet to the page
  var planetListElement = document.querySelector(".planets");
  planetListElement.appendChild(planetElement);
}

planets.forEach(addPlanetToPage);

// listen to changes in the search form
var searchInput = document.querySelector(".search");
searchInput.addEventListener("input", updateSearchValue);

// initial search value, which will be empty
var searchValue = "";

// check what search term has been entered
function updateSearchValue() {
  // trim() removes any spaces before/after the input
  // toLowerCase() makes the entered text lowercase
  searchValue = searchInput.value.trim().toLowerCase();
    
  console.log("You searched for: " + searchValue);

  // loop through all planet elements
  // show or hide each one based on the search term
  var planetElements = document.querySelectorAll(".planet");
  planetElements.forEach(showOrHidePlanet);
}

// every time the text field changes, run this
function showOrHidePlanet(planetElement) {
  // if no search value is set, show the planet
  if (searchValue.length === 0) {
    planetElement.classList.remove("hide");
  } else {
    var planetName = planetElement.querySelector(".planet-name").textContent.toLowerCase();
    
    if (planetName.includes(searchValue)) {
      planetElement.classList.remove("hide");
    } else {
      planetElement.classList.add("hide");
    }
  }
}