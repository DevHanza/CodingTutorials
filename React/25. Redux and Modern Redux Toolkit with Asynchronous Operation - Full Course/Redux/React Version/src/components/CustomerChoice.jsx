import { useState } from "react";
import { orderBurger } from "./redux/index.js";
import { connect } from "react-redux";

function CustomerChoice(props) {
  // console.log(props);

  const [number, setNumber] = useState(1);

  return (
    <div className="container">
      <h2 className="text">Burger Buns Available: {props.burgerBuns}</h2>
      <input
        type="text"
        className="input-field"
        placeholder="Enter your number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button className="btn" onClick={() => props.orderBurger(number)}>
        Order Burger
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    burgerBuns: state.burger.burgerBuns,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    orderBurger: (num) => dispatch(orderBurger(num)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomerChoice);
