function loop(value, test, update, body) {
  for (i = value; test(i); i = update(i)) {
    body(i);
  }
}

loop(
  0,
  (i) => i < 5,
  (i) => i + 1,
  (i) => console.log(i)
);
