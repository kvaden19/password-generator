// Assignment Code
var generateBtn = document.querySelector("#generate"); // ties JS variable to the HTML button

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); // function to generate password, currently empty
    // Prompt for character types to include in the password (lowercase, uppercase, numeric, and/or special characters)
    // Validate for at least one
    // Prompt for length (at least 8, no more than 128)
    // Validate

    // Generate the password:
      // Create arrays for each character type
      // Concatenate arrays user wants
      // Pick # of elements from array depending on legnth

  var passwordText = document.querySelector("#password"); // ties JS variable to the HTML text box

  passwordText.value = password; // puts output of generatePassword in the text box
}

// When button is clicked, call the writePassword function
generateBtn.addEventListener("click", writePassword);
