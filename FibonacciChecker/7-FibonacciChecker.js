/*
 Question	
 
  Have the function FibonacciChecker(num) return the string yes if the number given is part of the Fibonacci sequence. 
  This sequence is defined by: Fn = Fn-1 + Fn-2, which means to find Fn you add the previous two numbers up. 
  The first two numbers are 0 and 1, then comes 1, 2, 3, 5 etc.
  If num is not in the Fibonacci sequence, return the string no. 

  Sample Test Cases
  Input:34
  Output:"yes"

  Input:54
  Output:"no"
   
*/

//Answer

function FibonacciChecker(num) { 
 
  if(num === 0){
      return 'yes';
  }
  const lastTwo = [0,1];
  while(lastTwo[1] < num){
      lastTwo.push(lastTwo[0] + lastTwo[1]);
      lastTwo.shift();
  }
  return lastTwo[1] === num ? "yes" : "no";
         
}

//Control
console.log(FibonacciChecker(34));
console.log(FibonacciChecker(54));