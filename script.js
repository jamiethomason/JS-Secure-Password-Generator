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
  return "password";
}

//Asking if they want lower case, upper case, numeric, and/or special characters in the password

function specialCharacters () {

//Lower case letters
  const lcCharacters = Array('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z');
  var lcCharacters = prompt("Would you like to use lowercase letters?");
  console.log(lcCharacters);

//Upper case letters
  var ucCharacters = prompt("Would you like to use uppcercase letters?");
  console.log(ucCharacters);

//Numeric characters
  var numCharacters = prompt("Would you like to use numeric characters?");
  console.log(numCharacters);

//Special characters
  var sCharacters = prompt("Would you like to use special characters?");
  console.log(sCharacters);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
