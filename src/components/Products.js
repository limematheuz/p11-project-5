import React, { useState, useEffect } from "react";
import "./Products.css";

const url = "https://deca-api-server-c2ce4a810fea.herokuapp.com/articles";

function Products() {
  const [productData, setProductData] = useState({ products: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("We couldnt load JSON file.");
        }
        const data = await response.json();
        setProductData({ products: data });
      } catch (error) {
        console.error("Failed to charge the JSON file.", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <div key={"products"}>
        <h2>Top Ventas</h2>
        <ul className="carousel">
          {productData.products.slice(0,4).map((product, index) => (
            <li class="card" key={index}>
              <div className="cardContent">
                <img class="imageItem" src={product.poster_img} />
                <p className="price">{product.price}€</p>
                <p className="brand">{product.brand}</p>
                <p className="name">{product.name}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Products;
