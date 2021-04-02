// Select the buttons
var mercuryButton = document.querySelector(".mercury");
var venusButton = document.querySelector(".venus");
var earthButton = document.querySelector(".earth");

// Event Listeners when you select the button
mercuryButton.addEventListener("click", selectMercury);
venusButton.addEventListener("click", selectVenus);
earthButton.addEventListener("click", selectEarth);

venusButton.addEventListener("click", selectVenus);
venusButton = document.querySelector("venus");

// Button Click Counter
// Start from 0
var clickCounter = 0;

// Function to update the text
function selectMercury() {
  var resultElement = document.querySelector(".result");
  resultElement.textContent = "Mercury";
  
  // Increment whenever clicked
  clickCounter = clickCounter + 1;
  
  var clickElement = document.querySelector(".click-count");
  clickElement.textContent = clickCounter;
  console.log('Mercury: ', clickCounter);
}

function selectVenus() {
  var resultElement = document.querySelector(".result");
  resultElement.textContent = "Venus";
  
  // Increment whenever clicked
  clickCounter = clickCounter + 1;

  var clickElement = document.querySelector(".click-count");
  clickElement.textContent = clickCounter;
  console.log('Venus: ', clickCounter);  
}

function selectEarth() {
  var resultElement = document.querySelector(".result");
  resultElement.textContent = "Earth";

  // Increment whenever clicked
  clickCounter = clickCounter + 1;

  var clickElement = document.querySelector(".click-count");
  clickElement.textContent = clickCounter;
  console.log('Earth: ', clickCounter);
}
