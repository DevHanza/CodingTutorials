// Callback Functions

function orderPizza(callback) {
  setTimeout(() => {
    const pizza = "🍕";
    callback(pizza);
  }, 2000);
}

function pizzaReady(pizza) {
  console.log(`Eat the ${pizza}`);
}

orderPizza(pizzaReady);
console.log(`Call Qoli`);

// Callback Hell

// Imagine you're making a sandwich. You need to do three things:
// 1. Get the bread.
// 2. Get the cheese.
// 3. Put the cheese on the bread.
// 4. Here's how you might do it with callbacks:

function getBread(callback) {
  setTimeout(() => {
    const bread = "Sourdough";
    callback(bread);
  }, 2000);
}

function getCheese(callback) {
  setTimeout(() => {
    const cheese = "Cheddar";
    callback(cheese);
  }, 1000);
}

function makeSandwich(bread, cheese) {
  console.log("Sandwich made with" + bread + "and" + cheese);
}

getBread((bread) => {
    getCheese((cheese) => {
      makeSandwich(bread, cheese);
    });
  });

// (by gemini.google.com)
