import { useEffect, useState } from "react";
import { useParams } from "react-router";

function Product() {
  const { id } = useParams(); // grabs :id from URL
  const [product, setProduct] = useState(null);

  // Fetch Product from API
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setProduct(json);
        console.log(json);
      })
      .catch((err) => console.error("Fetch Error:", err));

    console.log(product);
  }, [id]);

  if (!product) return <p>Loading...</p>;
  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.image} alt="" width="150" />
      <p>
        <b>Price:</b> ${product.price}
      </p>
      <p>{product.description}</p>
    </div>
  );
}

export default Product;
