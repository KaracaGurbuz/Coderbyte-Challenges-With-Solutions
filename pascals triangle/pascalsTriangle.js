function PascalsTriangle(arr) {
  let pascals = [[1], [1, 1]];

  while (true) {
    let lastRow = pascals[pascals.length - 1];
    if (arr[1] === lastRow[1]) {
      break;
    }
    let newArr = [];
    for (let j = 1; j < lastRow.length; j++) {
      newArr.push(lastRow[j - 1] + lastRow[j]);
    }
    newArr.unshift(1);
    newArr.push(1);
    pascals.push(newArr);
  }

  let lastRow = pascals[pascals.length - 1];

  // code goes here
  if (lastRow.length === arr.length) {
    return -1;
  } else {
    return lastRow[arr.length];
  }

  // return pascals;
}

// keep this function call here
console.log(PascalsTriangle(readline()));
