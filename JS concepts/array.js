// delare array way - 01
const numbers = [0, 1, 2, 3, 4, 5];

//declare array way - 02
const numbers2 = new Array(10, 20, 30, 40);

//to find the index
index = numbers.indexOf(0);
console.log(index);
//If we look for a element which is not available in the array then the indexof function returns "-1" which can be used in "If-else" statements.

//adding at the end
numbers.push(6);
console.log(numbers);

//removing from the end
numbers.pop();
console.log(numbers);

//adding in the starting
numbers.unshift(-1);
console.log(numbers);

//removing from the start
numbers.shift(); //not a memory efficient way ❗
console.log(numbers);

//for each method
numbers.forEach((num) => console.log(num));

//interesting result
let testing = numbers.forEach((num) => num * 2); //foreach returns an undefined.
console.log(testing);