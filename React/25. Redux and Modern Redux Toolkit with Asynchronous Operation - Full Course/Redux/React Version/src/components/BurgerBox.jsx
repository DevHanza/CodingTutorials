import { orderBurger } from "./redux/index.js";
import { connect } from "react-redux";

function BurgerBox(props) {
  // console.log(props);

  return (
    <div className="container">
      <h2 className="text">Burger Buns Available: {props.burgerBuns}</h2>
      <button className="btn" onClick={props.orderBurger}>
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
    orderBurger: () => dispatch(orderBurger()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBox);
