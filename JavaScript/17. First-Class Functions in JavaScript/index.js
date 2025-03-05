// Javascript Currying

function printTotal(sign) {
  return function (amount) {
    console.log(`${sign}${amount}`);
  };
}

const usTotal = printTotal("$");
usTotal(2);
usTotal(10000);
usTotal(2564);

const ukTotal = printTotal("£");
ukTotal(8);
ukTotal(1000);
ukTotal(19);

// Function inside of data structures

const add = (a, b) => a + b;
const substract = (a, b) => a - b;

const operations = [add, substract];

operations[0](1, 3);

console.log(operations[0](1, 3));

// Self-Invoking Functions

(function () {
  let x = "Hello!!"; // I will invoke myself
  console.log(x + " I'm a self invoking anonymous function.");
})();
