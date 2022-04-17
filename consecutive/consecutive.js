function Consecutive(arr) {
  let len = arr.length;
  let max = Math.max(...arr);
  let min = Math.min(...arr);

  // code goes here
  return max - min - (len - 1);
}

// keep this function call here
console.log(Consecutive(readline()));
