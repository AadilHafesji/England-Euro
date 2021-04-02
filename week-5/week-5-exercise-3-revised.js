// Find the result class and update the text
function selectPlanet(planet) {
  var resultElement = document.querySelector(".result");
  resultElement.textContent = planet;

  console.log(resultElement.textContent);

  // Function that will be called when a button is selected
  incrementClickCounter();
}

// Start the counter from 0
var clickCounter = 0;

// Update the display when the counter has been clicked
function incrementClickCounter() {
  clickCounter = clickCounter + 1;

  var clickElement = document.querySelector(".click-count");
  clickElement.textContent = clickCounter;
}

// Functions to be used each time a button is clicked
function selectMercury() {
  selectPlanet("Mercury");
}

function selectVenus() {
  selectPlanet("Venus");
}

function selectEarth() {
  selectPlanet("Earth");
}

// Event listeners for each button
var mercuryButton = document.querySelector(".mercury");
mercuryButton.addEventListener("click", selectMercury);

var venusButton = document.querySelector(".venus");
venusButton.addEventListener("click", selectVenus);

var earthButton = document.querySelector(".earth");
earthButton.addEventListener("click", selectEarth);
