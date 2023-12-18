// importation react
import React from "react";
// importation boostrap
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// importation fontawsome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// importation image
import Image from '../public/image/ministere.jpg';
// importation css
import "../css/index.css"

const PageDAcceuil = () => {
    return (
    /*
        Composant page d'acceuil
    */
  
      <Container controlId="PageDAcceuil">
              <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Menu principale</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Élèves et parents</Nav.Link>
            <Nav.Link href="#features">Réseau scolaire</Nav.Link>
            <Nav.Link href="#features">Le Ministre</Nav.Link>
            <Nav.Link href="#features">Salle de presse</Nav.Link>
            <Nav.Link href="./">S'authentifier</Nav.Link>
            <Nav.Link href="./">Mon dossier</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        <Row><img src={Image} alt="Image" /></Row>
      </Container>
    );
  };
  
  export { PageDAcceuil };