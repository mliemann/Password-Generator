
// On click of button, generates confirm boolean
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click",click)

//checks to see what characters are needed
function click(){
  var passwordTxt = document.getElementById("password");
  var alphaLowercase = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789";
  var symbols = "!@#$%^&*_-+=";
  var alphaUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var final = "";
  //checks legth
  crcterconfirm ()

  //check criteria
  function crcterconfirm () {
    var howlong= prompt("How long should the password be? (8-128 characters)");
    if (howlong >= 8 && howlong <= 128){ 
    alert("You've selected " + howlong +" characters.");
    console.log (howlong);
    } else if ((howlong < 8) || (howlong > 128)) {
    alert("Please select a valid choice");
    crcterconfirm ()
    }
    
    var lowercase=confirm("Do you want lowercase letters?");
    if (lowercase == true) {alert( "You've selected " + lowercase);
    final= final.concat(alphaLowercase);}
    if (lowercase == false) alert( "You've selected " + lowercase);
    var uppercase=confirm("Do you want uppercase letters?");
    if (uppercase == true) {alert( "You've selected " + uppercase);
    final=final.concat(alphaUppercase)}
    if (uppercase == false) alert( "You've selected " + uppercase);
    var specialCharacters= confirm("Do you want special characters?");
    if (specialCharacters == true) {alert( "You've selected " + specialCharacters);
    final= final.concat(symbols);}
    if (specialCharacters == false) alert( "You've selected " + specialCharacters);
    var numberCharacters= confirm("Do you want numbers?");
    if (numberCharacters== true) {alert( "You've selected " + numberCharacters);
    final= final.concat(numbers);}
    if (numberCharacters== false) alert( "You've selected " + numberCharacters);
    if (numberCharacters ==false && uppercase == false && lowercase == false && specialCharacters == false){
      alert ("Please select at least one choice to generate a password");
      crcterconfirm ()
    };
  
  
  console.log (final)
  

  var password1 ='';
        for (let i = 0; i < howlong; i++) {
            password1 += final.charAt(Math.floor(Math.random() * final.length));
        }
        passwordTxt.textContent= password1
      }
  
}

  
  
  


