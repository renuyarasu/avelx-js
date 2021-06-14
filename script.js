// JavaScript - Embeding Objects And Arrays
const car = {
  make: "Volvo",
  speed: 160,
  engine: {
    size: 2.0,
    make: "BMW",
    fuel: "Petrol",
    pistons: [
      {
        maker: "BMW",
        maker: "Baleno",
      },
    ],
  },
  drive: function () {
    return "Drive";
  },
};

const array = [
  "string",
  100,
  ["embed", 200],
  { car: "Ford" },
  function () {
    return "Drive";
  },
];

console.log(car);
