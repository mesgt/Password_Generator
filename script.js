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

var passParameter = {
  LowerCase: "qwertyuiopasdfghjklzxcvbnm",
  UpperCase: "QWERTYUIOPASDFGHJKLZXCVBNM",
  Numbers: "1234567890",
  Special: "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~",
}

function generatePassword() {
  var pLength = prompt("Select the length of your password by typing in a number between 8 and 128.");
  if ((pLength < 8) || (pLength > 128)) {
    alert("Please select appropriate number of characters for your password.");
    return;
  }
  else {
    alert("You have selected your password to be " + pLength + " characters long.");
    var charLower = confirm("Would like a lower case letter in your password?");
    var charUpper = confirm("Would like an upper case letter in your password?");
    var charNumber = confirm("Would like a number in your password?");
    var charSpecial = confirm("Would like a special character in your password?");
    var charTotal = "";
  }

  if (charLower === true) {
    charTotal += passParameter.LowerCase;
  }
  if (charUpper === true) {
    charTotal += passParameter.UpperCase;
  }
  if (charNumber === true) {
    charTotal += passParameter.Numbers;
  }
  if (charSpecial === true) {
    charTotal += passParameter.Special;
  }

  var finalPassword = "";
  for (let i = 0; i < pLength; i++) {
    finalPassword += charTotal[Math.floor(Math.random() * charTotal.length)];
  }
  return finalPassword;
}

writePassword();