// The every() method tests whether all elements in the array pass the test implemented
// by the provided function

// Note: For an empty array, result is true
// Note: Iteration stops immediately after a falsy return expression ( with or w/o array modification )


const fruits = ["apple", "banana", "orange"];

const thisValue = {
  cat: "fluffy"
};

const isFruitString = (fruit, index, array) => {
  console.log(thisValue);
  console.log(index);
  console.log(array);

  return typeof fruit === 'string'

}

const result = fruits.every(isFruitString, thisValue)

console.log(result)


// Iteration happens only 3 times even if you append more items in the callback

const fruits = ["apple", "banana", "orange"];

const result = fruits.every((fruit, index, arr) => {
  arr.push("grapes" + index)
  console.log(arr)
  return typeof fruit === 'string'
})

console.log(result);

//-----------------------------------------------------------

/* Output

[ 'apple', 'banana', 'orange', 'grapes0' ]
[ 'apple', 'banana', 'orange', 'grapes0', 'grapes1' ]
[ 'apple', 'banana', 'orange', 'grapes0', 'grapes1', 'grapes2' ]
true

*/


// Iteration stops if all elements are popped off

const fruits = ["apple", "banana", "orange"];

const result = fruits.every((fruit, index, arr) => {
  arr.pop();
  console.log(arr)
  return typeof fruit === 'string'
})

console.log(result);

//-----------------------------------------------------------

/* Output

[ 'apple', 'banana' ]
[ 'apple' ]
true

*/

