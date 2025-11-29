console.log(Math)
console.log(Math.abs(-4))          // absolute value
console.log(Math.round(4.6))       // rounds to nearest integer
console.log(Math.ceil(4.2))        // rounds up
console.log(Math.floor(4.9))       // rounds down
console.log(Math.min(0, 150, 30, 20, -8, -200))  // returns min value
console.log(Math.max(0, 150, 30, 20, -8, -200))  // returns max value
console.log(Math.random())          // returns random number between 0 and 1
console.log(Math.random() * 10 + 1) // random number between 1 and 10
console.log(Math.floor(Math.random() * 100)) // random number between 0 and 99
console.log(Math.sqrt(64))         // square root

const min= 1
const max = 10

console.log(Math.floor(Math.random() *(max - min + 1)) + min) // random number between min and max (inclusive)
