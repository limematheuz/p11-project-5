import React, { useState, useEffect } from "react";
import "./Products.css"


const url = "http://localhost:9999/products"

function Products(){
    const [productData, setProductData] = useState({products: [] });

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await fetch(url);
                if (!response.ok) {

                    throw new Error("We couldnt load JSON file.");
                }
                const data = await response.json();
                setProductData({products:data});
            } catch (error) {
                console.error("Failed to charge the JSON file.", error);
            }
        };
        fetchData();
    },[]);

    return (
        <div>
            <div key={"products"}>
                <h2>Top Ventas</h2>
                <div class="container">
                    {productData.products.map((product, index) =>(
                        <div class="card" key={index}>
                            <img class="imageProduct" src={product.imagen}/>
                            <p id="precio">{product.precio}€</p>
                            <p id="description">{product.nombre}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
    

export default Products;