console.log("Project Last Updated on: 11/02/2021");

// Current Time
var currentTime = new Date().toUTCString();
console.log('Current Time: ', currentTime);

var a = 6;
var result = null;

// If variable a (6) is greater than 0 then the result is Positive
// Else the result is Not Positive
if (a > 0) {
  result = 'Positive';
} else {
  result = 'NOT Positive';
}
// Console Log the result variable
console.log(result);

var bestSuperHero = 'Batman';

// If the variable is Batman then console log Correct
// Else if it is Superman then console log Overpowered
// Else if it is Flash then console log Maybe
// Else console log This should be easy
if (bestSuperHero === "Batman") {
  console.log("Correct");
} else if (bestSuperHero === "Superman") {
  console.log("Overpowered");
} else if (bestSuperHero === "Flash") {
  console.log("Maybe");
} else {
  console.log("This should be easy");
}

// For variable button select the button tag
// For variable input select the input tag
var button = document.querySelector('button');
var input = document.querySelector('input');
var answer = 66;

// For variable answerText select the answer class
var answerText = document.querySelector('.answer');
var c = 'Correct';
var a = 'Incorrect';

// When the button is clicked perform a function
button.onclick = function() {
  // If the inputted value in the input does not equal to the answer variable
  // Then console log INCORRECT
  // Show an alert
  // Replace the pre-set text to the one with the variable a
  // Replace the .answer class with the class incorrectAnswer
  if (input.value != answer) {
    console.log('INCORRECT');
    alert('Your answer is INCORRECT');
    answerText.textContent = a;
    answerText.classList.add("incorrectAnswer");
  } else {
    // Else
    // Console log CORRECT
    // Show an alert
    // Replace the pre-set text to the one with the variable c
    // Replace the .answer class with the class correctAnswer
    console.log('CORRECT');
    alert('Your answer is CORRECT');
    answerText.textContent = c;
    answerText.classList.add("correctAnswer");
  }
}

// Array of Strings
var batmanQuotesArray = [ 
  "It’s not who I am underneath, but what I do that defines me.",
  "Bats frighten me. It’s time my enemies share my dread.",
  "Perhaps the knife was too slow.",
  "Tell me where the trigger is, then you have my permission to die.",
  "You’ll hunt me. You’ll condemn me. Set the dogs on me. Because that’s what needs to happen. Because sometimes truth isn’t good enough. Sometimes people deserve more. Sometimes people deserve to have their faith rewarded.",
  "I’m whatever Gotham needs me to be.",
  "I won’t kill you, but I don’t I have to save you.",
  "A hero can be anyone, even a man doing something as simple and reassuring as putting a coat on a young boy’s shoulders to let him know the world hadn’t ended.",
  "That wasn’t exactly what I had in mind when, uh, I said I wanted to inspire people.",
  "This city just showed you that it’s full of people ready to believe in good.",
  "I'm Vengence"
]

// For this variable return the integer that is less than or equal to the Array
// Then return a number multiplied by the length of the Array
var generateQuote = batmanQuotesArray[Math.floor(Math.random() * batmanQuotesArray.length)];

// For the variable select the quotes class
// And add the quotes to the .quotes class span
var quoteGenerator = document.querySelector(".quotes");
quoteGenerator.textContent = generateQuote;

var currentIndex = 0;
// Get the tag that has an ID of quotes
var spanText = document.getElementById('quotes');

// Call the function at a specified time to the show the quotes
setInterval(() => {
  // Indent the ID so that it goes on continuously 
  spanText.innerHTML =  batmanQuotesArray[currentIndex++];
  
  // If the index equals to the length
  // Then start from 0
  if (currentIndex == batmanQuotesArray.length) {
    currentIndex = 0;
  }
  console.log(spanText.innerHTML);
}, 2000);
// 2000 is 2 seconds