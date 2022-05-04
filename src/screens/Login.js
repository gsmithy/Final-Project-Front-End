import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import FormGroup from "react-bootstrap/FormGroup";


const Login = () => {
  return (
    <div>
      <Container className="p-4 d-flex justify-content-center">
        <Card style={{ width: "40rem" }}>      
        <Card.Header className="text-center">    
          <h2>Login</h2>
          </Card.Header>
          <Card.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <FormGroup className="d-flex justify-content-end">
                <Button variant="secondary" type="submit">
                  Submit
                </Button>
              </FormGroup>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Login;
