

function myFunction() {
    amtOfCharacters = prompt("Choose password length from 8 to 124 characters");
    upper = confirm("Would you like upper case letters?");
    lower = confirm("Would you like lower case letters?");
    number = confirm("Would you like numbers?");
    special = confirm("Would you like special characters?");
  }

  const resultEl = document.getElementById("result");
  const lengthEl = document.getElementById("length");
  const uppercaseEl = document.getElementById("uppercase");
  const lowercaseEl = document.getElementById("lowercase");
  const numberEl = document.getElementById("number");
  const specialEl = document.getElementById("special");
  const generateEl = document.getElementById("generate");


  const randomFunc = {
    upper: getRandomUpper,
    lower: getRandomLower,
    number: getRandomNumber,
    special: getRandomSpecial
  };

  generate.addEventListener("click", function() {
    const length = +lengthEl.value;
    const hasUpper = uppercaseEl.confirm;
    const hasLower = lowercaseEl.confirm;
    const hasNumbers = numberEl.confirm;
    const hasSpecial = specialEl.confirm;


  resultEl.innerText = generatePassword(hasUpper, hasLower, hasNumbers, hasSpecial, length);
  });


  function generatePassword(upper, lower, number, special,lower) {
    var generatePassword = "";

    const typesCount = upper + lower + number + special;

    const typesArr = [{upper}, {lower}, {number}, {special}];

    Console.log("typesArr: ", typesArr);
  }
  

    function getRandomLower() {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    }

    function getRandomUpper() {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    }

    function getRandomNumber() {
      return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
    }

    function getRandomSpecial() {
      const special = "!@#$%&*?/<>";
      return special[Math.floor(Math.random() * special.length)];
    }



  

    