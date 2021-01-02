// Assignment Code
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
//enter var functions that are used to generate password.
}

//Possible password parameters.
function getRandomLowerCase() {
  var passLowerCase = "qwertyuiopasdfghjklzxcvbnm";
  return passLowerCase[Math.floor(Math.random()*passLowerCase.length)];
}

function getRandomUpperCase() {
  var passUpperCase = ["QWERTYUIOPASDFGHJKLZXCVBNM"];
  return passUpperCase[Math.floor(Math.random()*passUpperCase.length)];
}

function getRandomNumber() {
  var passNumbers = ["1234567890"];
  return passNumbers[Math.floor(Math.random()*passNumbers.length)];
}

function getRandomSpecial() {
  var passSpecial = [" !#$%&'()*+,-./:;<=>?@[\]^_`{|}~"];
  return passSpecial[Math.floor(Math.random()*passSpecial.length)];
}



//User selects parameters.
var passLength = prompt("Select the length of your password by typing in a number between 8 and 128.");
  if ((passLength > "7") && (passLength < "129")) {
    console.log("You have selected your password to be " + passLength + " characters long.");
  }
  else {
    console.log("Please select appropriate number of characters for your password.");
  }

var charLower = confirm("Would like a lower case letter in your password?");
var charUpper = confirm("Would like an upper case letter in your password?");
var charNumber = confirm("Would like a number in your password?");
var charSpecial = confirm("Would like a special character in your password?");

//checks
console.log(passLength);
console.log(charLower);
console.log(charUpper);
console.log(charNumber);
console.log(charSpecial);

writePassword();


