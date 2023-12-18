// importation react
import React from "react";
// importation boostrap
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// importation fontawsome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// importation css
import "../css/index.css"

const RenseignementPersonnels = () => {
  return (
    /*
        Composant des Renseignements personnels
        Adresse de correspondance, numéro de téléphone, adresse de courriel. 
    */

    <Container controlId="RenseignementPersonnels">
      <h1 className="text-center">Renseignements personnels</h1>
      <Row>
        <Col>{/**/}</Col>
        <Col xs={7}>
          <Row>
          <Col>
              <Form.Group className="mb-3" controlId="Prenom">
                <Form.Label>Adresse de correspondance :</Form.Label>{" "}
                <Form.Label>1 Jacque Cartier Montréal, Québec, A1B 2C3</Form.Label>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="Nom">
                <Form.Label>Téléphone principale :</Form.Label>{" "}
                <Form.Label>(555)555-5555</Form.Label>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="Nom">
                <Form.Label>Téléphone secondaire :</Form.Label>{" "}
                <Form.Label>(555)555-9999</Form.Label>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="NAS">
                <Form.Label>Adresse de courriel :</Form.Label>{" "}
                <Form.Label>TiBill@gmail.com</Form.Label>
              </Form.Group>
            </Col>
          </Row>
        </Col>
        <Col>{/**/}</Col>
      </Row>
    </Container>
  );
};

export { RenseignementPersonnels };
