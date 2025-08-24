import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../state/store";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../state/counter/counterSlice";

function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>{count}</h2>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Increment</button>
        <button onClick={() => dispatch(incrementByAmount(10))}>
          Increment 10+
        </button>
      </div>
    </div>
  );
}

export default Counter;
