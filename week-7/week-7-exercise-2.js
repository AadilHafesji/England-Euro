// find all button elements
var planetButtonElements = document.querySelectorAll(".planet-button");

// loop through all button elements
planetButtonElements.forEach(addPlanetButtonListener);

// add an event listener to each button element
function addPlanetButtonListener(planetButtonElement) {
  planetButtonElement.addEventListener("click", planetButtonClick);
}

// Alert Box
// on click, do something with the selected button
// function planetButtonClick(event) {
//   // find the HTML element that was clicked
//   var clickedButton = event.currentTarget;

//   // for now, just alert the answer
//   // (you'll change this line in a minute!)
//   alert("You clicked " + clickedButton.textContent);
// }

// Text in Results
// on click, do something with the selected button
function planetButtonClick(event) {
	// find the HTML element that was clicked
  var clickedButton = event.currentTarget;

  // update the result
  var resultElement = document.querySelector(".result");
  resultElement.textContent = "You selected " + clickedButton.textContent;

  console.log(clickedButton.textContent);

  // Add colour to result text
  resultElement.classList.add("resultsText");

  // remove selected state from all buttons
  planetButtonElements.forEach(updateClickedButtonState);

  // add selected state just to the clicked button
  clickedButton.classList.add("currently-selected-button");
}

// remove the currently selected state for all buttons
function updateClickedButtonState(planetButtonElement) {
  planetButtonElement.classList.remove("currently-selected-button");
}
