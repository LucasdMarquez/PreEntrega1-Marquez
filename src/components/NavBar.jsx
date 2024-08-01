import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from "react-router-dom"

import { CartWidget } from "./CartWidget.jsx";

export const NavBar = () => (
 
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">sniker shop</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/category/zapatillas">Zapatillas</Nav.Link>
            <Nav.Link as={NavLink} to="/category/zapatos">Zapatos</Nav.Link>
          </Nav>
          <CartWidget/>
        </Container>
      </Navbar>

);
