// Get the navigation bar from the Home page
// Get the footer from the Home page
$('#hamburgerMenu').load('../home.html #hamburgerMenu');
$('#nav').load('../home.html #navBar');
$('#topOfPage').load('../home.html a#topOfPage');
$('#footer').load('../home.html footer#footer');

function backToTop() {
  // window.scroll({ top: 2500, left: 0, behavior: 'smooth' });
  window.scroll({ top: 0, left: 0, behavior: 'smooth' });
}

// Heading Titles
var goalkeepersHeading = "Goalkeepers";
var defendersHeading = "Defenders";
var midfieldersHeading = "Midfielders";
var forwardsHeading = "Forwards";

// Add the headings to the H2 tag
var goalkeepers = document.querySelector(".goalkeepers-heading");
goalkeepers.textContent = goalkeepersHeading;

var defenders = document.querySelector(".defenders-heading");
defenders.textContent = defendersHeading;

var midfielders = document.querySelector(".midfielders-heading");
midfielders.textContent = midfieldersHeading;

var forwards = document.querySelector(".forwards-heading");
forwards.textContent = forwardsHeading;

// API Key 
var apiKey = 'b90c3dfea1msh736c28e757556c9p13ac16jsnf8207deb75f7';
var host = 'api-football-v1.p.rapidapi.com';

var playerInfoTemplate = document.querySelector('#player-info').innerHTML;
var renderPlayerInfo = Handlebars.compile(playerInfoTemplate);

// Function the fetch data needed from API
function requestSquad(team, season) {
  fetch(`https://${host}/v3/players?team=${team}&season=${season}`, {
    headers: {
      'x-rapidapi-key': apiKey,
      'x-rapidapi-host': host
    }
  })
  .then((response) => response.json())
  .then((data) => data.response.forEach(inputPlayers))
  .catch((error) => console.error('Error:', error));
}

// Function to geth the England team by ID (10) and the most current squad by Year (2020)
function requestEnglandSquad() {
  requestSquad(10, 2020);
}

// Function to place players under the correct headings
function inputPlayers(data) {
  console.log(data);
  // If the data response has Goalkeepers then place them with the HTML that has the class .goalkeepers
  // And render their information from the response of data.player
  // Then add the needed data to the HTML
  if (data.statistics[0].games.position == 'Goalkeeper') {
    var players = document.querySelector(".goalkeepers");
    var playerData = renderPlayerInfo(data.player);
    players.append(document.createRange().createContextualFragment(playerData));
  }

  if (data.statistics[0].games.position == 'Defender') {
    var players = document.querySelector(".defenders");
    var playerData = renderPlayerInfo(data.player);
    players.append(document.createRange().createContextualFragment(playerData));
  }

  if (data.statistics[0].games.position == 'Midfielder') {
    var players = document.querySelector(".midfielders");
    var playerData = renderPlayerInfo(data.player);
    players.append(document.createRange().createContextualFragment(playerData));
  }

  if (data.statistics[0].games.position == 'Attacker') {
    var players = document.querySelector(".forwards");
    var playerData = renderPlayerInfo(data.player);
    players.append(document.createRange().createContextualFragment(playerData));
  }
}

// Function to search for players
function searchPlayers() {
  // User input should be in the input box with the ID of playerSearch
  // Filter the input if charcters are upper and lower case
  // Check for the players that are within the DIV that has a class of squad-players-details
  var input = document.getElementById("playerSearch");
  var filter = input.value.toLowerCase();
  var nodes = document.getElementsByClassName('squad-players-details');

  // For Loop to check if player is on page
  // If player is present show the player which matches what has been inputted
  // Else don't show who does not match
  for (i = 0; i < nodes.length; i++) {
    if (nodes[i].innerText.toLowerCase().includes(filter)) {
      nodes[i].style.display = "block";
    } else {
      nodes[i].style.display = "none";
    }
  }
}

// Update on page load
requestEnglandSquad();
