/*
 Question	  
    Using the JavaScript language, have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty.
    
    Sample Test Cases
    
    Input:"fun&!! time"
    Output:"time"
    
    Input:"I love dogs"
    Output:"love"
*/

//Answer
var longestWord = function(sen) {
    var strArrays = sen.replace(/[^A-Za-z\s]/g, "").split(" ")
    var letterCount = 0;
    var longest;
    for (var i = 0; i < strArrays.length; i++) {
        if (strArrays[i].length > letterCount) {
            letterCount = strArrays[i].length;
            longest = strArrays[i];
        }
    }
    return longest;
}

//Control
console.log(longestWord("I love dogs"));