// JavaScript - Embeding Objects And Arrays 
console.clear();

// computed member access operator

const car = {
  make: "Volvo",
  speed: 160,
  engine: {
    size: 2.0,
    make: "BMW",
    fuel: "Petrol",
    pistons: [
      { maker: "BMW" },
      { maker: "Baleno" },
    ],
  },
  drive: function () {
    return "Drive";
  },
};


// console.log(car.engine.pistons[0].maker); // BMW
// console.log(car['make']); // Volvo
// console.log(car['engine'] ['make']); // BMW
// console.log(car['engine'] ['pistons'][1]['maker']); //Baleno 

//Variablies
// let pointer = 'make';
// console.log(car[pointer]); // Volvo

let pointer = 'speed';
console.log(car[pointer]); //160