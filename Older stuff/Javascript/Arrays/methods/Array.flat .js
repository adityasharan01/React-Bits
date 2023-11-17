/*
This method creates a new array that contains the elements holden on the
sub-array and flat it into the new array. Notice that, 

! This method will go only one level depth.
*/

const num = [1, 2, [3, 4], [5, 6, 7, [8, 9]]];

let result = num.flat();
console.log(result);

var inputArray = [1, 2, [3, 4, [5, 6]], 9];

// //* Method 1
let result = inputArray.flat(2);
console.log(result);

//* Method 2 | Recursion
let result = [];
function flattenArray(inputArray) {
  inputArray.forEach((element) => {
    if (Array.isArray(element)) {
      flattenArray(element);
    } else {
      result.push(element);
    }
  });
  return result;
}

console.log(flattenArray(inputArray));
