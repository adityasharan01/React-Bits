/**** Definition ****
 Fills the array with specified value
 ******************/

/**** Syntax *****
 array.fill(value, start, end);
******************/

const fruits = ["apple", "banana", "orange", "grape", "mango"];

// Override #1
fruits.fill("nuts", 1, 3); // [ 'apple', 'nuts', 'nuts', 'grape', 'mango' ]

// Override #2
fruits.fill("nuts", 1)  // [ 'apple', 'nuts', 'nuts', 'nuts', 'nuts' ]

// Override #3
fruits.fill("nuts")  // [ 'nuts', 'nuts', 'nuts', 'nuts', 'nuts' ]

const arr = Array(6).fill("1") // ["1","1","1","1","1","1"]

console.log(fruits);

// Create an object with empty array

console.log([].fill.call({ length: 4 }, "nuts"));
// { '0': 'nuts', '1': 'nuts', '2': 'nuts', '3': 'nuts', length: 4 }

// Create Using Array()

Array(3).fill(4) // [4, 4, 4]

