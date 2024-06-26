const UND = undefined
const INF = Infinity
const T = true
const F = false
const log = console.log
const ff = (end, callback, increment = 1) => {
  return () => {
    if (Array.isArray(end)) {
      const array = end
      end = len(array)
      for (let i = 0; i < end; i += increment) {
        const res = callback(i, array[i])
        if (res !== undefined) return res
      }
    } else {
      for (let i = 0; i < end; i += increment) {
        const res = callback(i)
        if (res !== undefined) return res
      }
    }
  }
}
const f1 = (end, callback, increment = 1) => {
  return () => {
    if (Array.isArray(end)) {
      const array = end
      end = len(array)
      for (let i = 1; i <= end; i += increment) {
        const res = callback(i, array[i])
        if (res !== undefined) return res
      }
    } else {
      for (let i = 1; i <= end; i += increment) {
        const res = callback(i)
        if (res !== undefined) return res
      }
    }
  }
}
const rr = (end, callback, decrement = 1) => {
  return () => {
    if (Array.isArray(end)) {
      const array = end
      end = len(array)
      for (let i = end - 1; i >= 0; i -= decrement) {
        const res = callback(i, array[i])
        if (res !== undefined) return res
      }
    } else {
      for (let i = end - 1; i >= 0; i -= decrement) {
        const res = callback(i)
        if (res !== undefined) return res
      }
    }
  }
}
const r1 = (end, callback, decrement = 1) => {
  return () => {
    if (Array.isArray(end)) {
      const array = end
      end = len(array)
      for (let i = end; i >= 1; i -= decrement) {
        const res = callback(i, array[i])
        if (res !== undefined) return res
      }
    } else {
      for (let i = end; i >= 1; i -= decrement) {
        const res = callback(i)
        if (res !== undefined) return res
      }
    }
  }
}
const mmin = Math.min
const mmax = Math.max
const floor = Math.floor
const ceil = Math.ceil
const ga = (length, initial) => [...Array(length)].fill(initial)

const gm = (row, col, initial) =>
  [...Array(row)].map(() => Array(col).fill(initial))
const asc = (a, b) => a - b
const dsc = (a, b) => b - a
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
const len = (obj) => obj.length ?? obj.size
const lc = 'abcdefghijklmnopqrstuvwxyz'
const uc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const cca = (char, index) => char.charCodeAt(index)
const fcc = (...args) => String.fromCharCode(...args)
const ntl = (...args) => String.fromCharCode(...args.map((v) => v + cca('a')))
const ntu = (...args) => String.fromCharCode(...args.map((v) => v + cca('A')))
const ent = (obj) => Object.entries(obj)

class Heap {
  constructor(compareFn = (a, b) => a - b) {
    this.items = [] // array as complete binary tree
    this.compareFn = compareFn
  }

  push(item) {
    // O(log(N))
    let { items, compareFn } = this
    items.push(item)
    let idx = items.length - 1
    let parIdx = Math.floor((idx - 1) / 2)
    while (idx > 0 && compareFn(items[idx], items[parIdx]) < 0) {
      // cur < parent / cur - parent < 0 / swim up
      ;[items[idx], items[parIdx]] = [items[parIdx], items[idx]]
      idx = parIdx
      parIdx = Math.floor((idx - 1) / 2)
    }
  }

  pop() {
    // O(log(N))
    let { items, compareFn } = this
    if (items.length === 0) return undefined
      ;[items[0], items[items.length - 1]] = [items[items.length - 1], items[0]]
    const res = items.pop()
    let idx = 0
    let min = idx
    while (idx < items.length) {
      // sink down
      const leftIdx = idx * 2 + 1
      const rightIdx = leftIdx + 1
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
