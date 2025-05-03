import { useState, useEffect } from "react";

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  category: string;
  thumbnail: string;
  images: string[];
};

function MyComponent() {
  const [data, setData] = useState<Product | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/product/1");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data ? (
        <div>
          <p>ID: {data.id}</p>
          <p>Title: {data.title}</p>
          <p>Description: {data.description}</p>
          <p>Price: {data.price}</p>
          <p>Discount: {data.discountPercentage}</p>
          <p>Rating: {data.rating}</p>
          <p>Stock: {data.stock}</p>
          <p>Category: {data.category}</p>
          <p>
            Thumbnail:
            <img src={data.thumbnail} />
          </p>

          <p>
            {data.images.map((image) => (
              <img src={image} />
            ))}
          </p>
        </div>
      ) : (
        <div>Loading..</div>
      )}
    </div>
  );
}

export default MyComponent;
