import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Connexion = () => {
  return (
    <div style ={{margin:'50px'}}>
    <h1>Connexion</h1>
    <Form>
    <div class="col col-lg-3">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          On ne vend pas encore les adresses mail &#128512;
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Mot de passe</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Se connecter
      </Button>
      </div>
    </Form>

    </div>
  );
};

export default Connexion;