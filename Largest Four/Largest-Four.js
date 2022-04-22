function LargestFour(arr) {
  // code goes here
  let arr1 = arr.sort(); //Küçükten büyüğe doğru sıralama yaptım.
  let sum =
    arr1[arr1.length - 1] +
    arr1[arr1.length - 2] +
    arr1[arr1.length - 3] +
    arr1[arr1.length - 4]; //Son dört elemanı topladım.

  return sum;
}

// keep this function call here
console.log(LargestFour(readline()));
