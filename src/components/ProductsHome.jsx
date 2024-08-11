import React, { useEffect, useState, useContext } from 'react';
import { CartContext } from './CartContext';
import '../App.css';

const ProductsHome = () => {
  const [products, setProducts] = useState([]);
  const { addItemToCart } = useContext(CartContext);

  // yoink the item details from my json server ***REMEMBER TO SWAP THE IMAGE HOSTING TO IMGUR***
  useEffect(() => {
    const loadProductJson = async () => {
      try {
        const response = await fetch("http://localhost:5000/items");
        if (!response.ok) {
          throw new Error(`Hahaha! Whoops! Current Status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("There was an error:", error);
      }
    };
    loadProductJson();
  }, []);

  return (
    // display each product from the json along with it's image, name, and price
    <div className='Body-stuff'>
      {products.map((product, index) => (
        <div className='imgBox' key={index}>
          <button onClick={() => addItemToCart(product)}>
            <img src={product.image} height={150} width={150} alt='product display' />
          </button>
          <div className='nameBox'>
            <p>{product.name}</p>
          </div>
          <div className='priceBox'>
            <p>${product.price}</p>
          </div>
        </div>
      ))}

      <p>Thank you for shopping with us.</p>
    </div>
  );
};

export default ProductsHome;
