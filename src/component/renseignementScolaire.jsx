// importation react
import React from "react";
import { useNavigate } from 'react-router-dom';
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
//test
const RenseignementScolaire = () => {

  const navigate = useNavigate();

  const handleRetourClick = () => {
    // Utiliser la fonction de navigation pour revenir en arrière
    navigate(-1);
  };

  const handleSuivantClick = () => {
    // Utiliser la fonction de navigation pour aller au prochain composant
    navigate('/situationEtudiant');
  };

  return (
    /*
        Composant des Renseignements scolaire
        Nom et code de l’établissementd’enseignement, 
        code du programme et nombre de crédits.
    */

    <Container controlId="RenseignementScolaire">
      <Row>
        <Col>{/**/}</Col>
        <Col xs={7}>
          <h1 className="text-center">Demande d'aide financière 2/5</h1>
          <form action="url" method="post">
            <Row>
              <Row>
                <Col>
                  <Form.Label>
                    Nom de l’établissement d’enseignement :
                  </Form.Label>
                  <Form.Select
                    className="mb-3"
                    aria-label="Default select example"
                  >
                    <option>Sélection : </option>
                    <option value="1">UQAM</option>
                    <option value="2">McGill</option>
                  </Form.Select>
                  <Form.Label>Code du programme :</Form.Label>
                  <Form.Select
                    className="mb-3"
                    aria-label="Default select example"
                  >
                    <option>Sélection : </option>
                    <option value="1">Inf3421</option>
                    <option value="2">Sci7865</option>
                  </Form.Select>
                </Col>
                <Col>
                  <Form.Label>
                    Code de l’établissement d’enseignement :
                  </Form.Label>
                  <Form.Select
                    className="mb-3"
                    aria-label="Default select example"
                  >
                    <option>Sélection : </option>
                    <option value="1">U432-43</option>
                    <option value="2">U123-78</option>
                  </Form.Select>
                  <Form.Group className="mb-3" controlId="NombreCredit">
                    <Form.Label>Nombre de crédits :</Form.Label>
                    <Form.Control type="text" placeholder="12" />
                  </Form.Group>
                </Col>
              </Row>
            </Row>
            {/*  */}
            <div className="text-center" controlId="DossierBoutons">
              <Button variant="secondary" onClick={handleRetourClick}>
                <FontAwesomeIcon icon={faBackwardStep} /> Retour
              </Button>{" "}
              <Button variant="success">
                <FontAwesomeIcon icon={faCheck} /> Sauvegarde
              </Button>{" "}
              <Button variant="danger">
                <FontAwesomeIcon icon={faX} /> Annulation
              </Button>{" "}
              <Button variant="secondary" onClick={handleSuivantClick}>
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

export default RenseignementScolaire;
