import { useReducer } from "react";

const INITIAL_VALUE = {
  count: 0,
};

const ACTIONS = {
  increment: "increment",
  decrement: "decrement",
};

function countReducer(state, action) {
  switch (action.type) {
    case ACTIONS.increment:
      // console.log(state);
      return { count: state.count + 1 };
    case ACTIONS.decrement:
      // console.log(state);
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(countReducer, INITIAL_VALUE);

  function incrementBtn() {
    dispatch({ type: ACTIONS.increment });
  }

  function decrementBtn() {
    dispatch({ type: ACTIONS.decrement });
  }

  return (
    <div>
      <p>{state.count}</p>

      <button onClick={incrementBtn}>+</button>
      <button onClick={decrementBtn}>-</button>
    </div>
  );
}
