// JavaScript - Embeding Objects And Arrays 
console.clear();

// Array Methods
var arr = [
  'string',
  ['embed', 200],
  { car: 'Ford' },
  function () {
    return 'Drive';
  }
]

// Array.prototype.push()
// The push() method adds one or more elements to the end of an array and returns the new length of the array.

arr.push('string', 20, 20.02, function () { }, {}, [])
console.log(arr);
console.log(arr.length);