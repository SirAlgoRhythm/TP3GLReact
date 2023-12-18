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
import { faBackwardStep, faUser, faCheck, faLock, faUserPlus } from "@fortawesome/free-solid-svg-icons";
// importation css
import "../css/index.css"

const Identification = () => {
    return (
    /*
        Composant d'identification
    */
  
      <Container controlId="Identification">
        <Row>
          <Col>{/**/}</Col>
          <Col xs={7}>
          <h1 className="text-center">Identification</h1>
            <form action="url" method="post">
              <Form.Group className="mb-3" controlId="CodePermanent">
                <FontAwesomeIcon icon={faUser} />{" "}
                <Form.Label>Code permanent :</Form.Label>
                <Form.Control type="text" placeholder="Code permanent" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="MotDePasse">
                <FontAwesomeIcon icon={faLock} />{" "}
                <Form.Label>Mot de passe :</Form.Label>
                <Form.Control type="text" placeholder="Mot de passe" />
              </Form.Group>
              <div className="text-center" controlId="ValidationIdentification">
              <Button variant="secondary" >
                  <FontAwesomeIcon icon={faBackwardStep} /> Retour
                </Button>{" "} 
                <Button variant="success" >
                  <FontAwesomeIcon icon={faCheck} /> Validation 
                </Button>
              </div>
              <div className="text-center mt-5" >
                <h3>Créer son compte utilisateur</h3>
                <Button variant="info" >
                  <FontAwesomeIcon icon={faUserPlus} /> S'inscrire
                </Button>
              </div>
            </form>
          </Col>
          <Col>{/**/}</Col>
        </Row>
      </Container>
    );
  };
  
  export { Identification };