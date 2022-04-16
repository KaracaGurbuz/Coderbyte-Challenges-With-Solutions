function ExOh(str) {
  let arr = str.split("");

  let xCount = 0;
  let oCount = 0;

  for (let i of arr) {
    if (i === "x") {
      xCount += 1;
    } else if (i === "o") {
      oCount += 1;
    }
  }

  // code goes here
  return String(xCount === oCount);

  // return arr.filter(el=>el==="x").length===arr.filter(el=>el==="o").length
}

// keep this function call here
console.log(ExOh(readline()));
