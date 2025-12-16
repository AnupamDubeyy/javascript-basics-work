const marvel_heroes = ["iron man", "captain america", "black widow", "thor", "hulk"];

const dc_heroes = ["batman", "superman"];

marvel_heroes.push(dc_heroes); // adds dc_heroes array as the last element of marvel_heroes

console.log(marvel_heroes);     // nested array
console.log(marvel_heroes[3]);

marvel_heroes.concat(dc_heroes) // does not change the original array
console.log(marvel_heroes);

const all_heores = [...marvel_heroes, ...dc_heroes]; // spread operator
console.log(all_heores);

const another_array =[1,2,3, [3,4,5], [7,8],[9,0],77];
const real_another_array = another_array.flat(Infinity); // flattens nested arrays
console.log(real_another_array);

console.log(Array.isArray(marvel_heroes)); // checks if it's an array
console.log(Array.isArray("hello"));        // checks if it's an array
console.log(Array.isArray(another_array));  // checks if it's an array
console.log(Array.isArray(real_another_array)); // checks if it's an array
console.log(Array.from("hello"));       // creates an array from iterable