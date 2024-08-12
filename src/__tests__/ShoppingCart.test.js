import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ShoppingCart from '../components/ShoppingCart';
import { CartContext } from '../components/CartContext';

//create mockup like in the other test so this works properly
test('shopping cart has been rendered with items, and an item is filtered out when button clicked', () => {

  const mockCartItems = [
    { name: 'test 1', desc: 'im a testy', price: 100000 },
    { name: 'test 2', desc: 'im also testy', price: 20000000 },
  ];
  const mockSetCartItems = jest.fn();

  render(
    <CartContext.Provider value={{ cartItems: mockCartItems, setCartItems: mockSetCartItems }}>
      <ShoppingCart />
    </CartContext.Provider>
  )

  //check if test items are rendered properly before removing any of them
  expect(screen.getByText(/test 1/)).toBeInTheDocument()
  expect(screen.getByText(/test 2/)).toBeInTheDocument()

  //test check clicking the button
  fireEvent.click(screen.getAllByText(/Remove/i)[0]); //can change the number after remove to test if the other items can be removed properly

  expect(mockSetCartItems).toHaveBeenCalledWith([
    { name: 'test 2', desc: 'im also testy', price: 20000000 },
  ])
})