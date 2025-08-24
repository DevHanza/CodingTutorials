const redux = require("redux");
const createStore = redux.createStore;

const applyMiddleware = redux.applyMiddleware;
const thunk = require("redux-thunk").thunk;
const axios = require("axios");

// Actions
const FETCH_REQUEST = "FETCH_REQUEST";
const FETCH_SUCCESS = "FETCH_SUCESS";
const FETCH_ERROR = "FETCH_ERROR";

// Action Creators
function fetchRequest() {
  return {
    type: FETCH_REQUEST,
  };
}

function fetchSuccess(products) {
  return {
    type: FETCH_SUCCESS,
    payload: products,
  };
}

function fetchError() {
  return {
    type: FETCH_ERROR,
  };
}

// State
const intialState = {
  loading: false,
  products: [],
  error: false,
};

// Reducers

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    case FETCH_ERROR:
      return {};
    default:
      return state;
  }
};

// Thunk Action Creator

const fetchProducts = () => {
  return function (dispatch) {
    dispatch(fetchRequest());

    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        // res.data
        const products = res.data.map((product) => product.title);
        dispatch(fetchSuccess(products));
      })
      .catch((error) => {
        dispatch(fetchError());
      });
  };
};

// Creating a Store
const store = createStore(reducer, applyMiddleware(thunk));

store.subscribe(() => console.log(store.getState()));

store.dispatch(fetchProducts());

// cd 'React\25. Redux and Modern Redux Toolkit with Asynchronous Operation - Full Course\Redux\JS Version'
