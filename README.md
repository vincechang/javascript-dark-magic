# JavaScript Dark Magic

> "The Dark Side of the Force is a pathway to many abilities some consider to be unnatural."
  -- Chancellor Palpatine

## Prelude

JavaScript as a programming language has its own defects. Even though JavaScript boasts features like closures that can
offer some advantages to JavaScript users in certain contexts, the verbose syntax and peculiarities inherent to the
language can lead users to become distracted during high-pressure situations like competitive problem-solving, shifting
their focus from macroscopic problem-solving to lower-level tasks such as recalling methods or typing out code. The
author has witnessed on multiple occasions participants complaining that the competition turns into a typing contest,
while those who excel often solve three problems in just ten minutes.


The issue isn't about typing speed. Certainly, those who can type at a blazing 200 words per minute will have a certain
advantage, but when it comes to problem-solving, the key is to not let lower-level distractions affect focus. Is it fair
to use pre-implemented templates in competitions, such as pre-implemented heaps or union-find forests? Here, we won't
make moral judgments, but rather, we'll experiment with this idea to explore it further.


Please note that the implementation itself is experimental and has not undergone rigorous testing. Some aspects may be
anti-patterns.

## Usage

Copy and paste the minimized code wherever you want to use it.

## Ars Utility

### Abbreviations

```javascript
UND           // euqals to `undefined`
INT           // equals to `Infinity`
log('hello')  // equals to `console.log()`
T             // equals to `true`
F             // equals to `false`
mmin()        // equals to `Math.min()`
mmax()        // euqals to `Math.max()`
floor()       // euqals to `Math.floor()`
ceil()        // euqals to `Math.ceil()`
```

### Loop

A concise way to iterate through the entire array:

```javascript
for(var i in array) {
  log(array[i])
}
```

For any reason, if you want to use a callback to do this:

```javascript
ff(3, i => (
  log(i)
))() // 0, 1, 2

rr(3, i => (
  log(i)
))() // 2, 1, 0

ff(N, i => (
  ff(N, j => {
    log(i, j)
  })()
))() // 0 0, 0 1, 1 0, 1 1, 2 0, 2 1
```

If the first parameter `end` is an object (such as an array), the end will be the length of the object.

```javascript
const array = [1, 3, 5]
ff(array, (i, v) => (
  log(i, v)
)) // 0 1, 1 3, 2 5 
```

The Loop callback can not be break. But it can be returned.

```javascript
var ret =
ff(3, i => (
  ff(2, j => {
    if(i === 1 && j === 1) return 'break'
  })()
))()
log(ret) // 'break'

var ret =
ff(3, i => (
  ff(2, j => {
    if(i === 1 && j === 1) return 'return value'
  })()
))()
if(ret !== UND) return ret
```

## Ars Array

### Generate

```javascript
var array = ga(4, 0)
// [0,0,0,0]

var matrix = gm(4, 3, 0)
// [0, 0, 0]
// [0, 0, 0]
// [0, 0, 0]
// [0, 0, 0]
```

### Sorting

```javascript
[1,3,4,2].sort(asc) // [1,2,3,4]
[1,3,4,2].sort(dsc) // [4,3,2,1]
```

## This is No End

The story will continue to be told.
