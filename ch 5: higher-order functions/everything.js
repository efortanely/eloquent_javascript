function everyLoop(arr, pred) {
  for (x of arr) {
    if (!pred(x)) {
      return false;
    }
  }

  return true;
}

function everySome(arr, pred) {
  return !arr.some((x) => !pred(x));
}

let arr = [1, 2, 3, 4, 5];
let pred = (x) => x > 1;

console.log(everyLoop(arr, pred));
console.log(everySome(arr, pred));
