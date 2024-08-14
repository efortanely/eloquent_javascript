function deepEqual(val1, val2) {
  if (val1 === val2) {
    return true;
  }

  if (val1 && val2 && typeof val1 == "object" && typeof val2 == "object") {
    let keys = [...new Set(Object.keys(val1).concat(Object.keys(val2)))];
    for (let key of keys) {
      if (key in val1 && key in val2) {
        if (!deepEqual(val1[key], val2[key])) {
          return false;
        }
      } else {
        return false;
      }
    }

    return true;
  }

  return false;
}

console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } })); // true
console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 3 } })); // false
console.log(deepEqual(1, 1)); // true
console.log(deepEqual(1, "1")); // false
