// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var length = prompt("What length would you like your password to be?");
  console.log(length);
  if (length < 8 || length > 128) {
    alert("Password must be between 8 and 128 characters");
    generatePassword();
  }

  else {var lcCharacters = prompt('Would you like to use lowercase letters? Enter "YES" or "NO" to choose.')

  if (lcCharacters) {}

  else {var ucCharacters = prompt("Would you like to use uppcercase letters?")}

  if (ucCharacters) {}

  else {var numCharacters = prompt("Would you like to use numeric characters?")}

  if (numCharacters) {}

  else {var sCharacters = prompt("Would you like to use special characters?")}
};

  return "password";
}

//Asking if they want lower case, upper case, numeric, and/or special characters in the password

//Lower case letters
function lowercaseCharacters () {
  const lcCharacters = Array('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z');
}

//Upper case letters
function uppercaseCharacters () {
  const lcCharacters = Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
}


//Numeric characters
function numericCharacters () {
  const lcCharacters = Array('0', '1', '2', '3', '4', '5', '6', '7', '8', '9');
}


//Special characters
function specialCharacters () {
  const lcCharacters = Array('!', '@', '#', '$', '%', '^', '&', '*', '+', '=', '?');
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
