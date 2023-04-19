import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Buy from './Buy';
import Cart from './Cart';
import { CartProvider } from "react-use-cart";


function App() {
  return (


    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="buy" element={<Buy />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>

  );
}

export default App;
