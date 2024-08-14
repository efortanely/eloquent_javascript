class Group {
  #group;

  constructor() {
    this.#group = [];
  }

  add(x) {
    if (!this.#group.includes(x)) {
      this.#group.push(x);
    }
  }

  delete(x) {
    this.#group = this.#group.filter((item) => item != x);
  }

  has(x) {
    return this.#group.includes(x);
  }

  static from(iter) {
    let group = new Group();

    for (let x of iter) {
      group.add(x);
    }

    return group;
  }

  [Symbol.iterator]() {
    return new GroupIterator(this.#group);
  }
}

class GroupIterator {
  #group;
  #position;

  constructor(group) {
    this.#group = group;
    this.#position = 0;
  }

  next() {
    if (this.#position >= this.#group.length) {
      return { done: true };
    }

    let value = this.#group[this.#position];
    this.#position++;
    return { value, done: false };
  }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
