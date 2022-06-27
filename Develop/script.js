// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var uppercase = confirm('uppercase'); // true or false
  var lowercase = confirm('lowercase'); // true or false
  var passwordLength = prompt('chose password length between 8 and 128');
  var passwordResult = '';

  length =Number(length);

  if ( uppercase ) {
    // add some uppercase letters to our result
  } else if (lowercase === true) {
    // add some lowercase letters to our result
  } else if (passLength >= 8, passLength <= 128)

  return '';
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
