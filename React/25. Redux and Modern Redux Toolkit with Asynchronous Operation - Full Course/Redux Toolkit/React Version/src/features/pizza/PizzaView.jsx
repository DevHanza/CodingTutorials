import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { pizza_order, customer_choice } from "./pizzaSlice";

function PizzaView() {
  const pizzaBase = useSelector((state) => {
    return state.pizza.pizzaBase;
  });

  const dispatch = useDispatch();
  const [number, setNumber] = useState();

  return (
    <div>
      <h2>Number of Pizza Base: {pizzaBase}</h2>
      <small>Get FREE Burger for Every Pizza your order!</small>
      <br />
      <br />
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => dispatch(pizza_order())}>Order Pizza</button>
      <button onClick={() => dispatch(customer_choice(number))}>
        Customer Choice
      </button>
    </div>
  );
}

export default PizzaView;
