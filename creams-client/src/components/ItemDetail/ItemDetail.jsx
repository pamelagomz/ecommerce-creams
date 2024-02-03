import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './itemdetail.css'; // Crea un archivo CSS para estilos personalizados
import { Link } from 'react-router-dom';
import Imagen from '../../assets/Creams-Coral.png';

const ItemDetail = () => {

  const { id } = useParams();
  const { state } = useLocation();
  const { title, price, image } = state.productData;

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

    console.log(`Producto agregado al carrito - Cantidad: ${quantity}`);
    console.log('Detalles del Producto:', {
      id,
      title,
      price,
      image,
      quantity,
    });
  };

  return (
    <div className="product-details-container">
      <h2>Detalles del Producto</h2>
      <img
        src={image}
        alt="Producto"
        className="product-image"
      />

      <div className="product-info">
        <h3>{title}</h3>
        <p>Precio: {price}</p>
      </div>

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

