/*
 Question	
 
    have the function ArrayAddition(arr) take the array of numbers stored in arr and return
    the string true if any combination of numbers in the array can be added up to equal the largest number in the array,
    otherwise return the string false. For example: if arr contains [4, 6, 23, 10, 1, 3] the output should return true
    because 4 + 6 + 10 + 3 = 23. The array will not be empty, will not contain all the same elements, and may contain
    negative numbers.

    Sample Test Cases
    Input:5,7,16,1,2
    Output:"false"

    Input:3,5,-4,8,12
    Output:"true"

*/

//Answer

function ArrayAddition(arr) { 
  //get largest number and remove it from array
  const sum = Math.max(...arr);
  arr.splice(arr.indexOf(sum), 1);
  // check if the temporary sum equals our sum above
  for (let i = 0; i < arr.length; i++) {
    let runningSum = arr[i];
    for (let j = 0; j < arr.length; j++) {
      if (i === j) { continue; }
      runningSum += arr[j];
      if (runningSum === sum) {
          return true;
      }
    }
  } 
  return false; 
         
}

//Control
console.log(ArrayAddition([5,7,16,1,2]));
console.log(ArrayAddition([3,5,-4,8,12]));