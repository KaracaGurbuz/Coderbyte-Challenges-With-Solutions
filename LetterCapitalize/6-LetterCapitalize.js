/*
 Question	
 
    Have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word. Words will be separated by only one space.
    
    Sample Test Cases
    
    Input:"hello world"
    Output:"Hello World"
    
    Input:"i ran there"
    Output:"I Ran There"

*/

//Answer

var letterCapitalize = function(str) {
	var strArr = str.split("");
	strArr[0] = strArr[0].toUpperCase();

	for (var i = 0; i < strArr.length; i ++) {
		if(strArr[i] === " ") {
			strArr[i + 1] = strArr[i + 1].toUpperCase();
		}
	}
	return strArr.join("");
};

//Control
console.log(letterCapitalize("hello world"));
console.log(letterCapitalize("i ran there"));