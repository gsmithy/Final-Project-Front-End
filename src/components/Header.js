import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
// import { useNavigate } from 'react-router-dom';



export default class Header extends React.Component {

  render() {
    return (
      <div>
        <Navbar bg="light" variant="light" sticky="top" >
          <Container>
            <Navbar.Brand href="/"><img src='/Vector.svg' alt='good news logo'/></Navbar.Brand>
            <Nav className=" d-flex justify-content-end">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/newpost">New Post</Nav.Link>
              <Nav.Link href="/profile">Profile</Nav.Link>
              <Nav.Link href="/signup">Sign Up</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }
}