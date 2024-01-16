// TransportCard.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import imageCoral from '../../assets/Creams-Coral.png'
import "./carditem.css"
import "../../index.css"


const TransportCard = ({ title, description, imageSrc}) => {
  return (
    <Card className="custom-transport-card">
      <Card.Body>
        <Card.Img variant="top" src={imageSrc}/>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="secundary">Go somewhere</Button>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default TransportCard;

