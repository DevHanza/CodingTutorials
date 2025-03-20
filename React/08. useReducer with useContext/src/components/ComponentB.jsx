import { useContext } from "react";
import { CountContext } from "../App";

export function ComponentB() {
  const count = useContext(CountContext);

  console.log(count.count.count)

  return (
    <div className="box">
      <h3>Component B</h3>

    <p>Count: {count.count.count}</p>

      <button onClick={() => count.countDisptach("increase")}>Add 1+</button>
      <button onClick={() => count.countDisptach("decrease")}>Remove 1-</button>
      <button onClick={() => count.countDisptach("reset")}>Reset</button>
    </div>
  );
}
