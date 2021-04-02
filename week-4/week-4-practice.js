var name = prompt('What is your name?');

var promptName = document.querySelector(".userEnteredName");
promptName.textContent = name;

var age = prompt('What is your age?');

var promptAge = document.querySelector(".userEnteredAge");
promptAge.textContent = age;

console.log('%c Stop ', ' color: red; font-size:28px;');
console.log('%c How Dare You Access MY CONSOLE!!! ', ' color: blue; font-size:20px;');

var marvelHeros = [
  "Wolverine", 
  "Spider-Man", 
  "Thor", 
  "Iron Man", 
  "Hulk", 
  "Captain America",
  "Daredevil",
  "Punisher",
  "Deadpool"
];
var text = "";

for (var i = 0; i < marvelHeros.length; i++) {
  text += marvelHeros[i] + "<br>";
}
document.getElementById("facts").innerHTML = text;

// Adding Image
var img = document.createElement("img");
img.src = "../week-4/deadpool-wolverine.jpg";
var src = document.getElementById("image");
src.appendChild(img);