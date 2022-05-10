import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import FormGroup from "react-bootstrap/FormGroup";
//import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";


const Login = () => {
  const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const signIn = (e) => {
        e.preventDefault();

        if(username !== '' && password !== '') {
            const req = {
                user_name: username,
                password: password
            };

            axios.post('http://localhost:3001/users/login', req).then(result => {
                const token = result.data.jwt;
                localStorage.setItem('myJWT', token)
                console.log(result.data);
            })
        }
    }

  return (
    <div>
      <Container className="p-4 d-flex justify-content-center">
        <Card style={{ width: "40rem" }}>      
        <Card.Header className="text-center">    
          <h2>Login</h2>
          </Card.Header>
          <Card.Body>
            <Form onSubmit={signIn}>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter username" onChange={ e => setUsername(e.target.value)} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={ e => setPassword(e.target.value)} />
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
