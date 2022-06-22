// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var password = [];
  var chosenCharacters = [];
  var passwordLength = prompt("What length would you like your password to be?");
  console.log(passwordLength);
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password must be between 8 and 128 characters");
    generatePassword();
  }

var lcCharacters = window.confirm('Would you like to use lowercase letters?')

  if (lcCharacters) {
    chosenCharacters.push(lowercaseCharacters);
    console.log(chosenCharacters);
  }

var ucCharacters = window.confirm('Would you like to use uppcercase letters?')

  if (ucCharacters) {
    chosenCharacters.push(uppercaseCharacters);
    console.log(chosenCharacters);
  }

var numCharacters = window.confirm('Would you like to use numeric characters?')

  if (numCharacters) {
    chosenCharacters.push(numericCharacters);
    console.log(chosenCharacters);
  }

var sCharacters = window.confirm('Would you like to use special characters?')

  if (sCharacters) {
    chosenCharacters.push(specialCharacters);
    console.log(chosenCharacters);
  }

for (let i = 0; i < passwordLength; i++) {
  var randomCharacter = Math.floor(Math.random() * chosenCharacters.length);

  if (randomCharacter === 0) {
    password.push(chosenCharacters[0]); 
  } else if (randomCharacter === 1) {
    password.push(chosenCharacters[1]);   
  } else if (randomCharacter === 2) {
    password.push(chosenCharacters[2]); 
  } else if (randomCharacter === 3) {
    password.push(chosenCharacters[3]); 
  }
}

  return "password";

};

//Asking if they want lower case, upper case, numeric, and/or special characters in the password

//Lower case letters
function lowercaseCharacters () {
  var lcCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var chosenLowercase = Math.floor(Math.random() * lcCharacters.length);
  console.log(lcCharacters[chosenLowercase]);
  return lcCharacters[chosenLowercase];
}

//Upper case letters
function uppercaseCharacters () {
  var ucCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
}


//Numeric characters
function numericCharacters () {
  var numCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
}


//Special characters
function specialCharacters () {
  var specCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '+', '=', '?'];
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);