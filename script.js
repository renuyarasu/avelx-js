// JavaScript | this keyword | 3.31.31
console.clear();

// If Statements
let carsleft = 1;
let carsright = 0;
let greenMan = 'yes';

if (greenMan === 'yes') {
    console.log('Cross The Road!');
}
else if (greenMan === 'yes' && carsleft === 0 && carsright === 0) {
    console.log('All clear, Cross the road!');
}
else {
    console.log('Stay there!');
}