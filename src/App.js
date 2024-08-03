import Checkout from './components/Checkout';
import Home from './components/Home';
import ShoppingCart from './components/ShoppingCart';

import logo from './assets/peebay.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';


import React from 'react';
function App() {
  return (
    <Router>
      <div className='App-header'>
            <Link to='/'><img src={logo} alt='ebay logo' height={47} width={200}/></Link>
            <FontAwesomeIcon icon={faSearch}/>
            &nbsp;
            <input type='text' placeholder='   Search...'></input>
            <Link to="/">Home</Link>
            <Link to="/Checkout">Checkout</Link>
            <Link to="/ShoppingCart"> <FontAwesomeIcon icon={faShoppingCart} /> </Link>
           
      </div>
    <div className='Body-stuff'>
      <Routes>
           <Route path='/' element={<Home />} />
           <Route path='/Checkout' element={<Checkout />} />
           <Route path='/ShoppingCart' element={<ShoppingCart />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
