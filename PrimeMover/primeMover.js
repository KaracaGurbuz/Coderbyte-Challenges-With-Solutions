function PrimeMover(num) {
  let primeNums = [2, 3];

  for (let i = 4; i <= 1000; i++) {
    let flag = true;
    for (let j of primeNums) {
      if (i % j === 0) {
        flag = false;
        break;
      }
    }
    if (flag) {
      primeNums.push(i);
    }
  }
  primeNums.unshift(1);

  // code goes here
  return primeNums[num];
}

// keep this function call here
console.log(PrimeMover(readline()));
