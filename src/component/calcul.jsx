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


const Calcul = () => {
  return (
    /*
        Composant des Renseignements personnels
        Portions de prêt et de bourse calculées.
    */

    <Container controlId="Calcul">
      <h1 className="text-center">Calcul de l'aide financière</h1>
      <Row>
        <Col>{/**/}</Col>
        <Col xs={7}>
            <Table striped bordered hover variant="dark">
            <thead className="m-3">
              <tr>
                <th>Numéro de demande</th>
                <th>Date</th>
                <th>Prêt ($)</th>
                <th>Bourse ($)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>14245</td>
                <td>2012-09-01</td>
                <td>3000</td>
                <td>2000</td>
              </tr>
              <tr>
                <td>24243</td>
                <td>2020-09-01</td>
                <td>4320</td>
                <td>5436</td>
              </tr>
            </tbody>
            </Table>
        </Col>
        <Col>{/**/}</Col>
      </Row>
    </Container>
  );
};

export { Calcul };
