// Create arrays that hold potential password criteria
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var UPPERCASE = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
var specialCharaters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '"', '-', '+', '=', ',', '.', ':', ';', '<', '>', '`', '~', '|', '{', '}', '/']

// Array that holds user selected password criteria
var selectedOptions = []

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//function that generates password
function generatePassword () {
  
  //prompt user for password criteria
  
  //prompt for complexity
  var complexity = window.prompt("How many characters would you like your password to be?");
    if (complexity <= 128 && complexity >= 8) {
      console.log(complexity);
    }
    else {
      window.alert("Please enter a value no less than 8 and no greater than 128");
      generatePassword();
    }

  //prompt user for character types
  var hasSpecialChar = confirm(
    'Click OK to confirm including special characters.\nClick cancel if you do not wish to include them.'
    );
    if (hasSpecialChar) {
      for (var i = 0; i < specialCharaters.length; i++) {
      selectedOptions.push(specialCharaters[i]);
      }
    }
  var hasLowecaseChar = confirm(
    'Click ok to confirm including lowercase letters.\nClick cancel if you do not wish to include them.'
  );
    if (hasLowecaseChar) {
      for (var i = 0; i < lowercase.length; i++) {
      selectedOptions.push(lowercase[i]);
      }
    }
  var hasUppercaseChar = confirm(
    'Click ok to confirm including uppercase letters.\nClick cancel if you do not wish to include them.'
  );
    if (hasUppercaseChar) {
      for (var i = 0; i < UPPERCASE.length; i++) {
      selectedOptions.push(UPPERCASE[i]);
      }
    }
  var hasNumbers = confirm(
    'Click ok to confirm including numbers.\nClick cancel if you do not wish to include them.'
  );
  if (hasNumbers) {
    for (var i = 0; i < numbers.length; i++) {
    selectedOptions.push(numbers[i]);
    }
  }
  console.log(selectedOptions);

  //logic of function  
  var password = '';
  for (var i = 0; i < complexity; i++) {
    password = password + selectedOptions[Math.floor(Math.random() * selectedOptions.length)];
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
    
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
