// importation react
import React from "react";
// importation boostrap
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
// importation fontawsome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// importation css
import "../css/index.css"

const Montant = () => {
  return (
    /*
        Composant des •	Montants versés
        Liste des montants versés durant l’année en cours. 
        Les informations fournies sont la date du versement, 
        le type (prêt ou bourse) ainsi que le montant versé.
    */

    <Container controlId="Montant">
        <h1 className="text-center">Montants versés</h1>
      <Row>
        <Col>{/**/}</Col>
        <Col xs={7}>
        <Table striped bordered hover variant="dark">
            <thead className="m-3">
              <tr>
                <th>Numéro de transaction</th>
                <th>Date du versement</th>
                <th>Type</th>
                <th>Montant ($)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>14245-43243</td>
                <td>2023-09-01</td>
                <td>prêt</td>
                <td>200</td>
              </tr>
              <tr>
                <td>24243-43228</td>
                <td>2023-10-01</td>
                <td>bourse</td>
                <td>546</td>
              </tr>
            </tbody>
            </Table>
        </Col>
        <Col>{/**/}</Col>
      </Row>
    </Container>
  );
};

export default Montant;
