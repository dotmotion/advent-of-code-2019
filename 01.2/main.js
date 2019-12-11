// To find the fuel required for a module, take its mass, divide by three, round down, and subtract 2

var fs = require("fs");

let arr = [];
let sum = 0;
let fuelArr = [];

try {
  var data = fs.readFileSync("input.txt", "utf8");
  arr = data.toString().split("\n");
} catch (e) {
  console.log("Error:", e.stack);
}

// for (let i = 0; i < arr.length - 1; i++) {
//   let fuel = Math.floor(arr[i] / 3) - 2;
//   sum = sum + fuel;
// }

function modCalculator(mass) {
  let fuel = Math.floor(mass / 3) - 2;
  console.log(`${mass} / 3 - 2 = ${fuel}`);
  fuelArr.push(fuel);
  if (fuel < 3) {
    return;
  }
  return modCalculator(fuel);
}

modCalculator(74767);

// console.log("Fuel required:", sum);
