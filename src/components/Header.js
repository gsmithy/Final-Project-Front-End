import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <Navbar bg="light" variant="light">
          <Container>
            <Navbar.Brand href="/"><img src='/Vector.svg'/></Navbar.Brand>
            <Nav className=" d-flex justify-content-end">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/newpost">New Post</Nav.Link>
              <Nav.Link href="/profile">Profile</Nav.Link>
              <Nav.Link href="/Sign Up">Sign Up</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }
}
