function sayMyName(){
    console.log("A");
    console.log("n");
    console.log("u");
    console.log("p");
    console.log("a");
    console.log("m");
}
sayMyName() ;


// more function
function addTwoNumbers(num1, num2){
    var sum = num1 + num2;
    console.log("Sum is: " + sum);
}
addTwoNumbers(5, 7);
addTwoNumbers(10, 15);
addTwoNumbers(20, 25);      
addTwoNumbers(100, 200);

function multiplyTwoNumbers(num1, num2){
    var product = num1 * num2;
    return product;
}
var result1 = multiplyTwoNumbers(5, 7);
console.log("Product is: " + result1);

var result2 = multiplyTwoNumbers(10, 15);
console.log("Product is: " + result2);

var result3 = multiplyTwoNumbers(20, 25);
console.log("Product is: " + result3);

var result4 = multiplyTwoNumbers(100, 200);
console.log("Product is: " + result4);