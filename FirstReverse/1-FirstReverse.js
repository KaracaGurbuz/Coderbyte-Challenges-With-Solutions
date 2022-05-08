/*
 Question	
 First Reverse 
 Have the function FirstReverse() take the str parameter being passed and return the string in reversed order.

 Sample Test Cases
 Input:"coderbyte"
 Output:"etybredoc"
    
 Input:"I Love Code"
 Output:"edoC evoL I"

*/

//Answer
function firstReverse(str) {

  return str.split('').reverse().join('');

}

//Control

console.log(firstReverse('coderbyte'));
//console.log(firstReverse('I Love Code'));
