class PGroup {
  #group;
  static empty = new PGroup([]);

  constructor(group) {
    this.#group = group;
  }

  add(x) {
    let copy = [...this.#group];

    if (!copy.includes(x)) {
      copy.push(x);
    }

    return new PGroup(copy);
  }

  delete(x) {
    let copy = this.#group.filter((item) => item != x);
    return new PGroup(copy);
  }

  has(x) {
    return this.#group.includes(x);
  }
}

let a = PGroup.empty.add("a");
let ab = a.add("b");
let b = ab.delete("a");

console.log(b.has("b"));
// → true
console.log(a.has("b"));
// → false
console.log(b.has("a"));
// → false
