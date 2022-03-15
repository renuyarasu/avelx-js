// JavaScript | this keyword | 3.31.31
console.clear();

// Constructor - Prototypal inheritance

function Apple(color, weight) {
    this.color = color;
    this.weight = weight;
}
Apple.prototype = {
    eat: () => 'Eat the Apple',
    throw: () => 'Throw the Apple',
}
Apple.prototype.eat = () => 'Not eat the Apple'
let apple_01 = new Apple('Red', 33);
let apple_02 = new Apple('Green', 66);
let apple_03 = new Apple('Yellow', 99);

console.log(apple_01.eat());