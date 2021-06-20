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

// Array.prototype.splice()
// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. To access part of an array without modifying it, see slice().

arr.splice(2, 0, 'string', 20, 20.02, function () { }, {}, []); // from 0 index
arr.splice(2, 3, 'string', 20, 20.02, function () { }, {}, []); // from 3 index
console.log(arr);
console.log(arr.length);