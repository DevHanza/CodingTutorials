import React, { useReducer ,createContext } from "react";
import { ComponentA } from "./components/ComponentA";

export const CountContext = createContext();

function countReducer(state, actions) {
  // console.log(actions)
    switch(actions) {
      case "increase": {
        return {count: state.count + 1};
      }
      case "decrease": {
        return {count: state.count - 1};
      }
      case "reset": {
        return {count: 0}
      }
      default:
        return state;
    }
}


export default function App() {

  const [count, disptach] = useReducer(countReducer, { count: 0 });

  return (
    <>
      <h1>Home</h1>
      <CountContext.Provider value={{ count: count, countDisptach: disptach }}>
        <ComponentA />
      </CountContext.Provider>
    </>
  );
}
