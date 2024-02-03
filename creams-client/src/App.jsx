
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Carditem from './components/CardItem/CardItem'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Shop from './components/shop/Shop';
import NavBar from './components/navbar/navbar';
import ItemDetail from './components/ItemDetail/ItemDetail';

function App() {

  return (
    <Router>
      <div>
        {/* Incluye tu componente Navbar con las rutas */}
        <NavBar />
        {/* Utiliza <Routes> para envolver tus rutas */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop/electronics" element={<Shop category="electronics" />} />
          <Route path="/shop/jewelery" element={<Shop category="jewelery" />} />
          <Route path="/ItemDetail/:id" element={<ItemDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
