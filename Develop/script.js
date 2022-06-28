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
      if (wantsLength <= 128) {
      } else if (wantsLength >= 8) {
      } else { alert('Please enter minimum character requirement. There needs to be at least one style of character slected.')
      }
    
      // This for statement will create a randomized password based on the chosen character set and length chosen. 
      for (var count = 0; count < wantsLength ; count++)  {
        passwordResult += characterSet[Math.floor(Math.random() * (characterSet.length - 1) + 1)];}



    passwordE1.innerText = passwordResult;
}



generateBtn.addEventListener('click', generatePassword)




// TO BE DELTEED
// line 6 (wantsLength = Number(wantsLength) how do we change a string in JS into a number??? We will need to do this to get the number of characters I am assuming.

// Line 16 over for statement    // he replaced length with something becauase he said it would be too obvious. try using wantsLength = Number(wantsLength) then maybe wantsLength in the equasion.

    // console.log (wantsLength, wantsUppercase, wantsLowercase, wantsSpecialChar, specialChar)

     // console.log(specialChar[specialChar.length - 1])

    //  function charactersIncluded (A B C D) {
    //     if (wantsUppercase == true) {
            
    //     }
    //     if (wantsLowercase == true){

    //     }
    //     if (wantsSpecialChar == true){

    //     }
    //     if (wantsNumbers == true) {

    //     }

    //     characters = [uppercase, lowercase, specialChar, numbers]

    //     return characters
    // }

        // const charactersIncluded = {
    //     ...(uppercase && {uppercase}),
    //     ...(lowercase && {lowercase}),
    //     ...(specialChar && {specialChar}),
    //     ...(numbers && {numbers}),
    // }



//   var lowercase = 'abcdefghijklmnopqrstuvwxyz';
//   var specialChar = '!"#$%&()*+,-./:;<=>?@[\\]^_`{|}~';
//   var numbers = '0123456789'
//   var passwordResult = '';
//   var passwordE1 = document.querySelector('#password');


// function whatCharacters (U, L, S, N) {
//   console.log(U, L, S, N)

// }

// function areWeUpper (){
//   if (wantsUppercase) {
//     var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//   }
//   return uppercase
// }
// console.log(areWeUpper)
// }
