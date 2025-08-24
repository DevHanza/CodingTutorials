import { fetchProducts } from "./redux";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function ProductsContainerWithHooks() {
  const productsData = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div>
      <h3>Products Container With Hooks</h3>
      {productsData.loading && <p>Loading...</p>}
      {productsData.error && <p>{productsData.error}</p>}
      {productsData.products && <p>{productsData.products}</p>}
    </div>
  );
}

export default ProductsContainerWithHooks;
