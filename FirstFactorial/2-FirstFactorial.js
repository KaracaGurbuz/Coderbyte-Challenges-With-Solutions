/*
 Question	  
    
    Using the JavaScript language, have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it (ie. if num = 4, return (4 * 3 * 2 * 1)). For the test cases, the range will be between 1 and 18.

    Sample Test Cases

    Input:4
    Output:24

    Input:8
    Output:40320

*/

//Answer

function firstFactorial(num) { 

  var factorial = 1;
  for (var i = 2; i <= num; i++) {
    factorial *= i;
  }
   
  return factorial;
}

//Control
console.log(firstFactorial(4));


/*
function FirstFactorial(num) { 
  return (num === 1 ? 1 : num * FirstFactorial(num - 1));
}

console.log(FirstFactorial(8));
*/