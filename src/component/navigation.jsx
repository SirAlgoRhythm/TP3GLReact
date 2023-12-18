// importation react
import React from "react";
// importation boostrap
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// importation fontawsome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// importation css
import "../css/index.css"

const Navigation = () => {
  return (
    /*
        Composant de nagigation
    */

    <Container controlId="Navigation">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#home">Renseignements personnels</Nav.Link>
            <Nav.Link href="#features">Calcul de l'aide financière</Nav.Link>
            <Nav.Link href="#features">Montants versés</Nav.Link>
            <Nav.Link href="#features">Demande d'aide financière</Nav.Link>
          </Nav>
          <Navbar.Brand href="#home">Se déconnecter</Navbar.Brand>
          <Navbar.Text>
            Dossier de : <a href="#login">Bill Murray</a>
          </Navbar.Text>
        </Container>
      </Navbar>
    </Container>
  );
};

export { Navigation };
