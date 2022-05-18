/*
 Question	
 
This challenge requires you to determine if the mean is equal to the mode of an array. 
The mean is the average of the array, in other words, all the numbers added up and divided by the number of elements. 
The mode is the element that appears most often in the array. For example, 
if the array were [5, 3, 3, 3, 1] your program should return 1 because the mean is 3 and the mode is 3. 
If they are not equal your program should return 0.

Sample Test Cases
Input: 1, 2, 3
Output: 0

Input: 4, 4, 4, 6, 2
Output: 1

*/

//Answer

function MeanMode(arr) { 
 
  var summed = arr.reduce(function(previousVal, currentVal, index, self) {
    return previousVal + currentVal;
  });

  var mean = summed / arr.length;
  var table = {};

  for (var i = 0; i < arr.length; i++) {
    var number = arr[i];
    table[number] === undefined ? table[number] = 1 : table[number] += 1;
  }

  var answer = {number: null, count: 0};
  
  for (var n in table) {
    if (table[n] > answer["count"]) {
      answer["count"] = table[n];
      answer["number"] = n;
    }
  }

  return (answer["number"] == mean) ? 1 : 0;
         
}

//Control
console.log(MeanMode([1, 2, 3]));
console.log(MeanMode([4, 4, 4, 6, 2]));