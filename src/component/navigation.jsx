// importation react
import React from "react";
// importation boostrap
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// importation css
import "../css/index.css"

const Navigation = () => {
  return (
    <Container controlId="Navigation">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/">Acceuil</Nav.Link>
            <Nav.Link href="/renseignementPersonnels">Renseignements personnels</Nav.Link>
            <Nav.Link href="/calcul">Calcul de l'aide financière</Nav.Link>
            <Nav.Link href="/montant">Montants versés</Nav.Link>
            <Nav.Link href="/identiteEtudiant">Demande d'aide financière</Nav.Link>
          </Nav>
          <Navbar.Brand href="/">Se déconnecter</Navbar.Brand>
          <Navbar.Text>
            Dossier de : <a href="#login">Bill Murray</a>
          </Navbar.Text>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Navigation;
