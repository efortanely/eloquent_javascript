function reverseArray(arr) {
  let ans = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    ans.push(arr[i]);
  }

  return ans;
}

function reverseArrayInPlace(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    let temp = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = arr[i];
    arr[i] = temp;
  }

  return arr;
}

let arr = [1, 2, 3, 4, 10];
console.time("reverseArray");
console.log(reverseArray(arr));
console.timeEnd("reverseArray");

console.time("reverseArrayInPlace");
console.log(reverseArrayInPlace(arr));
console.timeEnd("reverseArrayInPlace");
