// Assignment Code
var generateBtn = document.querySelector("#generate"); // ties JS variable to the HTML button

// Write password to the #password input
function writePassword() {
  window.alert("Let's make you a password!");
  // Set up variables to represent choice of character sets and password length
  var upper = 'N';
  var lower = 'N';
  var num = 'N';
  var special = 'N';
  var length = 0;

  // Prompt for character types to include in the password (lowercase, uppercase, numeric, and/or special characters)
  // Convert user input to upper case
  // Validate that at least one chracter set is chosen before moving on

  while (upper != 'Y' && lower != 'Y' && num != 'Y' && special != 'Y') {
    var upper = window.prompt('Does your password need uppercase characters? [Y/N]\nExamples: A, B, C', 'Y');
    upper = upper.toUpperCase();
    var lower = window.prompt('Does your password need lowercase characters? [Y/N]\nExamples: a, b, c', 'Y');
    lower = lower.toUpperCase();
    var num = window.prompt('Does your password need numeric characters? [Y/N]\nExamples: 1, 2, 3', 'Y');
    num = num.toUpperCase();
    var special = window.prompt('Does your password need special characters? [Y/N]\nExamples: !, %, $', 'Y');
    special = special.toUpperCase();
    if (upper != 'Y' && lower != 'Y' && num != 'Y' && special != 'Y') {
      window.alert('I need something to work with...\nPlease choose at least one character type.')
    }
  }

  // Prompt for length and validate that length is at least 8, no more than 128 characters
  while (length < 8 || length > 128) {
    var length = window.prompt('How long do you need the password to be?\nMust be at least 8 characters and no longer than 128.', '12');
  }

  // Generate the password:
  // Create arrays for each character type
  var upperList = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var lowerList = upperList.toLowerCase();
  var numList = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  var specialList =  ["!", "$", "%", "&", '"', "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", '\\', ']', '^', "`", "{", "|", "}", "~", '_'];

  // Make a combined array of the character sets user wants
  var combinedList = [];

  // Pick [length] # of elements from the combined array

  // var password = function generatePassword() { // function to generate password
  //   return "example"; 
  // };

  var passwordText = document.querySelector("#password"); // ties JS variable to the HTML text box
  var password = "example";
  passwordText.value = password; // puts output of generatePassword in the text box
};

// When button is clicked, call the writePassword function
generateBtn.addEventListener("click", writePassword);



