// Get the input, button, and message elements from the page
let nameInput = document.getElementById("nameInput");
let welcomeBtn = document.getElementById("welcomeBtn");
let welcomeMsg = document.getElementById("welcomeMsg");

// When the button is clicked, show a personalized message
welcomeBtn.onclick = function() {
  // Get the value entered by the user
  let userName = nameInput.value;

  // Check if the user entered a name
  if (userName !== "") {
    // Show a fun personalized message using string concatenation
    welcomeMsg.textContent = "Welcome, " + userName + "! 🎉 Glad to have you here!";
  } else {
    // If no name is entered, ask the user to enter their name
    welcomeMsg.textContent = "Please enter your name above!";
  }

  // Clear the input field after clicking the button
  nameInput.value = "";
};
