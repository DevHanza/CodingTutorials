const redux = require("redux");
const createStore = redux.createStore;

const ORDER_PIZZA = "ORDER_PIZZA";

// Action Creator
function orderPizza() {
  return {
    type: ORDER_PIZZA,
  };
}

// Reducer

const initialState = {
  pizzaBase: 100,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_PIZZA:
      return {
        ...state,
        pizzaBase: state.pizzaBase - 1,
      };

    default:
      return state;
  }
};

// STORE -
// Store needs to hold our application state
const store = createStore(reducer);

// 2 - It exposes a method called getState which given your application access to the current state in the store.
console.log("inital State", store.getState());

// 3 - Registers listeners via subscribe(listener)
const unsubscribe = store.subscribe(() => {
  console.log("Updated State", store.getState());
});

// 4 - Allows state to be updated via dispatch(action)
store.dispatch(orderPizza());
store.dispatch(orderPizza());
unsubscribe();
store.dispatch(orderPizza());
