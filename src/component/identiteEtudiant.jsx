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
  faX,
  faForwardStep,
} from "@fortawesome/free-solid-svg-icons";
// importation css
import "../css/index.css"

const IndentiteEtudiant = () => {
  return (
    /*
        Composant d'Indentite de l'étudiant
        IMMUABLE
        Nom, prénom, numéro d’assurance sociale, 
        ---
        MODIFIABLE
        adresse de correspondance, numéro de téléphone principal, 
        autrenuméro de téléphone, adresse de courriel, citoyenneté, 
        code d’immigration, date d’obtention du statut de résident permanent 
        ou de réfugié et langue de correspondance.
    */

    <Container controlId="IndentiteEtudiant">
      <Row>
        <Col>{/**/}</Col>
        <Col xs={7}>
          <h1 className="text-center">Demande d'aide financière 1/5</h1>
          <form action="url" method="post">
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="Prenom">
                  <Form.Label>Prénom :</Form.Label>{" "}
                  <Form.Label>Bill</Form.Label>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="Nom">
                  <Form.Label>Nom :</Form.Label> <Form.Label>Murray</Form.Label>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="NAS">
                  <Form.Label>Assurance sociale :</Form.Label>{" "}
                  <Form.Label>555-555-555</Form.Label>
                </Form.Group>
              </Col>
            </Row>
            {/*  */}
            <Row>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="NumeroPostal">
                    <Form.Label>Numéro :</Form.Label>
                    <Form.Control type="text" placeholder="1" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="Ville">
                    <Form.Label>Ville :</Form.Label>
                    <Form.Control type="text" placeholder="Montréal" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="Province">
                    <Form.Label>Province :</Form.Label>
                    <Form.Control type="text" placeholder="Québec" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="Téléphone1">
                    <Form.Label>Téléphone principal :</Form.Label>
                    <Form.Control type="text" placeholder="(555)555-5555" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="Courriel">
                    <Form.Label>Courriel :</Form.Label>
                    <Form.Control type="email" placeholder="TiBill@gmail.com" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="Code">
                    <Form.Label>
                      Code d'immigration (si applicable) :
                    </Form.Label>
                    <Form.Control type="text" placeholder="qwerty33" />
                  </Form.Group>
                  <Form.Label>Status :</Form.Label>
                  <Form.Select
                    className="mb-3"
                    aria-label="Default select example"
                  >
                    <option>Sélection</option>
                    <option value="1">Citoyen</option>
                    <option value="2">Résident permanent</option>
                    <option value="3">Réfugié</option>
                  </Form.Select>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="Rue">
                    <Form.Label>Rue :</Form.Label>
                    <Form.Control type="text" placeholder="Jacque Cartier" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="CodePostal">
                    <Form.Label>Code postal :</Form.Label>
                    <Form.Control type="text" placeholder="A1B 2C3" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="Pays">
                    <Form.Label>Pays :</Form.Label>
                    <Form.Control type="text" placeholder="Canada" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="Téléphone2">
                    <Form.Label>Téléphone secondaire :</Form.Label>
                    <Form.Control type="text" placeholder="(555)555-9999" />
                  </Form.Group>
                  <Form.Label>Citoyenneté :</Form.Label>
                  <Form.Select
                    className="mb-3"
                    aria-label="Default select example"
                  >
                    <option>Sélection</option>
                    <option value="1">Canadien</option>
                    <option value="2">Francais</option>
                    <option value="3">Autre</option>
                  </Form.Select>
                  <Form.Group className="mb-3" controlId="Code">
                    <Form.Label>
                      Date du statut de résident (si applicable) :
                    </Form.Label>
                    <Form.Control type="text" placeholder="01-01-01" />
                  </Form.Group>
                  <Form.Label>Langue de correspondence :</Form.Label>
                  <Form.Select
                    className="mb-3"
                    aria-label="Default select example"
                  >
                    <option>Sélection : </option>
                    <option value="1">Anglais</option>
                    <option value="2">Francais</option>
                  </Form.Select>
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

export { IndentiteEtudiant };
