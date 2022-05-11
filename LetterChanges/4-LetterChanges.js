/*
 Question	
 
    Using the JavaScript language, have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string.

    Sample Test Cases

    Input:"hello*3"
    Output:"Ifmmp*3"

    Input:"fun times!"
    Output:"gvO Ujnft!"

*/

//Answer

var letterChange = function(str) {
        var alphabet = ["a", "b", "c", "d", "E", "e", "f", "g", "h", "I", "i", "j", "k", "l", "m", "n", "O", "o", "p", "q", "r", "s", "t", "U", "u", "v", "w", "x", "y", "z"];
        var changedArray = [];
        var strArray = str.split("")

        for (var i = 0; i < strArray.length; i++) {
            if ((strArray[i].toLowerCase()) === "z") {
                changedArray.push("A");
            } else if (alphabet.indexOf(strArray[i].toLowerCase()) !== -1) {
                changedArray.push(alphabet[alphabet.indexOf(strArray[i].toLowerCase()) + 1]);
            } else {
                changedArray.push(strArray[i]);
            }
        }
    return changedArray.join("");
} 


//Control
console.log(letterChange("hello*3"));
console.log(letterChange("fun times!"));