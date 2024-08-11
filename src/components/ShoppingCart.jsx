import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import '../App.css';


const ShoppingCart = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  
// remove item function
  const removeItem = (itemToRemove) => {
    const removeCart = cartItems.filter((_, index)=> index !== itemToRemove);
    setCartItems(removeCart)
    
  }
  return (
    <div>
      {/* if shopping cart empty, return this text */}
      <h1>Shopping Cart:</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is currently empty.</p>
      ) : ( 
        // else, return the item with its details
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - {item.desc} - ${item.price} <br/><button className="removeButton"onClick={() =>removeItem(index)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default ShoppingCart;
