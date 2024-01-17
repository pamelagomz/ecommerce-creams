// TransportCard.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import imageCoral from '../../assets/Creams-Coral.png'
import "./carditem.css"
import "../../index.css"
import { Box } from '../ProductList/Box';
import Figure from 'react-bootstrap/Figure';



const TransportCard = ({ title, description, imageSrc}) => {
  return (
    <Card className="custom-transport-card">
      <Card.Body>
        <Card.Img variant="top" src={imageSrc}/>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Box>
          <Button></Button>
        </Box>
        <Button variant="primary">ADD TO CART</Button>
      </Card.Body>
    </Card>
  );
};

export default TransportCard;

