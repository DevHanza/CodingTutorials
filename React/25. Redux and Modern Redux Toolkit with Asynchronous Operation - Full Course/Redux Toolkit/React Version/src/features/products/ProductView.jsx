import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./productSlice";

function ProductView() {
  const product = useSelector((state) => state.product);
  console.log(product);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <h2>Products List</h2>
      {product.loading && <h4>Loading...</h4>}
      {!product.loading && product.error && <h2>Error: {product.error}</h2>}

      {/* {product.products} */}

      <ul>
        {product.products.map((product) => {
          return <li key={product}>{product}</li>;
        })}
      </ul>
    </div>
  );
}

export default ProductView;
