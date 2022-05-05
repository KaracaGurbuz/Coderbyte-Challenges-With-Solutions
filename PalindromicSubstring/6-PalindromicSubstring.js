/*
 Question	
 
  Have the function PalindromicSubstring(str) take the str parameter being passed and find the longest palindromic substring, 
  which means the longest substring 
  which is read the same forwards as it is backwards. For example: if str is "abracecars" then your program should return 
  the string racecar because it is the longest palindrome within the input string. 
  The input will only contain lowercase alphabetic characters. The longest palindromic substring will always be unique, 
  but if there is none that is longer than 2 characters, return the string none. 
   
*/

//Answer

function PalindromicSubstring(str) { 
 
  if (str === str.split('').reverse().join('')) { return str; }
  let longest = '';
  for(let i = 0; i < str.length ; i++){
      let test = str[i];
      for(let j = i + 1; j < str.length; j++){
          test += str[j];
          if(test === test.split('').reverse().join('')){
            if(longest.length < test.length) {longest = test;}
          }
      }
  }
  return longest.length < 3 ? 'none' : longest;
         
}

//Control
console.log(PalindromicSubstring("abracecars"));
console.log(PalindromicSubstring("million"));