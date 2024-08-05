import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';
import Checkout from './components/Checkout';
import Home from './components/Home';
import ShoppingCart from './components/ShoppingCart';
import { CartProvider } from './components/CartContext';
import logo from './assets/peebay.png';
import './App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className='App-header'>
          <Link to='/'><img src={logo} alt='peebay logo' height={47} width={200} /></Link>
          <FontAwesomeIcon icon={faSearch} />
          &nbsp;
          <input type='text' placeholder='   Search...' />
          <Link to="/">Home</Link>
          <Link to="/Checkout">Checkout</Link>
          <Link to="/ShoppingCart"><FontAwesomeIcon icon={faShoppingCart} /></Link>
        </div>
        <div className='Body-stuff'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Checkout' element={<Checkout />} />
            <Route path='/ShoppingCart' element={<ShoppingCart />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
