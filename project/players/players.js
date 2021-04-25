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

function requestEnglandSquad() {
  requestSquad(10, 2020);
}

function inputPlayers(data) {
  console.log(data);
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

function searchPlayers() {
  var input = document.getElementById("playerSearch");
  var filter = input.value.toLowerCase();
  var nodes = document.getElementsByClassName('squad-players-details');

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
