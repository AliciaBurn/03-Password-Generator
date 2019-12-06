var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var number = "0123456789";
var special = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";



   
function generatePassword() {
    var length = parseInt(prompt('Choose how many characters between 8 to 128.'));
    if  (isNaN(length)) {
        alert("Error!! Enter a valid number for password length.")
        return;
    }
    var uppercase = confirm('Would you like uppercase characters?')
    var lowercase = confirm('Would you like lowercase characters?')
    var numeric = confirm('Would you like numeric characters?')
    var special = confirm('Would you like special characters?') 
}


 function generate() {
    userPassword = "";
    passwordCharSet = "";
    if (lowercaseInput.confirm) {
      passwordCharSet += uppercase;
    }
    if (uppercaseInput.confirm) {
      passwordCharSet += lowercase;
    }
    if (specialInput.confirm) {
      passwordCharSet += special;
    }
    if (numbersInput.confirm) {
      passwordCharSet += number;
    }
    plength = Number(lengthInput.value);
   
    for (let i = 0; i < plength; i++) {
      userPassword += passwordCharSet.charAt(
        Math.floor(Math.random() * passwordCharSet.length));
      }

      return pwd;
 }
