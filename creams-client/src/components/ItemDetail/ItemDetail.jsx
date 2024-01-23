import React, { useState } from 'react';
import './itemdetail.css'; // Crea un archivo CSS para estilos personalizados
import { Link } from 'react-router-dom';
import Imagen from '../../assets/Creams-Coral.png';

const ItemDetail = () => {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const addToCart = () => {
    // Lógica para agregar al carrito
    console.log(`Producto agregado al carrito - Cantidad: ${quantity}`);
  };

  return (
    <div className="product-details-container">
      <h2>Detalles del Producto</h2>
      <img
        src={Imagen}
        alt="Producto"
        className="product-image"
      />

      <div className="quantity-container">
        <p>Cantidad: {quantity}</p>
        <button onClick={decrementQuantity}>-</button>
        <button onClick={incrementQuantity}>+</button>
      </div>

      <button onClick={addToCart} className="add-to-cart-button">
        Agregar al Carrito
      </button>
    </div>
  );
};

export default ItemDetail;

