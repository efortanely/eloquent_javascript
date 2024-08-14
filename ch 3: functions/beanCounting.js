function countBs(str) {
  return countChar(str, "B");
}

function countChar(str, c) {
  return [...str].reduce((count, char) => (char === c ? count + 1 : count), 0);
}

console.log(countBs("BaB"));
console.log(countChar("BaB", "a"));
