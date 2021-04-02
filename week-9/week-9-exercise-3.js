// Personal API Key
var apiKey = 'e15a88f2c93c40a6afe00e261a22ef75';

function requestTopScorers() {
  fetch('https://api.football-data.org/v2/competitions/PL/scorers', {
    headers: {
      'X-Auth-Token': apiKey,
    }
  })
  .then((response) => response.json())
  .then((data) => {
    console.log('Data: ', data);

    // Use the data from API to fill in table
    createTable(data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}

function createTable(data) {
  // Iterate over the Array (data.scorers) and pass data to function from object
  data.scorers.forEach(({player, team, numberOfGoals}) => createPlayerTable(player, team, numberOfGoals)); 
}

function createPlayerTable(player, team, numberOfGoals) {
  var playerElement = document.createElement("tr");

  addTeamData(player.name, playerElement);
  addTeamData(team.name, playerElement);
  addTeamData(player.position, playerElement);
  addTeamData(player.nationality, playerElement);
  addTeamData(numberOfGoals, playerElement);

  var tableElement = document.querySelector("tbody");
  tableElement.appendChild(playerElement);
}

// add each individual piece of team data
function addTeamData(data, element) {
  var td = document.createElement("td");
  td.textContent = data;
  element.appendChild(td);
}

function findPlayer() {
  var input, filter, tbody, tr, td, txtValue;

  input = document.getElementById("search");
  filter = input.value.toUpperCase();
  tbody = document.getElementById("tableBody");
  tr = tbody.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (var i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td");
    for (var x = 0; x < td.length; x++)
    {
      let tdata = td[x];
      if (tdata) {
        if (tdata.innerHTML.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
          break; 
        } else {
          console.log("A")
          tr[i].style.display = "none";
        }
      } 
    }
  }
}

// update on page load
requestTopScorers();
