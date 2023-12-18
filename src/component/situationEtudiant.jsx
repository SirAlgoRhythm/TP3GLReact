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
import {
  faBackwardStep,
  faCheck,
  faX,
  faForwardStep,
} from "@fortawesome/free-solid-svg-icons";
// importation css
import "../css/index.css"

const SituationEtudiant = () => {
  return (
    /*
        Composant des Renseignements scolaire
        État matrimonial et date de début de cetétat.
    */

    <Container controlId="SituationEtudiant">
      <Row>
        <Col>{/**/}</Col>
        <Col xs={7}>
          <h1 className="text-center">Demande d'aide financière 3/5</h1>
          <form action="url" method="post">
            <Row>
              <Row>
                <Col>
                  <Form.Label>État matrimonial :</Form.Label>
                  <Form.Select
                    className="mb-3"
                    aria-label="Default select example"
                  >
                    <option>Sélection : </option>
                    <option value="1">Célibataire</option>
                    <option value="2">Marié</option>
                    <option value="3">Conjoint de fait</option>
                  </Form.Select>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="DateDeNaissance">
                    <Form.Label>Date de début de cet état :</Form.Label>
                    <Form.Control type="text" placeholder="2003-04-20" />
                  </Form.Group>
                </Col>
              </Row>
            </Row>
            {/*  */}
            <div className="text-center" controlId="DossierBoutons">
              <Button variant="secondary">
                <FontAwesomeIcon icon={faBackwardStep} /> Retour
              </Button>{" "}
              <Button variant="success">
                <FontAwesomeIcon icon={faCheck} /> Sauvegarde
              </Button>{" "}
              <Button variant="danger">
                <FontAwesomeIcon icon={faX} /> Annulation
              </Button>{" "}
              <Button variant="secondary">
                <FontAwesomeIcon icon={faForwardStep} /> Suivant
              </Button>
            </div>
          </form>
        </Col>
        <Col>{/**/}</Col>
      </Row>
      <Row></Row>
    </Container>
  );
};

export { SituationEtudiant };
