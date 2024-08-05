import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const ShoppingCart = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      <h1>Shopping Cart:</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is currently empty.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - {item.desc} - ${item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default ShoppingCart;
