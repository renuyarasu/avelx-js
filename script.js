// JavaScript - Embeding Objects And Arrays 
console.clear();

// // member (propery) creation, assigment and deletion

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
};

// car.make = 'Ford '
// car.make += 200;

// car.drive = 'drive'
/* car.model = 'V60';
console.log(car);
 */

// Add function

/* car.stop = function () { return 'stop' }
console.log(car.stop()); */

// delete

car.color = 'red'; // Added color
delete car.color // delete color

console.log(car);
