import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';
import { PiPlantFill } from "react-icons/pi";

const navbar = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-light" >
        <Container>
          <Navbar.Brand href="#home">Agro-Insumos JOCAM</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <PiPlantFill />

            <Nav className="me-auto">
              <NavDropdown title="Acerca de" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Contacto</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Nosotros
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3"></NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Ayuda
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <CartWidget />
        </Container>

      </Navbar>
    </>
  )
}

export default navbar