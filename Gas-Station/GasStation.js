function GasStation(strArr) {
  let alinan = 0;
  let ihtiyac = 0;

  for (let i = 1; i < strArr.length; i++) {
    let station = strArr[i].split(":");
    alinan += parseInt(station[0]);
    ihtiyac += parseInt(station[1]);
  }
  if (ihtiyac > alinan) {
    return "impossible";
  }

  newArr = strArr
    .slice(1, strArr[strArr.length])
    .concat(strArr.slice(1, strArr[strArr.length]));
  console.log(strArr);
  console.log(newArr);

  for (let i = 0; i < strArr[0]; i++) {
    let eldeki = 0;
    for (
      let index = i;
      index < newArr.length - parseInt(strArr[0]) + i;
      index++
    ) {
      let station = newArr[index].split(":");
      alinan = parseInt(station[0]);
      ihtiyac = parseInt(station[1]);
      eldeki += alinan;
      if (ihtiyac > eldeki) {
        break;
      } else {
        eldeki -= ihtiyac;
      }
      if (index === newArr.length - parseInt(strArr[0]) + i) {
        return i + 1;
      }
    }
  }

  // code goes here
  // return "false";
}

// keep this function call here
console.log(GasStation(["4", "0:1", "2:2", "1:2", "3:1"]));
