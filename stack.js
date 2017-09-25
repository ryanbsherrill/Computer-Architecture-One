class Stack {
  constructor() {
    this.stack = [];
    this.size = 0;
  }
  size() {
    return this.size;
  }
  add(...args) {
    this.stack.push(...args);
    ++this.size;
    return this.size;
  }
  remove() {
    if (this.size === 0) return this.size;
    --this.size;
    return this.stack.pop();
  }
}

module.exports = Stack;
