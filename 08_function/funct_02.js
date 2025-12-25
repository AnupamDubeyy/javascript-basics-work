// const num1 = 100 ;
function calculateCartPrice(...num1) {        // rest parameter
    return num1 ;
}
console.log(calculateCartPrice(200, 400, 600)) ;

const user = {
    username: "Anupam" ,
    profit: 1000000,
}

function handleObject(anyObject) {
    console.log("username is: " + anyObject.username) ;
    console.log("profit is: " + anyObject.profit) ;
}

handleObject(user) ;

function greetUser(username = "Guest") {      // default parameter
    console.log("Hello, " + username) ;
}

greetUser("Anupam") ;
greetUser() ;

function sumAllNumbers(...numbers) {      // rest parameter
    let sum = 0 ;
    for(let i = 0; i < numbers.length; i++) {
        sum += numbers[i] ;
    }
    return sum ;
}

console.log("Sum is: " + sumAllNumbers(10, 20, 30)) ;
console.log("Sum is: " + sumAllNumbers(5, 15, 25, 35, 45)) ;
console.log("Sum is: " + sumAllNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)) ;