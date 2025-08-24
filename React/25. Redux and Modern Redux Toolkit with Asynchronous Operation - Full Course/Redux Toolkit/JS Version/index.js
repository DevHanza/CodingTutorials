const store = require("./app/store");
const { burgerActions } = require("./features/burger/burgerSlice");
const { fetchProducts } = require("./features/products/productSlice");
const pizzaActions = require("./features/pizza/pizzaSlice").pizzaActions;

// console.log("Initial State", store.getState());

const unsubscribe = store.subscribe(() => {
  // console.log("Update State", store.getState());
});

// store.dispatch(pizzaActions.pizza_order());
// store.dispatch(burgerActions.burger_order());
// unsubscribe();
// store.dispatch(pizzaActions.pizza_order());
// store.dispatch(pizzaActions.pizza_order());

store.dispatch(fetchProducts()).then(() => {
  console.log("Final State after updation", store.getState());
});

// cd 'React\25. Redux and Modern Redux Toolkit with Asynchronous Operation - Full Course\Redux Toolkit\JS Version'
