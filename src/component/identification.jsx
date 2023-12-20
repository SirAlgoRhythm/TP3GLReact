// importation react
import React, { useState } from "react";
import PropTypes from 'prop-types';
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


async function postIdentification(credentials) {
  return fetch('http://localhost:5252/api/etudiants/identification', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }

const Identification = ({ setToken }) => {
  const [codePerm, setCodePerm] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await postIdentification({
      codePerm,
      password
    });
    setToken(token);
  }

    return (
      <Container controlId="Identification">
        <Row>
          <Col>{/**/}</Col>
          <Col xs={7}>
          <h1 className="text-center">Identification</h1>
            <form onSubmit={handleSubmit} >
              <Form.Group className="mb-3" controlId="CodePermanent">
                <FontAwesomeIcon icon={faUser} />{" "}
                <Form.Label>Code permanent :</Form.Label>
                <Form.Control type="text" onChange={e => setCodePerm(e.target.value)} placeholder="Code permanent" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="MotDePasse">
                <FontAwesomeIcon icon={faLock} />{" "}
                <Form.Label>Mot de passe :</Form.Label>
                <Form.Control type="password" onChange={e => setPassword(e.target.value)} placeholder="Mot de passe" />
              </Form.Group>
              <div className="text-center" controlId="ValidationIdentification">
              <Button variant="secondary" >
                  <FontAwesomeIcon icon={faBackwardStep} /> Retour
                </Button>{" "} 
                <Button type="submit" variant="success" >
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
  
  export default Identification;

  Identification.propTypes = {
    setToken: PropTypes.func.isRequired
  }