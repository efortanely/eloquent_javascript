function arrayToList(arr) {
  let list = null;

  for (let x of arr.reverse()) {
    list = prepend(x, list);
  }

  return list;
}

function listToArray(list) {
  let arr = [];

  let curr = list;

  while (curr?.value) {
    arr.push(curr.value);
    curr = curr.rest;
  }

  return arr;
}

function prepend(element, list) {
  return {
    value: element,
    rest: list,
  };
}

function nth(list, num) {
  let i = 0;
  let curr = list;

  while (i < num && curr?.rest) {
    i += 1;
    curr = curr.rest;
  }

  if (i == num) {
    return curr.value;
  } else {
    return undefined;
  }
}

function nthRecursive(list, num) {
  if (!list) {
    return undefined;
  }
  if (num == 0) {
    return list.value;
  }

  return nthRecursive(list.rest, num - 1);
}

let arr = [1, 2, 3];
let list = arrayToList(arr);
console.log(listToArray(list));

for (let i = 0; i <= arr.length; i++) {
  console.log(nthRecursive(list, i));
}
