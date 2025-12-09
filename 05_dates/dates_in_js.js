let myDate = new Date()

console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(typeof myDate) 

let myCreatedDate = new Date(2023, 0, 23) // January is 0
console.log(myCreatedDate.toDateString())

let myCreatedDate2 = new Date("2025-12-01T10:20:30Z")
console.log(myCreatedDate2.toDateString())

let myTimeStamp = Date.now()
