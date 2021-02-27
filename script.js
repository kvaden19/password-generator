// Assignment Code
var generateBtn = document.querySelector("#generate"); // ties JS variable to the HTML button

// Write password to the #password input
function generatePassword() {
  window.alert("Let's make you a password!");

  // Have user confirm character types to include in the password (lowercase, uppercase, numeric, and/or special characters)
  // Validate that at least one chracter set is chosen before moving on
  while (!upper && !lower && !num && !special) {
    var upper = window.confirm("Click OK to use uppercase characters.\nExamples: A, B, C");
    var lower = window.confirm("Click OK to use lowercase characters.\nExamples: a, b, c");
    var num = window.confirm("Click OK to use numeric characters.\nExamples: 1, 2, 3");
    var special = window.confirm("Click OK to use special characters.\nExamples: !, %, $");
    if (!upper && !lower && !num && !special) {
      window.alert("I need something to work with...\nPlease choose at least one character type.")
    }
  }

  var length = 0;
  // Prompt for length and validate that length is at least 8, no more than 128 characters
  while (length < 8 || length > 128 ) {
    length = window.prompt("How long do you need the password to be?\nMust be at least 8 characters and no longer than 128.", "12");
    if (isNaN(parseInt(length))) {
      window.alert("Please enter a number.");
      length = 0;
    }
    if (length === null) {
      break;
    }
  }

  // Generate the password:
  // Create arrays for each character type
  var upperList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; // 26 
  var lowerList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "x"]; // 26
  var numList = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]; // 10
  var specialList =  ["!", "$", "%", "&", "\"", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "`", "{", "|", "}", "~", "_"]; // 29

  // Choose the first few password characters from the individual character arrays. This ensures the random selection doesn't leave any character types out.
  // Make a combined array of the character sets user wants.
  var password = "";
  var combinedList = [];
  var x = 0;

  if (length == 0 || length == null) {
    password = "Your secure password";
  }
  
  else {
    if (upper) {
      var upperIndex = Math.floor(Math.random() * 26);
      password = password + upperList[upperIndex];
      x++;
      combinedList = combinedList.concat(upperList);
    }
    if (lower) {
      var lowerIndex = Math.floor(Math.random() * 26);
      password = password + lowerList[lowerIndex];
      x++;
      combinedList = combinedList.concat(lowerList);
    }
    if (num) {
      var numIndex = Math.floor(Math.random() * 10);
      password = password + numList[numIndex];
      x++;
      combinedList = combinedList.concat(numList);
    }
    if (special) {
      var specialIndex = Math.floor(Math.random() * 29);
      password = password + specialList[specialIndex];
      x++;
      combinedList = combinedList.concat(specialList);
    }

    // Pick the remaining elements from the combined array
    for (var i=x; i < length; i++) {
      var index = Math.floor(Math.random() * combinedList.length);
      password = password + combinedList[index];
    }
}

  var passwordText = document.querySelector("#password"); // ties JS variable to the HTML text box
  passwordText.value = password; // puts output of generatePassword in the text box
};

// When button is clicked, call the writePassword function
generateBtn.addEventListener("click", generatePassword);