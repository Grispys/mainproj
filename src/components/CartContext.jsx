import React, { createContext, useState } from 'react';

export const CartContext = createContext();
// define all the functions in the cart context and provide them to the other components so they can be freely used
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeCart = (itemToRemove) =>{
    setCartItems((prevItems) =>
    prevItems.filter((_, index) => index !== itemToRemove)
    );
  };



  return (
    <CartContext.Provider value={{ cartItems, addItemToCart, removeCart, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};
