const score = 400 
console.log(score)

const balance = new Number(100)          //creates a Number object
console.log(balance)
console.log(balance.toString().length)   // .length shows number of characters
console.log(balance.toFixed(2))         //used for formatting currency

const otherNumber = 122.342 
console.log(otherNumber.toPrecision(4))  //limits total number of digits 

const hundreds = 1000000 
console.log(hundreds.toLocaleString('en-IN')) //formats number based on locale

let a = "25";

console.log(Number(a));   
console.log(parseInt(a)); 
console.log(parseFloat("12.45")); 