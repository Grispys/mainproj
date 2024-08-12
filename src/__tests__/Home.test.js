import React from "react";
import { render, screen} from '@testing-library/react';
import Home from "../components/Home";
import ProductsHome from "../components/ProductsHome";
import { CartContext } from "../components/CartContext";


test('renders ProductsHome component', () => {

    const mockCartContextValue = {
      addItemToCart: jest.fn(),
      cartItems: [],           
    }
    
    // mock the components needed because it fails otherwise
    render(
      <CartContext.Provider value={mockCartContextValue}>
        <Home />
      </CartContext.Provider>
    )
    // just to check that it's rendering something
    const productsHomeElement = screen.getByText(/Thank you for shopping with us./i)
    expect(productsHomeElement).toBeInTheDocument()
  })