import React, { useState } from 'react';
import ProductsHome from './ProductsHome';
import ShoppingCart from './ShoppingCart';


// allows components to directly interact with eachother and share variable values
const Parent = () => {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  return (
    <div>
      <ProductsHome onAddItem={addItemToCart} />
      <ShoppingCart items={cartItems} />
    </div>
  );
};

export default Parent;
