GIVEN I need a new, secure password
//WHEN I click the button to generate a password
//THEN I am presented with a series of prompts for password criteria
//WHEN prompted for password criteria
//THEN I select which criteria to include in the password
//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters
//WHEN prompted for character types to include in the password
//THEN I choose lowercase, uppercase, numeric, and/or special characters
//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected
//WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page


howlong1 () // re


 function howlong1 (){
    var howlong= prompt("How long should the password be? (8-128 characters)");
    if (howlong >= 8 && howlong <= 128){ 
    alert("You've selected " + howlong +" characters.");
    console.log (howlong)
    } else if ((howlong < 8) || (howlong > 128)) {
    alert("Please select a valid choice");
    howlong1 ()
    }
  }
    for (var i = 0; i < basevariable.legth; i++) {
        basevariable[i] = base.charAt(i);
        console.log (basevariable.charAt(i));
    passwordTxt.textContent= base.join('')
    }

      var lowercase=confirm("Do you want lowercase letters?");
  if (lowercase == true) {alert( "You've selected " + lowercase);
  base.push(alphaLowercase);}
  if (lowercase == false) alert( "You've selected " + lowercase);
  var uppercase=confirm("Do you want uppercase letters?");
  if (uppercase == true) {alert( "You've selected " + uppercase);
  base.push(alphaUppercase)}
  if (uppercase == false) alert( "You've selected " + uppercase);
  var specialCharacters= confirm("Do you want special characters?");
  if (specialCharacters == true) {alert( "You've selected " + specialCharacters);
  base.push (symbols);}
  if (specialCharacters == false) alert( "You've selected " + specialCharacters);
  var numberCharacters= confirm("Do you want numbers?");
  if (numberCharacters== true) {alert( "You've selected " + numberCharacters);
  base.push (numbers);}
  if (numberCharacters== false) alert( "You've selected " + numberCharacters);
  if (numberCharacters ==false && uppercase == false && lowercase == false && specialCharacters == false){
    alert ("Please select at least one choice to generate a password");
    crcterconfirm ()
    };
  
  var final1 = final.split('')
  console.log (final1)