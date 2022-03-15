// JavaScript | this keyword | 3.31.31
console.log(this);

// Constructor Functions

function Apple(x, y, color, score) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.score = score;
}
let result = new Apple(10, 100, 'Red', 1000);
console.log(result); // Apple { x: 10, y: 100, color: 'Red', score: 1000 }