// JavaScript | this keyword | 3.31.31
console.clear();

// Understanding the Document Object Model (DOM)
// Targeting DOM Elements

let element = document.getElementById('title');

/* element.style.backgroundColor = 'burlywood';
element.style.color = 'brown';
element.style.padding='20px'; */

element.style.cssText = 'background: burlywood; color:brown;padding:20px';
element.style.cssText += 'margin-bottom: 100px'

console.log(element);