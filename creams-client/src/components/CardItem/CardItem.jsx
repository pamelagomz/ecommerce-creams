// TransportCard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import imageCoral from '../../assets/Creams-Coral.png'
import "./carditem.css"
import "../../index.css"
import { Box } from '../ProductList/Box';
import Figure from 'react-bootstrap/Figure';



const TransportCard = ({productData}) => {
  const { id, title, price, image } = productData;

  const navigate = useNavigate();

  const navigateToProductDetails = () =>{
    //redirige a la vista detallada del producto 
    navigate(`/ItemDetail/${id}`, { state: { productData } });
  }
  return (
    <Card className="custom-transport-card">
      <Card.Body>
        <Card.Img variant="top" src={image}/>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{price}</Card.Text>
        <Button onClick={navigateToProductDetails} variant="primary">ADD TO CART</Button>
      </Card.Body>
    </Card>
  );
};

export default TransportCard;

