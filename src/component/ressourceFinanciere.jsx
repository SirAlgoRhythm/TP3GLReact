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

const RessourceFinanciere = () => {
  return (
    /*
        Composant des Ressource financiere
        Revenus d’emploi et autresrevenus de l’année dernière année ainsi que les revenus potentiels de l’année en cours.
    */

    <Container controlId="RessourceFinanciere">
      <Row>
        <Col>{/**/}</Col>
        <Col xs={7}>
          <h1 className="text-center">Demande d'aide financière 4/5</h1>
          <form action="url" method="post">
            <Row>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="DateDeNaissance">
                    <Form.Label>Revenus d'emploi de l'année dernière :</Form.Label>
                    <Form.Control type="text" placeholder="5431,43$" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="DateDeNaissance">
                    <Form.Label>Revenus potentiels de l'année en cours :</Form.Label>
                    <Form.Control type="text" placeholder="500 $" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="DateDeNaissance">
                    <Form.Label>Autres revenus de l'année dernière :</Form.Label>
                    <Form.Control type="text" placeholder="0 $" />
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

export { RessourceFinanciere };
