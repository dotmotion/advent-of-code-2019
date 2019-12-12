// Intcode Programs

// To run one, start by looking at the first integer (called position 0).
// Here, you will find an opcode - either 1, 2, or 99. The opcode indicates what to do;
// - 1 = add
// - 2 = multiply
// - 99 = stop program

const code1 = (a, b) => a + b;
const code2 = (a, b) => a * b;

// The three integers immediately after the opcode tell you these three positions
// - the first two indicate the positions from which you should read the input values
// - the third indicates the position at which the output should be stored.

var fs = require("fs");

let list = [];
let prog = [];
let stop = false;
let i = 0;

try {
  var data = fs.readFileSync("input.txt", "utf8");
  list = data.toString().split(",");
  prog = list.map(item => Number(item));
  res = [...prog];
} catch (e) {
  console.log("Error:", e.stack);
}

// before running the program, replace position 1 with the value 12 and replace position 2 with the value 2.
// What value is left at position 0 after the program halts?

prog[1] = 12;
prog[2] = 2;

while (stop === false) {
  const comm = prog[i];
  const posA = prog[i + 1];
  const posB = prog[i + 2];
  const posC = prog[i + 3];

  switch (comm) {
    case 1: {
      prog[posC] = code1(prog[posA], prog[posB]);
      break;
    }
    case 2: {
      prog[posC] = code2(prog[posA], prog[posB]);
      break;
    }
    case 99: {
      stop = true;
      break;
    }
    default: {
      console.log("Error!");
      break;
    }
  }

  i = i + 4;
}

console.log("Result: ", prog[0]);
