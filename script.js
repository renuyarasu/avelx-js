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


// Array.prototype.unshift()
// The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
arr.unshift('string', 20, 20.02, function () { }, {}, [])
console.log(arr);
console.log(arr.length);