// start the counter
var timeElement = document.querySelector(".time");
timeElement.textContent = "";

// For variable counter start from 1
// counter should be less than and equal to 10
// Increment the counter
for (var counter = 1; counter <= 10; counter++) {
  // Variable timeElement should be a string
  // The string should be the variable counter and add comma after each
  timeElement.textContent = timeElement.textContent + counter + ", ";
  console.log(counter);
}
