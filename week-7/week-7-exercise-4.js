// add a listener to buttons
var planetButtonElements = document.querySelectorAll(".planet-button");
planetButtonElements.forEach(addPlanetButtonListener);

function addPlanetButtonListener(planetButtonElement) {
  planetButtonElement.addEventListener("click", planetButtonClick);
}

function planetButtonClick(event) {
  var clickedButton = event.currentTarget;

  // generate the class of the selected planet's details element
  // for example: ".planet-details-Venus" or ".planet-details-Earth"
  var detailsElementCssSelector = ".planet-details-" + clickedButton.textContent;

  // find this element
  var detailsElement = document.querySelector(detailsElementCssSelector);

  // remove selected state from all buttons
  planetButtonElements.forEach(updateClickedButtonState);

  // remove selected state from all details elements
  var planetDetailElements = document.querySelectorAll(".planet-details");
  planetDetailElements.forEach(updatePlanetDetailState);

  // add selected state just to the clicked button
  detailsElement.classList.add("currently-selected-planet");
  clickedButton.classList.add("currently-selected-button");

  // update the log
  updateLog(clickedButton.textContent);
}

function updateClickedButtonState(planetButtonElement) {
  planetButtonElement.classList.remove("currently-selected-button");
}

function updatePlanetDetailState(planetDetailElement) {
  planetDetailElement.classList.remove("currently-selected-planet");
}

// Counter to see total amount of clicks
var clickCounter = 0;

function updateLog(planetName) {
  // get the current time
  var timeNow = new Date().toUTCString();

  // Increment
  clickCounter = clickCounter + 1;

  // create a new element
  var newListElement = document.createElement("li");
  var newListElementTwo = document.createElement("li");
    
  // add a class to the new element
  newListElement.classList.add("log-item");
  newListElementTwo.classList.add("loggg");
    
  // add the text content to the new element
  newListElement.textContent = timeNow + ": " + planetName + " clicked";
  newListElementTwo.textContent = "You have clicked: " + clickCounter + " number of times.";

  // add the new element to the HTML
  var logElement = document.querySelector(".log");
  logElement.appendChild(newListElement);

  var logElementTwo = document.querySelector(".log-two");
  logElementTwo.appendChild(newListElementTwo);
}