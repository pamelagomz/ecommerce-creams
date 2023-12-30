import React from 'react'
import "./navbar.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/logoCream.png'
import CartWidget from '../CartWidget/CartWidget';


const navbar = () => {
  return (
    <div>
        <Navbar expand="lg" className="shadow-sm" style={{ backgroundColor: '#FBDDE6'}}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt='Logo' style={{width: "8rem", height: "100%", objectFit: 'cover'}}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-center d-flex justify-content-center align-items-center">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#shop">Shop</Nav.Link>
            <Nav.Link href="#story">Our Story</Nav.Link>
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