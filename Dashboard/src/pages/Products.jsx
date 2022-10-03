import { useState, useEffect } from "react";

export function Products() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    let url = "http://localhost:3000/api/products";
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.json();
  };

  useEffect(() => {
    getProducts().then((product) => {
      setProducts(product);
    });
  }, []);

  return (
    <>
      <div>{console.log("asd", products[0])}</div>
    </>
  );
}
