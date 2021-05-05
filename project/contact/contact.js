// Get the navigation bar from the Home page
// Get the footer from the Home page
$('#hamburgerMenu').load('../home.html #hamburgerMenu');
$('#nav').load('../home.html #navBar');
$('#footer').load('../home.html footer#footer');

var text = "When and where is it, who's playing who, how will it work and how can you be there?" + " <br> " + "The objective of this website is for you find out more information about the England football teams journey to the UEFA Euro Championships.";
var planetElement = document.createElement("p");
var container = document.querySelector("#aboutUs");
planetElement.innerHTML = text;
container.appendChild(planetElement);

var user = [
  countrySelectedOne = "",
  countrySelectedTwo = "",
  firstName = "",
  lastName = "",
  email = "",
  mobileNumber = "",
  subject = "",
  description = ""
]

var button = document.getElementById("submitButton");

function verifyForm() {
  user.countrySelectedOne = document.querySelector("#countrySupport").value;
  user.countrySelectedTwo = document.querySelector("#otherCountry").value;
  user.firstName = document.querySelector("#firstName").value;
  user.lastName = document.querySelector("#lastName").value;
  user.email = document.querySelector("#emailAddress").value;
  user.mobileNumber = document.querySelector("#mobileNumber").value;
  user.subject = document.querySelector("#subject").value;
  user.description = document.querySelector("#description").value;
  
  if (user.firstName === "") {
    button.disabled = true;
  } else if (user.lastName === "") {
    button.disabled = true;
  } else if (user.email === "") {
    button.disabled = true;
  } else if (user.subject === "") {
    button.disabled = true;
  } else if (user.description === "") {
    button.disabled = true;
  } else {
    button.disabled = false;
  }
}

// Show alert after button click
function alertUser() {
  JSAlert.confirm("Email has been Sent.").then(function(result) {
    // Check if pressed Ok
    if (!result) {
      return;
    }
    
    // User pressed Ok!
    // Reload page
    window.location.reload();
  });
}

// Function to prevent users from selecting duplicate options from dropdown
var countrySupport = select = document.getElementById('countrySupport');
var otherCountry = select = document.getElementById('otherCountry');

// Personal API Key
var apiKey = 'e15a88f2c93c40a6afe00e261a22ef75';

// Fetch all the countries
function requestCountries() {
  fetch('https://api.football-data.org/v2/competitions/2018/teams', {
    headers: {
      'X-Auth-Token': apiKey,
    }
  })
  .then((response) => response.json())
  .then((data) => {
    console.log('Data: ', data);
    countriesArray(data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}

// Placed the fetched countries into the dropdown menu as options so that they can be selected
function countriesArray(data) {
  // console.log(data.teams);
  for(var i = 0; i < data.teams.length; i++) {
    // console.log(data.teams[i].name);
    var optionTeamName = data.teams[i].name;
    var teamElements = document.createElement("option");
    teamElements.textContent = optionTeamName;
    teamElements.value = optionTeamName;
    countrySupport.appendChild(teamElements);
  }

  for(var i = 0; i < data.teams.length; i++) {
    var optionTeamName = data.teams[i].name;
    var teamElements = document.createElement("option");
    teamElements.textContent = optionTeamName;
    teamElements.value = optionTeamName;
    otherCountry.appendChild(teamElements);
  }
}

requestCountries();

// Function so not allow users to select the same country in two different dropdowns
function preventDuplicates(select, index, country) {
  var options = select.options;
  len = options.length;
  while(len--) {
    options[len].disabled = false;
  }
  select.options[index].disabled = true;
}

countrySupport.onchange = function() {
  preventDuplicates.call(this, otherCountry, this.selectedIndex);
};

otherCountry.onchange = function() {
  preventDuplicates.call(this, countrySupport, this.selectedIndex);
};
