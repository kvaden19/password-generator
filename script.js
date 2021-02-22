// Assignment Code
var generateBtn = document.querySelector("#generate"); // ties JS variable to the HTML button

// Write password to the #password input
function writePassword() {
  window.alert("Let's make you a password!");
    // Prompt for character types to include in the password (lowercase, uppercase, numeric, and/or special characters)
      // Validate for at least one
      var upper = window.prompt('Does your password need uppercase characters? [Y/N] \n Examples: A, B, C', 'Y');
      var lower = window.prompt('Does your password need lowercase characters? [Y/N] \n Examples: a, b, c', 'Y');
      var num = window.prompt('Does your password need numeric characters? [Y/N] \n Examples: 1, 2, 3', 'Y');
      var special = window.prompt('Does your password need special characters? [Y/N] \n Examples: !, %, $', 'Y');

    // Prompt for length (at least 8, no more than 128)
      // Validate
      var length = window.prompt('How long do you need the password to be? \n Must be at least 8 characters and no longer than 128.', '12');

    // Generate the password:
      // Create arrays for each character type
      var specialList =  ["!", "$", "%", "&", '"', "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", '\\', ']', '^', "`", "{", "|", "}", "~", '_'];

      // Concatenate arrays user wants
      // Pick # of elements from array depending on legnth

  // var password = function generatePassword() { // function to generate password
  //   return "example"; 
  // };

  var passwordText = document.querySelector("#password"); // ties JS variable to the HTML text box
  var password = "example";
  passwordText.value = password; // puts output of generatePassword in the text box
};

// When button is clicked, call the writePassword function
generateBtn.addEventListener("click", writePassword);



