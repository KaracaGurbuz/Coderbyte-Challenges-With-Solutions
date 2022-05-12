/*
 Question	
 
    Have the function SimpleAdding(num) add up all the numbers from 1 to num. 
    For the test cases, the parameter num will be any number from 1 to 1000.
    
    Sample Test Cases
    
    Input:12
    Output:78
    
    Input:140
    utput:9870

*/

//Answer

var simpleAdding = function (num) {
	var total = 0
	for (var i = 0; i <= num; i ++) {
		total = total + i;
	}
	return total;
}

//Control
console.log(simpleAdding("12"));
console.log(simpleAdding("140"));