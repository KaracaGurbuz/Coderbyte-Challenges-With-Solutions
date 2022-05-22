function CaesarCipher(str, num) {
  let resultArray = [];
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) > 96 && str.charCodeAt(i) < 123) {
      let code = str.charCodeAt(i) + num;
      if (code > 122) {
        code = code - 122 + 96;
      }
      resultArray.push(String.fromCharCode(code));
    } else if (str.charCodeAt(i) > 64 && str.charCodeAt(i) < 91) {
      let code = str.charCodeAt(i) + num;

      if (code > 90) {
        code = code - 90 + 64;
      }
      resultArray.push(String.fromCharCode(code));
    } else {
      resultArray.push(str[i]);
    }
  }
  return resultArray.join("");
  // code goes here
}

// keep this function call here
console.log(CaesarCipher(readline()));
