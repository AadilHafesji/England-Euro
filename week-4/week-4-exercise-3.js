// get the current time, but only the seconds
var seconds = new Date().getSeconds();
console.log(seconds);

// add the current time to the page
var timeElement = document.querySelector(".time");
timeElement.textContent = seconds;

// If less than 20 seconds turn orange
// Else If greater than 20 and less than 40 turn green
// Else turn blue
if (seconds < 20) {
  timeElement.classList.add("orange");
  console.log('orange');
} else if (seconds > 20 && seconds < 40) {
  timeElement.classList.add("green");
  console.log('green');
} else {
  timeElement.classList.add("blue");
  console.log('blue');
}