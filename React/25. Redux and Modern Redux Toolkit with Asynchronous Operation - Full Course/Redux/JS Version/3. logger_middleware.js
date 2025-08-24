const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

const applyMiddleware = redux.applyMiddleware;

// Redux Logger
const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();

// Actions
const ORDER_PIZZA = "ORDER_PIZZA";
const ORDER_BURGER = "ORDER_BURGER";

function orderPizza() {
  return {
    type: ORDER_PIZZA,
  };
}

function orderBurger() {
  return {
    type: ORDER_BURGER,
  };
}

const initialStateForPizza = {
  pizzaBase: 100,
};

const initialStateForBurger = {
  burgerBase: 200,
};

const reducerPizza = (state = initialStateForPizza, action) => {
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

const reducerBurger = (state = initialStateForBurger, action) => {
  switch (action.type) {
    case ORDER_BURGER:
      return {
        ...state,
        burgerBase: state.burgerBase - 1,
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  pizza: reducerPizza,
  burger: reducerBurger,
});
const store = createStore(rootReducer, applyMiddleware(logger));

console.log("inital State", store.getState());

const unsubscribe = store.subscribe(() => {
  //   console.log("Updated State", store.getState());
});

store.dispatch(orderPizza());
store.dispatch(orderPizza());
store.dispatch(orderBurger());
unsubscribe();
store.dispatch(orderPizza());
