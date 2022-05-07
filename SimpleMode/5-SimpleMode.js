/*
 Question	
 
    Have the function SimpleMode(arr) take the array of numbers stored in arr and return the number that appears most 
    frequently (the mode). For example: if arr contains [10, 4, 5, 2, 4] the output should be 4. If there is more 
    than one mode return the one that appeared in the array first (ie. [5, 10, 10 6, 5] should return 5 because it
    appeared first). If there is no mode return -1. The array will not be empty. 

    Sample Test Cases

    Input:5,5,2,2,1
    Output:2

    Input:3,4,1,6,10
    Output:-1
   
*/

//Answer

function SimpleMode(arr) { 
  
  var table = {};

  for (var i = 0; i < arr.length; i++) {
    var number = arr[i];
    table[number] === undefined ? table[number] = 1 : table[number] += 1;
  }

  var answer = {number: null, count: 1};
  
  for (var n in table) {
    if (table[n] > answer["count"]) {
      answer["count"] = table[n];
      answer["number"] = n;
    }
  }
  return (answer["count"] === 1) ? -1 : answer["number"];
         
}

//Control
console.log(SimpleMode([5, 5, 2, 2, 1]));
console.log(SimpleMode([3, 4, 1, 6, 10]));