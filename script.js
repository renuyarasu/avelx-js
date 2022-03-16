// JavaScript | this keyword | 3.31.31
console.clear();

// Create & Append, InsertBefore & InsertAfter

let element = document.createElement('div');
element.style.cssText = 'width:200px;height:50px;background:green';
element.onclick = ()=> alert('INDIA');

// document.body.appendChild(element);
let target = document.getElementById('goldenrod');
document.body.insertBefore(element, target)