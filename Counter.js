class Counter {
  constructor(string) {
    this.string = string;
  }

  howMany(letter) {
    const counter = {};

    this.string
      .toLowerCase()
      .split("")
      .forEach(letter => {
        counter[letter] ? ++counter[letter] : (counter[letter] = 1);
      });
    console.log(counter);
    return counter[letter];
  }
}

const test = new Counter("hello");

// this function is here to help you count words in a string
// use it or ignore it, up to you
// it returns an object like: {
// "h": 2,
// "e": 9,
// ...
// }

module.exports = Counter;
