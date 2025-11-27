let text1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let length = text1.length
console.log(length)

let text2 = "HELLO WORLD"
let char = text2.charAt(0)
console.log(char)

let text3 = "HELLO WORLD"
let charCode = text3.charCodeAt(0)
console.log(charCode)

const name = "W3Schools"
let letter = name.at(2)
console.log(letter)

let str = "Apple, Banana, Kiwi"
let part = str.substr(7, 6)
console.log(part)

let text4 = "Hello world!"
let result = text4.isWellFormed()
console.log(result)

let text5 = "      Hello World!     "
let text6 = text5.trim()
console.log(text6)

let text7 = "5"
let padded = text7.padStart(4,"x")
console.log(padded)

let numb = 5;
let text8 = numb.toString();
let padded2 = text8.padEnd(4,"0");
console.log(padded2)

text2.split(",")    // Split on commas
text2.split(" ")    // Split on spaces
text2.split("|") 
console.log(text2)