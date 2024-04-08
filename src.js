const INF = Infinity;
const T = true;
const F = false;
const log = console.log;
const ff = (end, callback, increment = 1) => {
  return () => {
    for (let i = 0; i < end; i += increment) {
      const res = callback(i);
      if (res !== undefined) return res
    }
  }
};
const f1 = (end, callback, increment = 1) => {
  return () => {
    for (let i = 1; i <= end; i += increment) {
      const res = callback(i);
      if (res !== undefined) return res
    }
  }
};
const rr = (end, callback, decrement = 1) => {
  return () => {
    for (let i = end - 1; i >= 0; i -= decrement) {
      const res = callback(i);
      if (res !== undefined) return res
    }
  }
};
const r1 = (end, callback, decrement = 1) => {
  return () => {
    for (let i = end; i >= 1; i -= decrement) {
      const res = callback(i);
      if (res !== undefined) return res
    }
  }
};
const mmin = Math.min;
const mmax = Math.max;
const floor = Math.floor;
const ceil = Math.ceil;
const ga = (length, initial) => [...Array(length)].fill(initial);

const gm = (row, col, initial) =>
  [...Array(row)].map(() => Array(col).fill(initial));
const asc = (a, b) => a - b;
const dec = (a, b) => b - a;
Array.prototype.sum = function () {
  return this.reduce((a, v) => a + v, 0)
}
Array.prototype.top = function () {
  return this[this.length - 1]
}
const DIRS = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
]
var len = (obj) => obj.length ?? obj.size
var ctn = (char) => char.charCodeAt()
var ltn = (char) => char.charCodeAt() - 'a'.charCodeAt()
var utn = (char) => char.charCodeAt() - 'A'.charCodeAt()
var ntc = (...args) => String.fromCharCode(...args)
var ntl = (...args) => String.fromCharCode(...args.map((v) => v + cca('a')))
var ntu = (...args) => String.fromCharCode(...args.map((v) => v + cca('A')))
var ent = (obj) => Object.entries(obj)
class Heap {
  constructor(compareFn = (a, b) => a - b) {
    this.items = [] // array as complete binary tree
    this.compareFn = compareFn
  }
  push(item) {
    // O(log(N))
    var { items, compareFn } = this
    items.push(item)
    var idx = items.length - 1
    var parIdx = Math.floor((idx - 1) / 2)
    while (idx > 0 && compareFn(items[idx], items[parIdx]) < 0) {
      // cur < parent / cur - parent < 0 / swim up
      ;[items[idx], items[parIdx]] = [items[parIdx], items[idx]]
      idx = parIdx
      parIdx = Math.floor((idx - 1) / 2)
    }
  }
  pop() {
    // O(log(N))
    var { items, compareFn } = this
    if (items.length === 0) return undefined
      ;[items[0], items[items.length - 1]] = [items[items.length - 1], items[0]]
    var res = items.pop()
    var idx = 0
    var min = idx
    while (idx < items.length) {
      // sink down
      var leftIdx = idx * 2 + 1
      var rightIdx = leftIdx + 1
      if (
        (leftIdx < items.length && compareFn(items[idx], items[leftIdx]) > 0) ||
        (rightIdx < items.length && compareFn(items[idx], items[rightIdx]) > 0)
      ) {
        if (rightIdx < items.length) {
          min =
            compareFn(items[leftIdx], items[rightIdx]) < 0 ? leftIdx : rightIdx
        } else {
          min = leftIdx
        }
      }
      if (min === idx) break
        ;[items[idx], items[min]] = [items[min], items[idx]]
      idx = min
    }
    return res
  }
  top() {
    return this.items[0]
  }
  size() {
    return this.items.length
  }
}


