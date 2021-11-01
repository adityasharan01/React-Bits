//MAIN LOGIC BEHIND THE SORT COMPARATOR
arr.sort(function(a,b){
  if(a.item1 == b.item1){
    return a.item2 > b.item2 ? 1 : a.item2 < b.item2 ? -1 : 0;
  }

  return a.item1 > b.item1 ? 1 : -1;
});

//EXAMPLE TO IMPLEMENT THE SORT FUNCTION
var a=[{name:"aditya",age:24},{name:"ankur",age:26},{name:"harsh",age:25}]

console.log(a.sort(function(a,b){
   if(a.age == b.age){
    return a.age > b.age ? 1 : a.age < b.age ? -1 : 0;
  }

  return a.age > b.age ? 1 : -1;
}))
