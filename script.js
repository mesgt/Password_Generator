// Assignment Code
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); //WHY querySelector?
  passwordText.value = password; 
}

function generatePassword() {
  var charTotal = "";
    if (charLower===true) {
      charTotal += passParameter.LowerCase;}
    if (charUpper===true) {
      charTotal += passParameter.UpperCase;}
    if (charNumber===true) {
      charTotal +=passParameter.Numbers;}
    if (charSpecial===true) {
      charTotal +=passParameter.Special;}
      
  console.log(charTotal); //take out when done.
  
  var finalPassword="";
  for (let i = 0; i < passLength; i++) {
    finalPassword+=charTotal[Math.floor(Math.random()*passLength+15)];  //WHY DO I NEED + NUMBER? AND WHY DOES THE PASSWORD CONTAIN ONLY LOWER CASE LETTERS IF THAT NUMBER IS 0?
  }
  return finalPassword;
}

var passParameter = {
  LowerCase : "qwertyuiopasdfghjklzxcvbnm",
  UpperCase : "QWERTYUIOPASDFGHJKLZXCVBNM",
  Numbers : "1234567890",
  Special : "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~",
}

//User selects parameters.
function getPassLength() {
  var pLength = prompt("Select the length of your password by typing in a number between 8 and 128.");
    if ((pLength < 8) || (pLength > 128)) {
      alert("Please select appropriate number of characters for your password.");}
    else {
      alert("You have selected your password to be " + pLength + " characters long.");}
    return pLength
}
passLength=getPassLength()

var charLower = confirm("Would like a lower case letter in your password?");
var charUpper = confirm("Would like an upper case letter in your password?");
var charNumber = confirm("Would like a number in your password?");
var charSpecial = confirm("Would like a special character in your password?");

writePassword();

//checks. Delete from final product.
console.log(passLength);
console.log(charLower);
console.log(charUpper);
console.log(charNumber);
console.log(charSpecial);