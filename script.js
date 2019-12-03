
//DON'T TOUCH THIS CODE! This code is adding click handlers and DOM manipulation to the page.  Edit the generatePassword function and all should work properly.
// Assignment Code
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy");

//this function will fire when you click the generate password button on the page.  I've set it to alert "You've clicked a button" and return a password of password for now. Update it to make your password
function generatePassword() {

    //YOUR CODE HERE
    var charOptions = {
        upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        lower: 'abcdefghijklmnopqrstuvwxyz',
        number: '0123456789',
        special: '!$%^&*()-=+[]{};#:@~,./<>?'
    };
    var chars = userOptions("",charOptions);
    var string_length = slider.value;
    var randomstring = '';
    for (var i=0; i<string_length; i++) {
    var rnum = Math.floor(Math.random() * chars.length);
        randomstring += chars.substring(rnum,rnum+1);
    }
    
    // alert("Huzzah!");
    return randomstring;
}

//Password length slider
var slider = document.getElementById("myRange");
var output = document.getElementById("output");
output.innerHTML = slider.value;


slider.oninput = function() {
  output.innerHTML = this.value;
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

    copyBtn.removeAttribute("disabled");
    copyBtn.focus();
}

function copyToClipboard() {
    // BONUS 
    var copyText = document.getElementById("password");
    copyText.select();
    document.execCommand("copy");
    alert("Copied text: " + copyText.value);
}
function userOptions(chars, charOptions) {
    // console.log(document.getElementById("lower").checked);
    var upperChecked = document.getElementById("upper").checked
    var lowerChecked = document.getElementById("lower").checked
    var numberChecked = document.getElementById("number").checked
    var specialChecked = document.getElementById("special").checked

    if (upperChecked) {
        chars = chars + charOptions.upper
    }
    // console.log(chars);
    
    if (lowerChecked) {
        chars = chars + charOptions.lower
    }

    if (numberChecked) {
        chars = chars + charOptions.number
    }

    if (specialChecked) {
        chars = chars + charOptions.special
    }

    return chars;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// generateBtn.addEventListener("click", );


// BONUS EVENT LISTENER