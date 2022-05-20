import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
// import { useState, useEffect } from "react";

const Header = () => {
  const logout = () => {
    localStorage.clear();
  };
    return (
      <div>
        <Navbar bg="light" variant="light" sticky="true" >
          <Container>
            <Navbar.Brand href="/">
              <img src="/Vector.svg" alt="good news logo" />
            </Navbar.Brand>
            <Nav className=" d-flex justify-content-end">
              <Nav.Link href="/">HOME</Nav.Link>
              <Nav.Link href="/login">LOGIN</Nav.Link>
              <Nav.Link href="/newpost">POST</Nav.Link>
              <Nav.Link href="/profile">PROFILE</Nav.Link>
              <Nav.Link href="/signup">REGISTER</Nav.Link>
              <Nav.Link onClick={logout} href="/login">LOGOUT</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
};

export default Header;
