fetch('week-9-exercise-2.json')
  .then((response) => response.json())
  .then((data) => {
      console.log('Data: ', data);

    // loop through each planet object in the array,
    // and add them to the page
    data.forEach(addPlanetToPage);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

function addPlanetToPage(planet) {
  // create a new element for each planet
  var planetElement = document.createElement("div");
  // var planetElement = document.createElement("a");
  // planetElement.href = planet.url;
  planetElement.classList.add("planet");
  // planetElement.classList.add("planet-" + planet.name);
  planetElement.classList.add("planet-" + planet.class);

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

  // add planet image
  var planetImage = document.createElement("img");
  planetImage.classList.add("planet-image");
  planetImage.src = planet.image;
  planetImage.alt = "A photograph of the planet " + planet.name;
  planetElement.appendChild(planetImage);

  // add planet link
  var planetLink = document.createElement("a");
  planetLink.classList.add("planet-link");
  planetLink.href = planet.url;
  planetLink.textContent = "Read more about " + planet.name;
  planetElement.appendChild(planetLink);

  // add the planet to the page
  var planetListElement = document.querySelector(".planets");
  planetListElement.appendChild(planetElement);
}