// JavaScript | this keyword | 3.31.31
console.log(this);

// Constructor Functions

function Apple(x, y, color, score) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.score = score;
}
let apple_01 = new Apple(10, 100, 'Red', 1000);
let apple_02 = new Apple(10, 100, 'Green', 1000);
let apple_03 = new Apple(10, 100, 'Pink', 1000);


console.log(apple_01); // Apple { x: 10, y: 100, color: 'Red', score: 1000 }
console.log(apple_02); // Apple { x: 10, y: 100, color: 'Green', score: 1000 }
console.log(apple_03); // Apple { x: 10, y: 100, color: 'Pink', score: 1000 }