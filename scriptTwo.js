function myFunction() {
    amtOfCharacters = prompt("Choose password length from 8 to 124 characters");
    upper = confirm("Would you like upper case letters?");
    lower = confirm("Would you like lower case letters?");
    number = confirm("Would you like numbers?");
    special = confirm("Would you like special characters?");
  }
  
var lowercase = "abcdefghijklmnopqrstuvwxyz",
  uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  number = "0123456789",
  special = "!@#$%^&*()_+~`|}{[]:;?><,./-=",
  lowercaseInput = document.getElementById("lowercase"),
  uppercaseInput = document.getElementById("uppercase"),
  specialInput = document.getElementById("special"),
  numbersInput = document.getElementById("number"),
  lengthInput = document.getElementById("length"),
  passwordFeild = document.getElementById("pass-field"),
  generateButton = document.getElementById("generate"),
  copyButton = document.getElementById("copy"),
  plength,
  userPassword,
  passwordCharSet;
 
function generate() {
  userPassword = "";
  passwordCharSet = "";
  if (lowercaseInput.checked) {
    passwordCharSet += lowercase;
  }
  if (uppercaseInput.checked) {
    passwordCharSet += uppercase;
  }
  if (specialInput.checked) {
    passwordCharSet += special;
  }
  if (numbersInput.checked) {
    passwordCharSet += number;
  }
  plength = Number(lengthInput.value);
 
  for (let i = 0; i < plength; i++) {
    userPassword += passwordCharSet.charAt(
      Math.floor(Math.random() * passwordCharSet.length)
    );
  }