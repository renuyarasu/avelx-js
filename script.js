// JavaScript | this keyword | 3.31.31
console.log(this);

// Constructor Functions
// The constructor method is a special method of a class for creating and initializing an object instance of that class.
function Cycle(color, price, model, brand) {
    this.color = color;
    this.price = price;
    this.model = model;
    this.brand = brand;
}
let cycle_01 = new Cycle('Red', 5000, 'M_01', 'Hero');
let cycle_02 = new Cycle('Blue', 10000, 'M_02', 'Atlas');
let cycle_03 = new Cycle('Red', 15000, 'M_01', 'Montra');
let cycle_04 = new Cycle('Red', 20000, 'M_01', 'Hercules');
let cycle_05 = new Cycle('Red', 25000, 'M_01', 'Firefox');

console.log(cycle_01);
console.log(cycle_02);
console.log(cycle_03);
console.log(cycle_04);
console.log(cycle_05);