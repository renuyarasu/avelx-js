// JavaScript - Embeding Objects And Arrays 
console.clear();

// Arrays Modifications
var arr = [
  'string',
  ['embed', 200],
  { car: 'Ford' },
  function () {
    return 'Drive';
  }
]

// Array Methods
console.log(arr.shift()); //remove first element
console.log(arr.pop()); //remove last element

console.log(arr);