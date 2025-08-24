import { useSelector, useDispatch } from "react-redux";
import { orderPizza } from "./redux";

function HookContainer() {
  const pizzaBase = useSelector((state) => state.pizzaBase); // state.pizza.pizzaBase
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h2 className="text">Pizza Base Available: {pizzaBase} </h2>
      <button className="btn" onClick={() => dispatch(orderPizza())}>
        Order Pizza
      </button>
    </div>
  );
}

export default HookContainer;
