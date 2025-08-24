import { connect } from "react-redux";
import { fetchProducts } from "./redux";
import { useEffect } from "react";

function ProductsContainer({ productsData, fetchProducts }) {
  // return <div></div>;
  // console.log(props);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h3>Products Container</h3>
      {productsData.loading && <p>Loading...</p>}
      {productsData.error && <p>{productsData.error}</p>}
      {productsData.products && <p>{productsData.products}</p>}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    productsData: state.product,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
