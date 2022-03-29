import { render } from "@testing-library/react";
import React, {Component} from "react";
import { Container,Navbar, Navdropdown, Nav } from "react-bootstrap";
export default class CNavbar extends Component{
    render(){
        return(
           
  <>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Bebidas</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Inicio</Nav.Link>
      <Nav.Link href="#features">Sin alcol</Nav.Link>
      <Nav.Link href="#pricing">Con alcol</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
</>
           
        )

    }
}