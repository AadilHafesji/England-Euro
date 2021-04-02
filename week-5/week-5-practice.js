// Array of user
// Contains object which can be called like user.firstName
var user = [
  firstName = "",
  lastName = "",
  email = "",
  mobileNumber = "",
  subject = "",
  description = ""
]

// Validate form function
function checkForm(form) {
  var paragraphElement = document.querySelector(".submitted-text");
  
  // Get the value of the input from the ID
  user.firstName = document.querySelector("#firstName").value;
  console.log(user.firstName);

  user.lastName = document.querySelector("#lastName").value;
  console.log(user.lastName);

  user.email = document.querySelector("#emailAddress").value;
  user.mobileNumber = document.querySelector("#mobileNumber").value;
  user.subject = document.querySelector("#subject").value;
  user.description = document.querySelector("#description").value;

  // Variable for the mobile number
  var mobile = user.mobileNumber;

  // Show Hello firstName and lastName in H3 of HTML on if something is entered
  if(user.firstName && user.lastName != "") {
    paragraphElement.textContent = "Hello " + user.firstName + " " + user.lastName;
  } else if(user.firstName || user.lastName == "") {
    alert("Please Enter Either your First Name or Last Name");
  }
  
  // If any of the inputs are empty show an alert
  // If the mobile number is empty that is fine
  // Else if the mobile number length is less than and equal to 10 or greater than and eqial to 12 show an error alert
  // Else number is fine
  if(user.email == "") {
    alert("Please Enter your Email");
  } else if(user.subject == "") {
    alert("Please Enter a Subject Title");
  } else if(user.description == "") {
    alert("Please Write a Description");
  } else if(mobile == "") {
    alert("No Mobile Number Entered. That is fine.");

    // Log entire array
   console.log("Array: ", user);
  } else if (mobile.length <= 10 || mobile.length >= 12) {
    alert("Invalid number; must be ELEVEN digits");
    console.log(mobile.length);
  } else {
    alert("Number is fine");
    
    // Log entire array
    console.log("Array: ", user);
  }
}

var buttonElement = document.querySelector(".submit-button");
buttonElement.addEventListener("click", checkForm);
