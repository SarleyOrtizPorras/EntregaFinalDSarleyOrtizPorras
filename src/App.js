import './App.css';
import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Checkout/Brief';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import CartProvider from './context/CartContext';
import Checkout from "./components/Checkout/checkout";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/detalle/:detalleId' element={<ItemDetailContainer />} />
          <Route path="/" exact component={Cart} />
        <Route path="/checkout" component={Checkout} />
        </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
