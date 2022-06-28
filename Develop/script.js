var generateBtn = document.querySelector('#generate')
// var count = 0;

function generatePassword() {
  var wantsLength = prompt('Please choose a length between 8 and 128.');
      wantsLength = Number(wantsLength); // This converts the string provided by the prompt into a Number type. 
  var wantsUppercase = confirm('Please press "Okay" if you would you like to include uppercase letter letter(s) in your password?');
  var wantsLowercase = confirm('Please press "Okay" if you would you like to include lowercase letter letter(s) in your password?');
  var wantsSpecialChar = confirm('Please press "Okay" if you would you like to include special character(s) in your password?');
  var wantsNumbers = confirm('Please press "Okay" if you would you like to include number(s) in your password?');
  var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lowercase = 'abcdefghijklmnopqrstuvwxyz';
  var specialChar = '!"#$%&()*+,-./:;<=>?@[\\]^_`{|}~';
  var numbers = '0123456789';
  var characterSet = '';
  var passwordResult = '';
  var passwordE1 = document.querySelector('#password');

    // user is prompted to choose their character set, and the length of the password they would like. 
    // we gather all of the characters that they have chosen. 
    // we then randomize a result based on the length they have decided. 

      if (wantsUppercase == true) {
       characterSet += uppercase;
      }
      if (wantsLowercase == true) {
       characterSet += lowercase;
      }
      if (wantsSpecialChar == true) {
       characterSet += specialChar;
      }
      if (wantsNumbers == true) {
       characterSet += numbers;
      }
      if (7 < wantsLength) { 
      if (128 > wantsLength) {
        // This for statement will create a randomized password based on the chosen character set and length chosen. 
        for (var count = 0; count < wantsLength ; count++)  {
            passwordResult += characterSet[Math.floor(Math.random() * (characterSet.length - 1) + 1)];}
        }  else { alert('Please choose a value within the required character requirement. There needs to be at least one style of character slected.')
      }
      } else { alert('Please choose a value within the required character requirement. There needs to be at least one style of character slected.')
      }
    




    passwordE1.innerText = passwordResult;
}



generateBtn.addEventListener('click', generatePassword)

