function flattenArr(arr) {
  return arr.reduce((prev, curr) => prev.concat(...curr), []);
}

let arr = [
  [1, 2],
  [3, 4],
  [5, 6, 7],
];

console.log(flattenArr(arr));
