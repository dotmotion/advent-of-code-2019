// To find the fuel required for a module, take its mass, divide by three, round down, and subtract 2
// for each module mass, calculate its fuel and add it to the total.
// Then, treat the fuel amount you just calculated as the input mass and repeat the process,
// continuing until a fuel requirement is zero or negative.

var fs = require("fs");

let arr = [];
let fuelArr = [];

try {
  var data = fs.readFileSync("input.txt", "utf8");
  arr = data.toString().split("\n");
} catch (e) {
  console.log("Error:", e.stack);
}

const arrSum = arr => arr.reduce((a, b) => a + b, 0);

const modCalculator = mass => {
  if (mass <= 0) {
    return;
  }
  let fuel = Math.floor(mass / 3) - 2;
  if (fuel < 0) {
    fuel = 0;
  }
  // console.log(`${mass} / 3 - 2 = ${fuel}`);
  fuelArr.push(fuel);
  return modCalculator(fuel);
};

for (let i = 0; i < arr.length - 1; i++) {
  // console.log("- - - - - - - - - -");
  modCalculator(arr[i]);
}

console.log("Total fuel:", arrSum(fuelArr));
