function MatrixSpiral(strArr) {
  let matrix = strArr.map((el) => [...el]);
  var n = matrix.length;
  var m = (matrix[0] || []).length;
  var max = 0;
  var heights = Array(m);
  var stack = [];
  var h = 0;
  var w = 0;

  for (var i = 0; i < n; i++) {
    stack = [];

    for (var j = 0; j < m; j++) {
      if (matrix[i][j] === "1") {
        heights[j] = i === 0 ? 1 : heights[j] + 1;
      } else {
        heights[j] = 0;
      }

      while (stack.length && heights[j] <= heights[stack[stack.length - 1]]) {
        h = heights[stack.pop()];
        w = stack.length === 0 ? j : j - stack[stack.length - 1] - 1;
        max = Math.max(max, h * w);
      }

      stack.push(j);
    }

    while (stack.length) {
      h = heights[stack.pop()];
      w = stack.length === 0 ? m : m - stack[stack.length - 1] - 1;
      max = Math.max(max, h * w);
    }
  }

  return max;
}
console.log(MatrixSpiral(["101", "111", "001"]));
