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


