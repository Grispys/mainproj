import React from 'react';
import { render, screen } from '@testing-library/react';
import { CartContext } from '../components/CartContext';
import Parent from '../components/Parent';

// tests that the parent component is taking in both shoppingcart and productshome, and they're interacting with eachother
const mockCartContextValue = {
  cartItems: [],
  setCartItems: jest.fn(),
  addItemToCart: jest.fn(),
};

test('renders ProductsHome and ShoppingCart components', () => {
  render(
    <CartContext.Provider value={mockCartContextValue}>
      <Parent />
    </CartContext.Provider>
  )
  expect(screen.getByText(/Thank you for shopping with us./i)).toBeInTheDocument()
  expect(screen.getByText(/Shopping Cart:/i)).toBeInTheDocument()
})
