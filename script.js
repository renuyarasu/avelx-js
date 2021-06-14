// JavaScript - Functions

// makeCoffee
function makeCoffee(sugar, milk) {
  let instructions = "Boil Water";
  instructions += " pour into the cup,";
  instructions += " add coffee granules";
  instructions += " add " + sugar + " spoons of sugar";
  instructions += " milk " + milk + "% milk";
  return instructions;
}
makeCoffee();

console.log(makeCoffee(2, 22));
