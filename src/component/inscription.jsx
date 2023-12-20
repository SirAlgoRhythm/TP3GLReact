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
  faCalendar,
  faBackwardStep,
  faUser,
  faCheck,
  faLock,
  faSave,
} from "@fortawesome/free-solid-svg-icons";
// importation css
import "../css/index.css";

const Inscription = () => {
  return (
    /*
        Composant d'inscription
    */

    <Container controlId="Inscription">
      <Row>
        <Col>{/**/}</Col>
        <Col xs={7}>
          <h1 className="text-center">Inscription</h1>
          <form action="url" method="post">
            <div>
              <Form.Group className="mb-3" controlId="NumeroAssuranceSociale">
                <FontAwesomeIcon icon={faUser} />{" "}
                <Form.Label>Numéro d'assurance sociale :</Form.Label>
                <Form.Control type="text" placeholder="XXX-XXX-XXX" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="DateDeNaissance">
                <FontAwesomeIcon icon={faCalendar} />{" "}
                <Form.Label>Date de naissance :</Form.Label>
                <Form.Control type="date" placeholder="Date de naissance" />
              </Form.Group>
            </div>
            <div className="text-center" controlId="ValidationInscription">
              <Button variant="secondary">
                <FontAwesomeIcon icon={faBackwardStep} /> Retour
              </Button>{" "}
              <Button variant="success">
                <FontAwesomeIcon icon={faCheck} /> Validation
              </Button>
            </div>
            <div className="mt-5">
              <Form.Group className="mb-3" controlId="MotDePasseSelection">
                <FontAwesomeIcon icon={faLock} />{" "}
                <Form.Label>Mot de passe :</Form.Label>
                <Form.Control type="text" placeholder="Mot de passe" />
              </Form.Group>
            </div>
            <div className="text-center" controlId="ConfirmationMotDePasse">
              <Button variant="secondary">
                <FontAwesomeIcon icon={faBackwardStep} /> Retour
              </Button>{" "}
              <Button variant="warning">
                <FontAwesomeIcon icon={faSave} /> Confirmation
              </Button>
            </div>
          </form>
        </Col>
        <Col>{/**/}</Col>
      </Row>
    </Container>
  );
};

export default Inscription;
