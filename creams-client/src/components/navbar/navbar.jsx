import React from 'react'
import "./navbar.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/logoCream.png'
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';


const navbar = () => {
  return (
    <div>
        <Navbar expand="lg" className="shadow-sm" style={{ backgroundColor: '#FBDDE6'}}>
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt='Logo' style={{width: "8rem", height: "100%", objectFit: 'cover'}}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-center d-flex justify-content-center align-items-center">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/shop/electronics">Electronics</Nav.Link>
            <Nav.Link as={Link} to="/shop/jewelery">Jewelery</Nav.Link>
            <Nav.Link as={Link} to="/#3">Our Story</Nav.Link>
            <Nav.Link href="#contact">Contact Us</Nav.Link>
            <CartWidget/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default navbar