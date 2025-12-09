const myArr = [1, 2, 3, 4, 5];
const myHeroes = ['Batman', 'Superman', 'Wonder'];

const myArr2 = new Array(6, 7, 8, 9, 10);

console.log(myArr);
console.log(myHeroes);
console.log(myArr2); 

myArr.push(6);
myArr.unshift(7);
console.log(myArr); 

console.log(myArr.includes(3));
 
console.log(myArr.indexOf(4));
console.log(myArr.indexOf(10));

// slice
const mynArr = myArr.slice(1, 4);
console.log("A",mynArr);

// splice
myArr.splice(2, 1); 
console.log("B", myArr);

// splice
const mynArr2 = myArr.splice(1, 4);
console.log("C",mynArr2); 
console.log(myArr);