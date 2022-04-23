function MatrixSpiral(strArr) {
  let matrix = strArr.map((el) => JSON.parse(el));
  const arr = [];
  while (matrix.length) {
    arr.push(
      ...matrix.shift(),
      ...matrix.map((a) => a.pop()),
      ...(matrix.pop() || []).reverse(),
      ...matrix.map((a) => a.shift()).reverse()
    );
  }
  // code goes here
  return arr.join(",");
}

// keep this function call here
console.log(MatrixSpiral(readline()));
