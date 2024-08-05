import React, { useState } from 'react';
import ProductsHome from './ProductsHome';
import ShoppingCart from './ShoppingCart';

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
