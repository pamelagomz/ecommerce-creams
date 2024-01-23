// TransportCard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import imageCoral from '../../assets/Creams-Coral.png'
import "./carditem.css"
import "../../index.css"
import { Box } from '../ProductList/Box';
import Figure from 'react-bootstrap/Figure';



const TransportCard = ({ title, description, imageSrc}) => {
  const navigate = useNavigate();

  const navigateToProductDetails = () =>{
    //redirige a la vista detallada del producto 
    navigate(`/ItemDetail/${title}`)
  }
  return (
    <Card className="custom-transport-card">
      <Card.Body>
        <Card.Img variant="top" src={imageSrc}/>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Box>
          <Button></Button>
        </Box>
        <Button onClick={navigateToProductDetails} variant="primary">ADD TO CART</Button>
      </Card.Body>
    </Card>
  );
};

export default TransportCard;

